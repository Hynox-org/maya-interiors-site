"use client"

import { FaStar, FaGoogle } from "react-icons/fa"

interface Review {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  profile_photo_url: string
}

export default function GoogleReviews() {
  // Sample reviews data
  const sampleReviews: Review[] = [
    {
      author_name: "Rajesh Kumar",
      rating: 5,
      text: "Excellent quality furniture! We purchased a complete bedroom set from Livinza and couldn't be happier. The craftsmanship is outstanding and the 10-year warranty gives us peace of mind. Highly recommended!",
      relative_time_description: "2 weeks ago",
      profile_photo_url: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=BC6C25&color=fff&size=128"
    },
    {
      author_name: "Priya Sharma",
      rating: 5,
      text: "Amazing service and beautiful designs! The team helped us choose the perfect sofa set for our living room. Delivery was on time and installation was professional. Worth every penny!",
      relative_time_description: "1 month ago",
      profile_photo_url: "https://ui-avatars.com/api/?name=Priya+Sharma&background=606C38&color=fff&size=128"
    },
    {
      author_name: "Arun Patel",
      rating: 5,
      text: "Best furniture shopping experience! The showroom has a great collection and the staff is very knowledgeable. We got a custom dining table made and it turned out exactly as we wanted.",
      relative_time_description: "3 weeks ago",
      profile_photo_url: "https://ui-avatars.com/api/?name=Arun+Patel&background=DDA15E&color=fff&size=128"
    },
    {
      author_name: "Sneha Reddy",
      rating: 4,
      text: "Great quality products and reasonable prices. We furnished our entire home with Livinza furniture. The warranty service is excellent. Only minor delay in delivery but overall very satisfied.",
      relative_time_description: "2 months ago",
      profile_photo_url: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=283618&color=fff&size=128"
    },
    {
      author_name: "Vikram Singh",
      rating: 5,
      text: "Livinza has the best modular kitchen designs! The quality is premium and installation was seamless. Their after-sales service is prompt and professional. Definitely recommend for anyone looking for quality furniture.",
      relative_time_description: "1 week ago",
      profile_photo_url: "https://ui-avatars.com/api/?name=Vikram+Singh&background=BC6C25&color=fff&size=128"
    },
    {
      author_name: "Meera Iyer",
      rating: 5,
      text: "Absolutely love our new wardrobe! The design is modern, storage space is excellent, and the finish is flawless. The team was very helpful throughout the selection process. Five stars!",
      relative_time_description: "3 days ago",
      profile_photo_url: "https://ui-avatars.com/api/?name=Meera+Iyer&background=606C38&color=fff&size=128"
    }
  ]

  const averageRating = 4.9
  const totalReviews = 847

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ))
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {sampleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
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
              <p className="text-black leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Livinza+Furniture+Chennai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8BA186] text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FaGoogle />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
