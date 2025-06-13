
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Finance: How AI is Revolutionizing Accounting",
      excerpt: "Exploring the transformative impact of artificial intelligence on traditional accounting practices and what it means for the future of finance professionals.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Finance",
      featured: true
    },
    {
      title: "Personal Finance in the Digital Age: A Gen-Z Perspective",
      excerpt: "Understanding how digital tools and apps are changing the way young people manage money, invest, and plan for their financial future.",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Personal Finance"
    },
    {
      title: "Cryptocurrency and Traditional Accounting: Bridging the Gap",
      excerpt: "How traditional accounting principles apply to cryptocurrency transactions and the challenges faced by modern accountants.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Crypto & Finance"
    },
    {
      title: "Data Analytics in Financial Decision Making",
      excerpt: "The role of data analytics in modern financial decision making and how students can develop these crucial skills.",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "Data & Analytics"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blog & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing thoughts on finance, technology, entrepreneurship, and the future of business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow ${post.featured ? 'ring-2 ring-primary/20' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={post.featured ? "default" : "secondary"}>
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <Badge variant="destructive">Featured</Badge>
                  )}
                </div>
                <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Topics I Write About
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Finance", "AI & Technology", "Entrepreneurship", "Personal Finance", "Market Analysis", "Career Development"].map((topic, index) => (
              <Badge key={index} variant="outline" className="text-sm px-3 py-1">
                {topic}
              </Badge>
            ))}
          </div>
          <Button size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
