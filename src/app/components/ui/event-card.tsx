import React from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { Event } from '@/types/event';

interface EventCardProps {
  event: Event;
  isActive?: boolean;
  compact?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, isActive = true, compact = false }) => {
  const categoryColors = {
    Workshop: 'bg-blue-50 text-blue-700 border-blue-200',
    Bootcamp: 'bg-green-50 text-green-700 border-green-200',
    Seminar: 'bg-purple-50 text-purple-700 border-purple-200',
    Orientation: 'bg-yellow-50 text-purple-700 border-yellow-200',
  };

  if (compact) {
    // Compact version for list view
    return (
      <div className="bg-white rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${categoryColors[event.category] || categoryColors.Workshop}`}>
                {event.category}
              </span>
              {!isActive && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                  Past
                </span>
              )}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-yellow-400 transition-colors">
              {event.name}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {event.description}
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1 text-red-500" />
                {event.date}
              </div>
              {event.time && (
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1 text-orange-500" />
                  {event.time}
                </div>
              )}
              {event.location && (
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1 text-green-500" />
                  {event.location.split(',')[0]}
                </div>
              )}
            </div>
          </div>

          <div className="ml-6 flex flex-col items-end gap-3">
            {event.attendees && (
              <div className="flex items-center text-xs text-gray-500">
                <Users className="w-3 h-3 mr-1 text-blue-500" />
                {event.attendees}
              </div>
            )}

            {isActive && event.signUpLink && (
              <a
                href={event.signUpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Sign Up
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <span className={`px-4 py-2 rounded-full text-sm font-medium border ${categoryColors[event.category] || categoryColors.Workshop}`}>
            {event.category}
          </span>
          {!isActive && (
            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
              Past Event
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-yellow-500 mb-4 leading-tight group-hover:text-gray-900 transition-colors">
          {event.name}
        </h3>

        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {event.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center text-gray-700">
            <Calendar className="w-5 h-5 mr-3 text-red-500" />
            <div>
              <p className="font-semibold text-sm">Date</p>
              <p className="text-sm">{event.date}</p>
            </div>
          </div>

          {event.time && (
            <div className="flex items-center text-gray-700">
              <Clock className="w-5 h-5 mr-3 text-orange-500" />
              <div>
                <p className="font-semibold text-sm">Time</p>
                <p className="text-sm">{event.time}</p>
              </div>
            </div>
          )}

          {event.location && (
            <div className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-3 text-green-500" />
              <div>
                <p className="font-semibold text-sm">Location</p>
                <p className="text-sm">{event.location}</p>
              </div>
            </div>
          )}

          {event.attendees && (
            <div className="flex items-center text-gray-700">
              <Users className="w-5 h-5 mr-3 text-blue-500" />
              <div>
                <p className="font-semibold text-sm">Attendees</p>
                <p className="text-sm">{event.attendees}</p>
              </div>
            </div>
          )}
        </div>

        {isActive && event.signUpLink && (
          <a
            href={event.signUpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-purple-400 hover:bg-yellow-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 group shadow-lg hover:shadow-xl"
          >
            Join us on
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />{'... '}  25th Sep, 2025
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;