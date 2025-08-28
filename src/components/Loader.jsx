import React from 'react';

const Loader = () => {
    return (
        <div className="border border-gray-200 shadow rounded-xl p-5 max-w-2xl w-full mx-auto mb-4">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-gray-300 h-6 w-6 mt-1"></div>
                <div className="flex-1 space-y-3 py-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="space-y-2">
                        <div className="h-3 bg-gray-300 rounded w-full"></div>
                        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="h-3 bg-gray-300 rounded col-span-1"></div>
                        <div className="h-3 bg-gray-300 rounded col-span-2"></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Loader;