
import { ArrowRight, Home, Building, Shield, Briefcase, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Residential',
      description: 'Strategic advice for first home buyers, upgraders and investors.',
      icon: Home,
      gradient: 'from-yellow-400 to-orange-400',
      bgGradient: 'from-yellow-50 to-orange-50'
    },
    {
      title: 'Commercial', 
      description: 'Financing commercial property, development or expansion.',
      icon: Building,
      gradient: 'from-green-400 to-emerald-400',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Private',
      description: 'Connecting high-net-worth clients with in-house private banking services.',
      icon: Shield,
      gradient: 'from-red-400 to-pink-400',
      bgGradient: 'from-red-50 to-pink-50'
    },
    {
      title: 'Asset',
      description: 'Competitive finance solutions for personal and business assets.',
      icon: TrendingUp,
      gradient: 'from-blue-400 to-indigo-400',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      title: 'Business',
      description: 'Customised finance solutions to help businesses grow and flourish.',
      icon: Briefcase,
      gradient: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 animate-float blur-xl"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-25 animate-float-delayed blur-lg"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tailored solutions.</h2>
          <button className="group text-purple-600 font-semibold flex items-center gap-2 mx-auto hover:text-purple-700 transition-all duration-300 hover:scale-105">
            View All
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-gradient-to-br ${service.bgGradient} p-8 rounded-2xl hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer animate-fade-in-up transform-gpu overflow-hidden`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                
                {/* Floating decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse-gentle"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-white/20 rotate-45 animate-bounce-gentle"></div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden transform-gpu`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <IconComponent className="text-white relative z-10" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 group-hover:text-purple-700 transition-colors duration-300">
                  {service.title}
                  <ArrowRight className="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" size={20} />
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-all duration-300 group-hover:translate-x-1 relative">
                  Learn More →
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-500"></div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
