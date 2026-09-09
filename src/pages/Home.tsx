import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Terminal, Brain, Cpu, Code, Users, Rocket, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import WaveDotsBackground from '../components/WaveDotsBackground';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const features = [
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Speaker Sessions",
      description: "Learn from industry experts and thought leaders as they share their insights on various tech topics.",
      color: "bg-red-50"
    },
    {
      icon: <Terminal className="w-6 h-6 text-green-500" />,
      title: "Tech Workshops",
      description: "Hands-on workshops where you can enhance your skills in areas like web development, cloud computing, and cybersecurity.",
      color: "bg-green-50"
    },
    {
      icon: <Rocket className="w-6 h-6 text-yellow-500" />,
      title: "Hackathons",
      description: "Participate in exciting hackathons to challenge your creativity and teamwork skills, with opportunities to win prizes.",
      color: "bg-yellow-50"
    },
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: "Open Source",
      description: "Collaborate on meaningful open-source projects that contribute to the wider tech community and enhance your portfolio.",
      color: "bg-blue-50"
    }
  ];

  const tracks = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Web Development",
      description: "Dive into the world of frontend and backend technologies, building responsive and dynamic web applications.",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      icon: <Brain className="w-8 h-8 text-yellow-600" />,
      title: "Artificial Intelligence",
      description: "Explore the potential of AI and Machine Learning to create intelligent systems and automate complex tasks.",
      bg: "bg-yellow-50",
      border: "border-yellow-100"
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-600" />,
      title: "Data Structures & Algorithms",
      description: "Master the foundations of computer science by learning efficient ways to organize data and solve problems.",
      bg: "bg-green-50",
      border: "border-green-100"
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-white">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-red-50 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/4" />
        </motion.div>
        <WaveDotsBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm font-medium mb-8 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Accepting New Members
              </motion.div>
              
              <h1 className="font-display text-6xl md:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-[1.1]">
                Empowering the next generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">developers.</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-light">
                Google Developer Groups on Campus at Acharya Narendra Dev College. A community for students to learn, share, and connect.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://gdg.community.dev/gdg-on-campus-acharya-narendra-dev-college-delhi-india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2"
                >
                  Join Community <ArrowRight className="w-4 h-4" />
                </motion.a>
                <Link
                  to="/events"
                  className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors hover:border-gray-300"
                >
                  View Events
                </Link>
              </div>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative perspective-1000"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 p-3 rotate-1 hover:rotate-0 transition-transform duration-500"
              >
                <img
                  src="https://res.cloudinary.com/dzraj49fe/image/upload/v1773775957/DSC_3337_rb4tl4.jpg"
                  alt="Students collaborating"
                  className="rounded-2xl w-full h-auto object-cover aspect-[4/3]"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4"
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                        <img src={`https://picsum.photos/seed/${i}/100`} alt="Member" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-gray-900 text-base">500+ Members</p>
                    <p className="text-gray-500 text-xs font-medium">Joined recently</p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob" />
              <div className="absolute -bottom-8 left-20 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000" />
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-red-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-32 bg-gray-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              At GDG on Campus, ANDC, we believe in the power of community and collaboration. Our mission is to provide students with the resources and opportunities to learn, share, and contribute to the ever-evolving world of technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">Our Tracks</h2>
            <p className="text-xl text-gray-600 font-light">We focus on three key areas to help you specialize and excel.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -15, transition: { duration: 0.4, type: "spring" } }}
                className={`p-10 rounded-[2rem] border ${track.border} ${track.bg} relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm mb-8 relative z-10 group-hover:rotate-6 transition-transform duration-300">
                  {track.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{track.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{track.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4285F4_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        
        {/* Animated background blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to start your <br/> developer journey?
            </h2>
            <p className="text-gray-400 mb-12 text-xl font-light max-w-2xl mx-auto">
              Join our community of passionate developers and start building the future today.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://gdg.community.dev/gdg-on-campus-acharya-narendra-dev-college-delhi-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-2xl shadow-white/10"
            >
              Become a Member <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
