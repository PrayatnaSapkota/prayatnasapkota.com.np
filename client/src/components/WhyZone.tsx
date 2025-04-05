import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { type BlogPost } from "@shared/schema";

interface BlogArticle extends BlogPost {
  isExpanded: boolean;
}

export default function WhyZone() {
  const [articles, setArticles] = useState<BlogArticle[]>([]);

  // Fetch blog posts from the API
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
    staleTime: 60 * 1000, // 1 minute
  });

  // When blog posts are loaded, convert them to our component's format
  useEffect(() => {
    if (blogPosts && Array.isArray(blogPosts)) {
      const articlesWithExpanded = blogPosts.map((post: BlogPost) => ({
        ...post,
        isExpanded: false
      }));
      setArticles(articlesWithExpanded);
    }
  }, [blogPosts]);

  // Fallback data if no blog posts are available yet
  useEffect(() => {
    if (!isLoading && !error && (!blogPosts || (Array.isArray(blogPosts) && blogPosts.length === 0))) {
      // Initialize with default articles if database is empty
      setArticles([
        {
          id: 1,
          title: "Why I think curiosity > knowledge",
          snippet: "Curiosity is the driving force behind learning. Knowledge is a collection of facts, but curiosity is the spark that makes us search for answers...",
          fullContent: "While knowledge can be limited to what's already discovered, curiosity is endless and leads to new questions, deeper understanding, and greater discoveries. It's the key to innovation.",
          isExpanded: false,
          icon: "🔍",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          id: 2,
          title: "Why I don't follow religious rules",
          snippet: "I believe that rules should be based on reason, evidence, and personal reflection rather than blind tradition...",
          fullContent: "For me, following religious rules often feels like being restricted by something that doesn't have practical evidence to back it up. I prefer exploring the world through logic, science, and personal values instead of adhering to outdated customs that don't resonate with my perspective on life.",
          isExpanded: false,
          icon: "⚖️",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          id: 3,
          title: "Why we fear things we don't understand",
          snippet: "Fear is a natural instinct, but it often arises from the unknown. Insects and death are two things that many people fear because they are perceived as unpredictable...",
          fullContent: "We fear what we don't understand because it challenges our sense of safety and comfort. Understanding them can often reduce this fear—whether it's learning about the role of insects in ecosystems or contemplating the inevitability of death and how it shapes the way we live.",
          isExpanded: false,
          icon: "🦋",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          id: 4,
          title: "Why questioning makes life better",
          snippet: "Life becomes richer and more fulfilling when we question everything. It pushes us to think critically, challenge assumptions, and seek truth...",
          fullContent: "Without questioning, we stagnate in ignorance, living on autopilot. Asking \"why\" leads to personal growth, deeper insights, and a sense of empowerment. It encourages us to embrace uncertainty and explore new possibilities.",
          isExpanded: false,
          icon: "💭",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        }
      ]);
    }
  }, [isLoading, error, blogPosts]);

  const toggleArticle = (id: number) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === id 
          ? { ...article, isExpanded: !article.isExpanded } 
          : article
      )
    );
  };

  return (
    <section id="why-zone" className="py-16 scroll-mt-20 relative">
      {/* Decorative background */}
      <div className="absolute -top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#8B5CF6]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-gradient-to-tr from-[#6366F1]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-space font-bold mb-8 text-[#F8FAFC] flex items-center">
          <div className="relative mr-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-lg rotate-45 absolute"></div>
            <span className="relative z-10 text-white flex items-center justify-center w-10 h-10">🤔</span>
          </div>
          Why Zone <span className="text-[#8B5CF6] ml-2">(Blog)</span>
        </h2>
        
        <div className="mb-8 bg-gradient-to-br from-[#334155]/50 to-[#1E293B]/50 p-6 rounded-xl border border-[#64748B]/30 backdrop-blur-sm">
          <p className="text-lg text-gray-300">
            I always ask "Why?", and now it's time to write those thoughts out loud. Explore my philosophical musings below.
          </p>
        </div>
        
        {/* Blog Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading ? (
            // Loading skeleton
            <>
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="bg-gradient-to-br from-[#334155]/50 to-[#1E293B]/50 border border-[#64748B]/30 rounded-xl overflow-hidden p-8">
                  <div className="flex items-start mb-4">
                    <Skeleton className="w-12 h-12 rounded-xl mr-4 bg-[#334155]/70" />
                    <Skeleton className="h-7 w-3/4 bg-[#334155]/70" />
                  </div>
                  <Skeleton className="h-4 w-full mb-3 bg-[#334155]/70" />
                  <Skeleton className="h-4 w-5/6 mb-3 bg-[#334155]/70" />
                  <Skeleton className="h-4 w-4/6 mb-6 bg-[#334155]/70" />
                  <Skeleton className="h-9 w-28 rounded-lg bg-[#334155]/70" />
                </div>
              ))}
            </>
          ) : error ? (
            // Error state
            <div className="col-span-2 bg-gradient-to-br from-[#334155]/50 to-[#1E293B]/50 border border-[#64748B]/30 rounded-xl p-6 text-center">
              <p className="text-red-400 mb-2">Unable to load blog posts</p>
              <p className="text-gray-400 text-sm">Please try again later</p>
            </div>
          ) : (
            // Loaded content
            articles.map(article => (
              <div 
                key={article.id}
                className="bg-gradient-to-br from-[#334155]/50 to-[#1E293B]/50 border border-[#64748B]/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] relative group"
              >
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 opacity-5 pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="#8B5CF6" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="50" r="35" stroke="#8B5CF6" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="50" r="30" stroke="#8B5CF6" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center mr-4 border border-[#8B5CF6]/20 group-hover:bg-[#8B5CF6]/20 transition-colors">
                      <span className="text-xl">{article.icon}</span>
                    </div>
                    <h3 className="text-xl font-space font-semibold text-[#F8FAFC] flex-1">{article.title}</h3>
                  </div>
                  
                  <div className={`text-gray-300 transition-all duration-300 ${article.isExpanded ? 'mb-6' : 'mb-4'}`}>
                    {article.isExpanded ? (
                      <>
                        <p className="mb-4">{article.snippet}</p>
                        <p>{article.fullContent}</p>
                      </>
                    ) : (
                      <p>{article.snippet}</p>
                    )}
                  </div>
                  
                  <button 
                    className="px-4 py-2 rounded-lg bg-[#0F172A]/40 text-[#8B5CF6] hover:bg-[#8B5CF6]/20 transition-colors text-sm font-medium flex items-center"
                    onClick={() => toggleArticle(article.id)}
                  >
                    {article.isExpanded ? (
                      <>
                        <span>Read less</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 ml-2" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>Read more</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 ml-2" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M14.707 10.707a1 1 0 01-1.414 0L10 7.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
