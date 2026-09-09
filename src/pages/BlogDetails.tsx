import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Markdown from 'react-markdown';
import { blogs } from '../data/blogs';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20 pb-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4" />
              {blog.date}
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
              <User className="w-4 h-4" />
              {blog.author} • {blog.role}
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="prose prose-lg prose-blue max-w-none text-gray-700">
            <Markdown>{blog.content}</Markdown>
          </div>
        </motion.div>

        <div className="border-t border-gray-100 pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Written by</p>
              <p className="font-bold text-gray-900 text-lg">{blog.author}</p>
              <p className="text-sm text-gray-600">{blog.role}</p>
            </div>
            {/* Share buttons could go here */}
          </div>
        </div>
      </article>
    </div>
  );
}
