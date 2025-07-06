
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tailored solutions.</h2>
          <button className="group text-purple-600 font-semibold flex items-center gap-2 mx-auto hover:text-purple-700 transition-colors duration-300">
            View All
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-gradient-to-br ${service.bgGradient} p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  {service.title}
                  <ArrowRight className="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" size={20} />
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300">
                  Learn More →
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
