import React, { useState } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';

export default function CustomerFeedback() {
  // রিভিউ ডাটা Array
  const initialReviews = [
    {
      id: 1,
      name: 'Kristin Watson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      time: '2 min ago',
      comment: 'Duis at ullamcorper nulla, eu dictum eros.',
    },
    {
      id: 2,
      name: 'Jane Cooper',
      avatar: null, // অবতার না থাকলে ডিফল্ট আইকন দেখাবে
      rating: 4,
      time: '30 Apr, 2021',
      comment:
        'Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.',
    },
    {
      id: 3,
      name: 'Jacob Jones',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      time: '2 min ago',
      comment: 'Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.',
    },
    {
      id: 4,
      name: 'Ralph Edwards',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      time: '2 min ago',
      comment:
        '200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton\'s Choice, Bok Choi, from USA',
    },
  ];

  const [reviews] = useState(initialReviews);

  return (
    <div className="max-w-4xl mx-auto font-sans">
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={review.id}>
            {/* Review Item Container */}
            <div className="flex items-start justify-between">
              
              {/* User Avatar + Name + Rating */}
              <div className="flex items-start space-x-3">
                {/* Avatar */}
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <FaUser className="w-5 h-5" />
                  </div>
                )}

                {/* Name & Stars */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{review.name}</h4>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center text-amber-500 space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating ? 'text-amber-500' : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Timestamp */}
              <span className="text-xs text-gray-400">{review.time}</span>
            </div>

            {/* Review Comment Text */}
            <p className="mt-3 text-xs text-gray-500 leading-relaxed pl-13">
              {review.comment}
            </p>

            {/* Divider line except for the last item */}
            {index !== reviews.length - 1 && (
              <hr className="border-gray-100 my-6" />
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8">
        <button
          onClick={() => alert('Loading more reviews...')}
          className="bg-green-50 hover:bg-green-100 text-green-600 font-semibold text-xs py-3 px-8 rounded-full transition-colors focus:outline-none"
        >
          Load More
        </button>
      </div>
    </div>
  );
}