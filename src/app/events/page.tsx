'use client';
import EventCard from '@/app/components/ui/event-card';
import { eventsData } from './eventsData';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import React, { useState } from 'react';



const EventsListPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('active');

    return (
        <div className="min-h-screen bg-[#0a0f1e]">
            {/* Page Header */}
            <div className="bg-[#0a0f1e] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-sans tracking-tight flex justify-center">
                        <Link
                            href="https://gdg.community.dev/gdg-on-campus-acharya-narendra-dev-college-delhi-india/"
                            className="flex items-center gap-2 text-white font-bold text-xl z-0 justify-center"
                        >
                            <Image
                                src="/GDG-black.svg"
                                alt="GDG Logo"
                                width={400}
                                height={90}
                                className="object-contain"
                            />
                        </Link>
                    </h1>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Events & Workshops
                    </h1>
                    <p className="text-xl text-purple-400 pt-6 max-w-3xl mx-auto">
                        Join our community of developers, attend workshops, and stay updated with the latest in tech.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Tab Navigation */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white rounded-full p-1 shadow-sm  text-sm border border-gray-200 sm:text-lg">
                        <button
                            onClick={() => setActiveTab('active')}
                            className={`px-4 py-3 rounded-full font-medium transition-all duration-200 ${activeTab === 'active'
                                ? 'bg-purple-500 text-white shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Upcoming Events ({eventsData.active.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('past')}
                            className={`px-8 py-3 rounded-full font-medium transition-all duration-200 ${activeTab === 'past'
                                ? 'bg-purple-800 text-white shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Past Events ({eventsData.past.length})
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {activeTab === 'active' ? (
                        eventsData.active.length > 0 ? (
                            eventsData.active.map((event) => (
                                <EventCard key={event.id} event={event} isActive={true} compact={true} />
                            ))
                        ) : (
                            <div className="text-center py-16">
                                <h3 className="text-lg font-medium text-yellow-500 mb-4">
                                    There are currently no upcoming events.
                                </h3>
                                <p className="text-white text-lg">
                                    Please check again soon.
                                </p>
                            </div>
                        )
                    ) : eventsData.past.length > 0 ? (
                        eventsData.past.map((event) => (
                            <EventCard key={event.id} event={event} isActive={false} compact={true} />
                        ))
                    ) : (
                        <div className="text-center py-16">
                            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-2xl font-medium text-gray-900 mb-4">
                                No past events
                            </h3>
                            <p className="text-gray-600 text-lg">
                                Past events will appear here.
                            </p>
                        </div>
                    )}
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                        <div className="text-3xl font-bold text-red-600 mb-2">
                            {eventsData.active.length + eventsData.past.length}
                        </div>
                        <div className="text-gray-600">Total Events</div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                            {eventsData.active.reduce((sum, event) => sum + (event.attendeesCount || 0), 0) +
                                eventsData.past.reduce((sum, event) => sum + (event.attendeesCount || 0), 0)}+
                        </div>
                        <div className="text-gray-600">Total Attendees</div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                            {eventsData.active.length}
                        </div>
                        <div className="text-gray-600">Upcoming Events</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsListPage;