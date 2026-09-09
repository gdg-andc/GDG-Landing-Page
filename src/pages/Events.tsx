import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { events } from '../data/events';

export default function Events() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredEvents = events.filter(event => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Upcoming') return event.status === 'Upcoming';
    if (activeTab === 'Past') return event.status === 'Past';
    if (activeTab === 'Workshops') return event.category === 'Workshop';
    if (activeTab === 'Seminars') return event.category === 'Seminar';
    if (activeTab === 'Bootcamps') return event.category === 'Bootcamp';
    return true;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect, Learn, and Grow with GDG ANDC. Check out our upcoming and past events.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['All', 'Upcoming', 'Past', 'Workshops', 'Seminars', 'Bootcamps'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeEventTab"
                  className="absolute inset-0 bg-blue-600 rounded-full shadow-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600">
                      {event.category}
                    </div>
                    {event.status === 'Upcoming' && (
                      <div className="bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white animate-pulse">
                        Upcoming
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-3 text-sm text-gray-500 mb-6 flex-grow">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {event.location}
                    </div>
                  </div>
                  <Link 
                    to={`/events/${event.id}`}
                    className="w-full py-3 bg-gray-50 text-gray-900 font-medium rounded-xl hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-md mt-auto"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredEvents.length === 0 && (
          <div className="mt-16 text-center py-12 px-6 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {activeTab === 'Upcoming' ? 'Exciting Events Coming Soon!' : 'No Events Found'}
            </h3>
            <p className="text-gray-500">
              {activeTab === 'Upcoming' 
                ? 'We are planning our next set of workshops, hackathons, and sessions. Stay tuned!'
                : 'No events found for this category at the moment.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
