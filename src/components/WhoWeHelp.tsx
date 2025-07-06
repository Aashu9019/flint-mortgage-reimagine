
import { ArrowRight, Users, Building2, Home, TrendingUp, Briefcase, Heart } from 'lucide-react';

const WhoWeHelp = () => {
  const clientTypes = [
    {
      title: 'First Home Buyers',
      description: 'Navigate your first property purchase with expert guidance and competitive rates.',
      icon: Home,
      gradient: 'from-green-400 to-emerald-400',
      bgGradient: 'from-green-50 to-emerald-50',
      delay: '0ms'
    },
    {
      title: 'Property Investors',
      description: 'Maximize your investment potential with strategic financing solutions.',
      icon: TrendingUp,
      gradient: 'from-blue-400 to-indigo-400',
      bgGradient: 'from-blue-50 to-indigo-50',
      delay: '150ms'
    },
    {
      title: 'Business Owners',
      description: 'Secure commercial property and expand your business with tailored solutions.',
      icon: Briefcase,
      gradient: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-50 to-pink-50',
      delay: '300ms'
    },
    {
      title: 'Refinancing Clients',
      description: 'Optimize your existing loans with better rates and terms.',
      icon: Building2,
      gradient: 'from-orange-400 to-red-400',
      bgGradient: 'from-orange-50 to-red-50',
      delay: '450ms'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 blur-2xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-15 blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-25 blur-xl animate-bounce-gentle"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who We Help
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From first-time buyers to seasoned investors, we provide personalized mortgage solutions for every journey.
          </p>
          <button className="group text-purple-600 font-semibold flex items-center gap-2 mx-auto hover:text-purple-700 transition-all duration-300 hover:scale-105">
            <Users size={20} />
            See All Client Types
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clientTypes.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <div
                key={client.title}
                className={`group relative bg-gradient-to-br ${client.bgGradient} p-6 rounded-2xl hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer animate-fade-in-up transform-gpu overflow-hidden`}
                style={{ animationDelay: client.delay }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                
                {/* Floating decoration */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse-gentle"></div>
                
                <div className={`w-12 h-12 bg-gradient-to-r ${client.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden transform-gpu`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <IconComponent className="text-white relative z-10" size={20} />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {client.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {client.description}
                </p>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="text-purple-600" size={16} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '600ms'}}>
          <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-500 hover:scale-110 flex items-center gap-2 mx-auto hover:from-purple-600 hover:to-pink-600 transform-gpu">
            <Heart size={20} />
            Find Your Perfect Match
            <ArrowRight className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
