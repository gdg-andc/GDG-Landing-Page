import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, tutorials, and stories from the GDG ANDC community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blog.author}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>
                <Link 
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors mt-auto"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
