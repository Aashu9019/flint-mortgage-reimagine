
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-3 py-2 rounded-lg font-bold text-xl mb-4 inline-block">
              Flint
            </div>
            <p className="text-gray-400 leading-relaxed">
              Freedom Through Property. Expert mortgage solutions tailored to your unique needs.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Residential</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Commercial</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Private</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Asset</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Business</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Who We Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Calculators</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Learn</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="text-gray-400 space-y-2">
              <p>📧 info@flint.com</p>
              <p>📞 1300 FLINT</p>
              <p>📍 Sydney, Australia</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Flint Mortgage Brokers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
