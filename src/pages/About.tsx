import { motion } from 'motion/react';
import { Users, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-24">
      {/* Hero */}
      <div className="bg-gray-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-6">About GDG on Campus ANDC</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Official Google Developer Groups on Campus at Acharya Narendra Dev College. 
            We are a community-driven group for students interested in Google developer technologies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://res.cloudinary.com/dzraj49fe/image/upload/v1788990589/IMG_1024_tl6vql.jpg" 
              alt="Team Group Photo" 
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">Our Story: Fostering Innovation</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between theory and practice, GDG ANDC has grown into a vibrant ecosystem of learners and builders. We started as a small group of enthusiasts and have expanded into a full-fledged community that organizes workshops, hackathons, and speaker sessions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that technology is best learned by doing and sharing. Our events are designed to be inclusive, welcoming students from all backgrounds to explore the world of software development.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect & Collaborate. We are a vibrant collective of passionate individuals united by our love for technology.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              Skill Development & Knowledge Sharing. Continuous learning is at our core through hands-on labs and workshops.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Growth</h3>
            <p className="text-gray-600 leading-relaxed">
              Innovate & Lead. We provide the platform and resources to innovate, build impactful solutions, and develop skills.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
