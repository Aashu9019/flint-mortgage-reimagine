
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50 py-20">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Mortgage Brokers
            </h1>
            <p className="text-2xl text-purple-600 font-semibold mb-8">
              Freedom Through Property
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Expert mortgage solutions tailored to your unique needs. Whether you're a first-time buyer, 
              investor, or business owner, we provide strategic advice and competitive financing options.
            </p>
            <button className="group bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              GET STARTED TODAY
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
              <div className="text-6xl text-purple-300">🏠</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
