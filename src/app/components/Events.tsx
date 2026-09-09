'use client';
import React from 'react';
import EventCard from './ui/event-card';
import { eventsData } from '@/app/events/eventsData';

// HOME PAGE: Single Featured Event Component
const HomeEventsSection: React.FC = () => {
  const featuredEvent = eventsData.active[0]; // Get the first active event

  if (!featuredEvent) {
    return (
      <section className="py-16 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Upcoming Events</h2>
          <p className="text-gray-400 text-lg mb-8">
            There are currently no upcoming events. Please check again soon!
          </p>

          {/* Past Events CTA */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Check Out All Events</h3>
            <p className="text-gray-300 mb-6">
              Explore our events, workshops, and seminars to see what we&apos;ve been up to.
            </p>
            <a
              href="/events"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View All Events
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Upcoming Event</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t miss our next exciting event! Join fellow developers and tech enthusiasts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <EventCard event={featuredEvent} isActive={true} />
        </div>
      </div>
    </section>
  );
};

export default HomeEventsSection;
