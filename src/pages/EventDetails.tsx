import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowLeft, User, Trophy, Users } from 'lucide-react';
import { events } from '../data/events';

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Determine if there are coordinators/volunteers to change the heading
  const hasCoordinators = event?.speakers?.some(
    s => s.role.toLowerCase().includes('coordinator') || s.role.toLowerCase().includes('volunteer')
  );
  const teamHeading = hasCoordinators ? "Coordinators & Volunteers" : "Speakers";

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event not found</h2>
          <Link to="/events" className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20 pb-24">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gray-900 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium mb-4"
            >
              {event.category}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {event.title}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-6 text-gray-200"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/events" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Events
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">About the Event</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {event.description}
              </p>
              
              {(event.prize || event.maxEntries) && (
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {event.prize && (
                    <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Trophy className="w-6 h-6 text-yellow-600" />
                        <h3 className="font-display text-lg font-bold text-gray-900">Prizes</h3>
                      </div>
                      <p className="text-gray-700 text-sm font-medium whitespace-pre-line">
                        {event.prize.replace(/ \| /g, '\n')}
                      </p>
                    </div>
                  )}

                  {event.maxEntries && (
                    <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="w-6 h-6 text-blue-600" />
                        <h3 className="font-display text-lg font-bold text-gray-900">Capacity</h3>
                      </div>
                      <p className="text-gray-700 font-medium">
                        Maximum {event.maxEntries} entries
                      </p>
                    </div>
                  )}
                </div>
              )}
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Agenda</h2>
              <div className="space-y-4">
                {event.agenda?.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-24 font-mono text-sm font-medium text-blue-600 shrink-0 pt-1">
                      {item.time}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {item.activity}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {event.speakers && event.speakers.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-6">{teamHeading}</h3>
                <div className="space-y-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-center gap-4">
                      {speaker.image ? (
                        <img 
                          src={speaker.image} 
                          alt={speaker.name} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-white shadow-sm flex items-center justify-center text-blue-600">
                          <User className="w-6 h-6" />
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-gray-900">{speaker.name}</p>
                        <p className="text-sm text-gray-500">{speaker.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {event.status === 'Upcoming' ? (
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Registration</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Secure your spot now! Registration is open for this upcoming event.
                </p>
                {event.registrationLink ? (
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors">
                    Register Now
                  </a>
                ) : (
                  <button disabled className="w-full py-3 bg-gray-200 text-gray-500 font-bold rounded-xl cursor-not-allowed">
                    Link Unavailable
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Registration</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Registration for this event is currently closed as it has already taken place.
                </p>
                <button disabled className="w-full py-3 bg-gray-200 text-gray-500 font-bold rounded-xl cursor-not-allowed">
                  Event Ended
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
