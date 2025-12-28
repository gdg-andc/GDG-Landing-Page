'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

const Loading: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0f1e] text-center px-4">

            <Loader2 className="w-16 h-16 text-purple-500 animate-spin mb-6" />

            {/* Loading Text */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                Loading, please wait...
            </h2>

            <p className="text-gray-400 max-w-md sm:max-w-lg">
                Hang tight while we fetch everything you need to get started.
            </p>
        </div>
    );
};

export default Loading;
