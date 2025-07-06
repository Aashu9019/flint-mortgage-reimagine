
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50 py-20">
      {/* Animated background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 blur-2xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-15 blur-xl animate-bounce-gentle"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-16 right-1/4 w-8 h-8 bg-purple-400 rounded-full opacity-30 animate-pulse-gentle"></div>
      <div className="absolute bottom-20 right-16 w-12 h-12 bg-orange-400 rotate-45 opacity-25 animate-rotate-slow"></div>
      <div className="absolute top-32 left-16 w-6 h-6 bg-pink-400 rounded-full opacity-40 animate-bounce-gentle"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-text-reveal">
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.2s'}}>Mortgage</span>{' '}
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.4s'}}>Brokers</span>
            </h1>
            <p className="text-2xl text-purple-600 font-semibold mb-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Freedom Through Property
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              Expert mortgage solutions tailored to your unique needs. Whether you're a first-time buyer, 
              investor, or business owner, we provide strategic advice and competitive financing options.
            </p>
            <button className="group bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-500 hover:scale-110 flex items-center gap-2 animate-fade-in-up hover:from-orange-500 hover:to-pink-500 transform-gpu" style={{animationDelay: '1s'}}>
              GET STARTED TODAY
              <ArrowRight className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" size={20} />
            </button>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl flex items-center justify-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105 transform-gpu">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent animate-shimmer"></div>
              
              {/* Floating elements inside the card */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-orange-300 rounded-full animate-bounce-gentle opacity-60"></div>
              <div className="absolute bottom-12 right-12 w-6 h-6 bg-purple-300 rotate-45 animate-pulse-gentle opacity-50"></div>
              <div className="absolute top-20 right-16 w-3 h-3 bg-pink-300 rounded-full animate-float opacity-70"></div>
              
              <div className="text-6xl text-purple-300 group-hover:scale-110 transition-transform duration-500 animate-bounce-gentle">🏠</div>
            </div>
            
            {/* Floating cards around the main image */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-float opacity-90 hover:shadow-xl transition-shadow duration-300">
              <div className="text-orange-500 font-semibold text-sm">$500K+</div>
              <div className="text-gray-600 text-xs">Loans Approved</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-3 animate-float-delayed opacity-90 hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-500 font-semibold text-sm">98%</div>
              <div className="text-gray-600 text-xs">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
