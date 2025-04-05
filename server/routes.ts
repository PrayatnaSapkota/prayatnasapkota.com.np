import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {

  // NASA APOD API proxy endpoint
  app.get('/api/nasa/apod', async (req, res) => {
    try {
      const apiKey = process.env.NASA_API_KEY || "DEMO_KEY";
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch APOD data from NASA');
      }
      
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching NASA APOD:', error);
      res.status(500).json({ 
        error: 'Failed to fetch NASA APOD data',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Blog posts API endpoints
  // Get all blog posts
  app.get('/api/blog-posts', async (_req: Request, res: Response) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({
        error: 'Failed to fetch blog posts',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Get a specific blog post by ID
  app.get('/api/blog-posts/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
      }

      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ error: 'Blog post not found' });
      }

      res.json(post);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      res.status(500).json({
        error: 'Failed to fetch blog post',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Create a new blog post
  app.post('/api/blog-posts', async (req: Request, res: Response) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const newPost = await storage.createBlogPost(validatedData);
      res.status(201).json(newPost);
    } catch (error) {
      console.error('Error creating blog post:', error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: 'Validation error', 
          details: error.errors 
        });
      }
      res.status(500).json({
        error: 'Failed to create blog post',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Update an existing blog post
  app.patch('/api/blog-posts/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
      }

      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ error: 'Blog post not found' });
      }

      // Validate only the fields that were provided
      const validatedData = insertBlogPostSchema.partial().parse(req.body);
      
      const updatedPost = await storage.updateBlogPost(id, validatedData);
      res.json(updatedPost);
    } catch (error) {
      console.error('Error updating blog post:', error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: 'Validation error', 
          details: error.errors 
        });
      }
      res.status(500).json({
        error: 'Failed to update blog post',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Delete a blog post
  app.delete('/api/blog-posts/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
      }

      const success = await storage.deleteBlogPost(id);
      if (!success) {
        return res.status(404).json({ error: 'Blog post not found' });
      }

      res.status(204).end();
    } catch (error) {
      console.error('Error deleting blog post:', error);
      res.status(500).json({
        error: 'Failed to delete blog post',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
