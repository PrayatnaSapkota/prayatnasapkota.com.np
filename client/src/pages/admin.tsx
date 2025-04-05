import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogPost } from "@shared/schema";
import { apiRequest, getQueryFn } from "@/lib/queryClient";

// Type for editing state
type EditingPost = {
  id: number;
  title: string;
  snippet: string;
  fullContent: string;
  icon: string;
};

export default function Admin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [editingPost, setEditingPost] = useState<EditingPost | null>(null);
  const [newPost, setNewPost] = useState({
    title: "",
    snippet: "",
    fullContent: "",
    icon: "💭",
    userId: 1
  });
  const [isCreating, setIsCreating] = useState(false);

  // Fetch blog posts
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
    enabled: isAuthenticated,
    queryFn: getQueryFn<BlogPost[]>({ on401: "throw" })
  });

  // Create mutation
  const createMutation = useMutation({
    mutationFn: (post: typeof newPost) => 
      apiRequest('POST', '/api/blog-posts', post),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Blog post created successfully"
      });
      queryClient.invalidateQueries({ queryKey: ['/api/blog-posts'] });
      setIsCreating(false);
      setNewPost({
        title: "",
        snippet: "",
        fullContent: "",
        icon: "💭",
        userId: 1
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create blog post",
        variant: "destructive"
      });
    }
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: (post: EditingPost) => 
      apiRequest('PATCH', `/api/blog-posts/${post.id}`, {
        title: post.title,
        snippet: post.snippet,
        fullContent: post.fullContent,
        icon: post.icon
      }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Blog post updated successfully"
      });
      queryClient.invalidateQueries({ queryKey: ['/api/blog-posts'] });
      setEditingPost(null);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update blog post",
        variant: "destructive"
      });
    }
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest('DELETE', `/api/blog-posts/${id}`),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Blog post deleted successfully"
      });
      queryClient.invalidateQueries({ queryKey: ['/api/blog-posts'] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to delete blog post",
        variant: "destructive"
      });
    }
  });

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (for demo)
    // In a real app, you would use proper authentication
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast({
        title: "Logged In",
        description: "Welcome to the admin panel"
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid password",
        variant: "destructive"
      });
    }
  };

  // Handle edit post
  const handleEditPost = (post: BlogPost) => {
    setEditingPost({
      id: post.id,
      title: post.title,
      snippet: post.snippet,
      fullContent: post.fullContent,
      icon: post.icon
    });
  };

  // Handle delete post
  const handleDeletePost = (id: number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteMutation.mutate(id);
    }
  };

  // Handle save edit
  const handleSaveEdit = () => {
    if (editingPost) {
      updateMutation.mutate(editingPost);
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditingPost(null);
  };

  // Handle create post
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(newPost);
  };

  if (!isAuthenticated) {
    return (
      <div className="py-32 max-w-4xl mx-auto px-4">
        <div className="bg-[#334155]/30 border border-[#64748B]/30 rounded-lg p-8 max-w-md mx-auto">
          <h1 className="text-3xl font-space font-bold mb-8 text-[#F8FAFC]">Admin Login</h1>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0F172A]/50 border border-[#64748B]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="Enter admin password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-medium rounded-md transition-colors shadow-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-32 max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-space font-bold text-[#F8FAFC]">Blog Post Admin</h1>
        <button
          onClick={() => setIsAuthenticated(false)}
          className="px-4 py-2 bg-[#1E293B] text-white rounded-md hover:bg-[#1E293B]/80"
        >
          Logout
        </button>
      </div>

      {/* Create new post button */}
      {!isCreating && !editingPost && (
        <button
          onClick={() => setIsCreating(true)}
          className="mb-8 px-6 py-3 bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-medium rounded-md transition-colors shadow-lg"
        >
          Create New Post
        </button>
      )}

      {/* Create new post form */}
      {isCreating && !editingPost && (
        <div className="bg-[#334155]/30 border border-[#64748B]/30 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-space font-semibold mb-4 text-[#F8FAFC]">Create New Blog Post</h2>
          
          <form onSubmit={handleCreatePost} className="space-y-4">
            <div>
              <label htmlFor="new-title" className="block text-gray-300 mb-2">Title</label>
              <input
                type="text"
                id="new-title"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                className="w-full bg-[#0F172A]/50 border border-[#64748B]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="Title"
                required
              />
            </div>
            
            <div>
              <label htmlFor="new-snippet" className="block text-gray-300 mb-2">Snippet</label>
              <input
                type="text"
                id="new-snippet"
                value={newPost.snippet}
                onChange={(e) => setNewPost({...newPost, snippet: e.target.value})}
                className="w-full bg-[#0F172A]/50 border border-[#64748B]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="Short description"
                required
              />
            </div>
            
            <div>
              <label htmlFor="new-content" className="block text-gray-300 mb-2">Full Content</label>
              <textarea
                id="new-content"
                value={newPost.fullContent}
                onChange={(e) => setNewPost({...newPost, fullContent: e.target.value})}
                className="w-full bg-[#0F172A]/50 border border-[#64748B]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] h-32"
                placeholder="Full article content"
                required
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="new-icon" className="block text-gray-300 mb-2">Icon (emoji)</label>
              <input
                type="text"
                id="new-icon"
                value={newPost.icon}
                onChange={(e) => setNewPost({...newPost, icon: e.target.value})}
                className="w-full bg-[#0F172A]/50 border border-[#64748B]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="Icon emoji (e.g. 💭)"
                required
              />
            </div>
            
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                className="px-6 py-2 bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-medium rounded-md transition-colors shadow-lg"
                disabled={createMutation.isPending}
              >
                {createMutation.isPending ? 'Creating...' : 'Create Post'}
              </button>
              
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-6 py-2 bg-[#475569] hover:bg-[#475569]/90 text-white font-medium rounded-md transition-colors shadow-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit post form */}
      {editingPost && (
        <div className="bg-[#334155]/30 border border-[#64748B]/30 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-space font-semibold mb-4 text-[#F8FAFC]">Edit Blog Post</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="edit-title" className="block text-gray-300 mb-2">Title</label>
              <input
                type="text"
                id="edit-title"
                value={editingPost.title}
                onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                className="w-full bg-[#0F172A]/50 border border-[#64748B]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="Title"
              />
            </div>
            
            <div>
              <label htmlFor="edit-snippet" className="block text-gray-300 mb-2">Snippet</label>
              <input
                type="text"
                id="edit-snippet"
                value={editingPost.snippet}
                onChange={(e) => setEditingPost({...editingPost, snippet: e.target.value})}
                className="w-full bg-[#0F172A]/50 border border-[#64748B]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="Short description"
              />
            </div>
            
            <div>
              <label htmlFor="edit-content" className="block text-gray-300 mb-2">Full Content</label>
              <textarea
                id="edit-content"
                value={editingPost.fullContent}
                onChange={(e) => setEditingPost({...editingPost, fullContent: e.target.value})}
                className="w-full bg-[#0F172A]/50 border border-[#64748B]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] h-32"
                placeholder="Full article content"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="edit-icon" className="block text-gray-300 mb-2">Icon (emoji)</label>
              <input
                type="text"
                id="edit-icon"
                value={editingPost.icon}
                onChange={(e) => setEditingPost({...editingPost, icon: e.target.value})}
                className="w-full bg-[#0F172A]/50 border border-[#64748B]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="Icon emoji (e.g. 💭)"
              />
            </div>
            
            <div className="flex gap-4 pt-2">
              <button
                onClick={handleSaveEdit}
                className="px-6 py-2 bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-medium rounded-md transition-colors shadow-lg"
                disabled={updateMutation.isPending}
              >
                {updateMutation.isPending ? 'Saving...' : 'Save Changes'}
              </button>
              
              <button
                onClick={handleCancelEdit}
                className="px-6 py-2 bg-[#475569] hover:bg-[#475569]/90 text-white font-medium rounded-md transition-colors shadow-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog posts list */}
      <div className="bg-[#334155]/30 border border-[#64748B]/30 rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-space font-semibold mb-6 text-[#F8FAFC]">Manage Blog Posts</h2>
          
          {isLoading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin h-8 w-8 border-4 border-[#8B5CF6] border-t-transparent rounded-full"></div>
              <p className="mt-4 text-gray-400">Loading blog posts...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {blogPosts && blogPosts.length > 0 ? (
                blogPosts.map((post: BlogPost) => (
                  <div key={post.id} className="bg-[#1E293B]/50 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-white flex items-center">
                          <span className="mr-2">{post.icon}</span> {post.title}
                        </h3>
                        <p className="text-gray-400 mt-1">{post.snippet}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditPost(post)}
                          className="px-3 py-1 bg-[#334155] text-white rounded hover:bg-[#334155]/80 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="px-3 py-1 bg-[#EF4444]/80 text-white rounded hover:bg-[#EF4444] transition-colors"
                          disabled={deleteMutation.isPending}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-400">
                        Last updated: {new Date(post.updatedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400 py-4">No blog posts found. Create your first post!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}