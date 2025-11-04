"use client";

import { FaStar, FaGoogle } from "react-icons/fa";
import React, { useRef, useEffect } from "react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}

export default function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 20); // Adjust scroll speed here
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    scrollContainer.addEventListener("mouseenter", stopScrolling);
    scrollContainer.addEventListener("mouseleave", startScrolling);

    startScrolling();

    return () => {
      stopScrolling();
      scrollContainer.removeEventListener("mouseenter", stopScrolling);
      scrollContainer.removeEventListener("mouseleave", startScrolling);
    };
  }, []);

  // Sample reviews data
  const sampleReviews: Review[] = [
    {
      author_name: "Shy",
      rating: 5,
      text: "Extremely happy with the outcome. The team was professional, understood our vision and budget perfectly, and delivered a beautiful home. The post-installation support was also excellent. Highly recommended!",
      relative_time_description: "2 weeks ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Shy&background=BC6C25&color=fff&size=128",
    },
    {
      author_name: "Sahul Hameed",
      rating: 5,
      text: "Maya Interior has done an excellent job on the interiors of my newly built house. The design and materials they used are outstanding...",
      relative_time_description: "1 month ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Sahul+Hameed&background=606C38&color=fff&size=128",
    },
    {
      author_name: "LIC Dinagaran",
      rating: 5,
      text: "Great experience with Maya interior Mr.velu so convenient much they have progressed good quality professional service",
      relative_time_description: "3 weeks ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Dinagaran&background=DDA15E&color=fff&size=128",
    },
    {
      author_name: "Velmurugan Vel",
      rating: 4,
      text: "Well skilled and professional,Overall project was executed satisfied,Completed the work within time,Good and happy with their work",
      relative_time_description: "2 months ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Velmurugan+Vel&background=283618&color=fff&size=128",
    },
    {
      author_name: "Geetha B Balasundaram",
      rating: 5,
      text: "Mr.velu done very good job thanks to both designer and execution team project completed it nicely",
      relative_time_description: "1 week ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Geetha+Balasundaram&background=BC6C25&color=fff&size=128",
    },
    {
      author_name: "Dinesh M",
      rating: 5,
      text: "The interior design has added so much positive energy to the house. It feels calm, luxurious, and truly 'ours'.",
      relative_time_description: "3 days ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Dinesh&background=606C38&color=fff&size=128",
    },
  ];

  const averageRating = 4.9;
  const totalReviews = 847;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="bg-white py-4">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Google Reviews
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-1">{renderStars(5)}</div>
            <span className="text-2xl font-bold text-black">
              {averageRating}
            </span>
          </div>
          <p className="text-gray-700 text-lg">
            Based on {totalReviews} reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 py-4 max-w-7xl mx-auto scrollbar-hide"
        >
          {sampleReviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Reviewer Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-black">
                    {review.author_name}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {review.relative_time_description}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-black leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center py-5">
          <a
            href="https://maps.app.goo.gl/EHGRHkJcZmmqTt4P7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-[#8BA186] text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FaGoogle className="h-8 w-8" />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
