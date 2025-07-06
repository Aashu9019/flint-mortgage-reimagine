
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'First Home Buyer',
      content: 'Flint made my first home buying experience seamless. Their expert guidance and competitive rates helped me secure my dream home faster than I expected.',
      rating: 5,
      gradient: 'from-yellow-400 to-orange-400',
      delay: '0ms'
    },
    {
      name: 'Michael Chen',
      role: 'Property Investor',
      content: 'Outstanding service! They found me the perfect investment loan structure that maximized my portfolio growth. Highly professional team.',
      rating: 5,
      gradient: 'from-green-400 to-emerald-400',
      delay: '200ms'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Business Owner',
      content: 'The commercial financing solutions they provided were exactly what my business needed. Fast approval and excellent communication throughout.',
      rating: 5,
      gradient: 'from-blue-400 to-indigo-400',
      delay: '400ms'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-30 animate-float blur-2xl"></div>
      <div className="absolute bottom-16 right-16 w-56 h-56 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-25 animate-float-delayed blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-20 blur-xl animate-bounce-gentle"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-1/3 w-6 h-6 bg-purple-300 rounded-full opacity-40 animate-pulse-gentle"></div>
      <div className="absolute bottom-24 left-1/4 w-8 h-8 bg-orange-300 rotate-45 opacity-30 animate-rotate-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Flint.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer animate-fade-in-up transform-gpu overflow-hidden border border-gray-100"
              style={{ animationDelay: testimonial.delay }}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              
              {/* Quote icon */}
              <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden transform-gpu`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                <Quote className="text-white relative z-10" size={20} />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 text-yellow-400 fill-current animate-fade-in-up transform group-hover:scale-110 transition-all duration-300`}
                    style={{ animationDelay: `${parseInt(testimonial.delay) + (i * 100)}ms` }}
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300 relative">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-all duration-300 transform-gpu`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              
              {/* Floating decoration */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gray-300 rounded-full animate-pulse-gentle opacity-50"></div>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-gray-200 rotate-45 animate-bounce-gentle opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '600ms'}}>
          <p className="text-gray-600 mb-6">Ready to join our satisfied clients?</p>
          <button className="group bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-500 hover:scale-110 hover:from-orange-500 hover:to-pink-500 transform-gpu">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
