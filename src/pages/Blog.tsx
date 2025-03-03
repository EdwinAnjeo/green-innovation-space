
import Layout from '@/components/layout/Layout';
import { Calendar, ArrowRight, Tag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "Revolutionizing Agriculture Through Mechanization",
    date: "May 20, 2023",
    category: "Technology",
    excerpt: "Discover how mechanization is transforming agricultural practices in Kenya, increasing efficiency and productivity for farmers across the nation.",
    image: "/lovable-uploads/110e6d67-493c-4314-bce6-0d3ad2358ce8.png"
  },
  {
    id: 2,
    title: "Sustainable Farming Practices for Climate Resilience",
    date: "April 15, 2023",
    category: "Sustainability",
    excerpt: "Learn about sustainable farming techniques that help farmers adapt to climate change and ensure food security for future generations.",
    image: "/lovable-uploads/0dec4fcd-07ca-4057-9198-a6e5b1961d49.png"
  },
  {
    id: 3,
    title: "Value Addition: Transforming Raw Agricultural Products",
    date: "March 10, 2023",
    category: "Value Addition",
    excerpt: "Explore how value addition processes can significantly increase the market value of agricultural products and create more income for farmers.",
    image: "/lovable-uploads/29d17a01-d3e0-40c5-9edb-9c79ce8d59a5.png"
  }
];

const categories = [
  "Technology", "Sustainability", "Value Addition", "Training", "Research", "Policy", "Success Stories"
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="lg:flex lg:gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-atdc-green mb-4 animate-fade-in">Latest Articles</h2>
                <div className="h-1 w-20 bg-atdc-orange"></div>
              </div>

              <div className="space-y-10">
                {blogs.map((blog, index) => (
                  <div 
                    key={blog.id} 
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-2/5">
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                          className="h-56 w-full object-cover md:h-full"
                        />
                      </div>
                      <div className="p-6 md:w-3/5">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar size={14} className="mr-1" />
                          <span>{blog.date}</span>
                          <span className="mx-2">•</span>
                          <Tag size={14} className="mr-1" />
                          <span>{blog.category}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                        <Link 
                          to={`/blog/${blog.id}`} 
                          className="text-atdc-green font-medium inline-flex items-center hover:text-atdc-green/80"
                        >
                          Read More <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10 animate-pulse-light">
                <Button className="bg-atdc-orange hover:bg-atdc-orange/90">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 mt-12 lg:mt-0 animate-fade-in animation-delay-300">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8 hover-scale">
                <h3 className="text-lg font-bold mb-4">Search Articles</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-atdc-green focus:border-atdc-green"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 mb-8 hover-scale">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link 
                        to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between text-gray-700 hover:text-atdc-green transition-colors"
                      >
                        <span>{category}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover-scale">
                <h3 className="text-lg font-bold mb-4">Subscribe to Updates</h3>
                <p className="text-gray-600 mb-4">Get the latest articles and updates delivered to your inbox.</p>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-atdc-green focus:border-atdc-green"
                />
                <Button className="w-full bg-atdc-orange hover:bg-atdc-orange/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
