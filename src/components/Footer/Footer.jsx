const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <span className="text-xl font-bold text-indigo-600">EternaPix</span>
            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              Capturing moments that last forever. Join our community of
              creators sharing high-quality photography.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="hover:text-indigo-600 cursor-pointer">About</li>
              <li className="hover:text-indigo-600 cursor-pointer">Careers</li>
              <li className="hover:text-indigo-600 cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="hover:text-indigo-600 cursor-pointer">Privacy</li>
              <li className="hover:text-indigo-600 cursor-pointer">Terms</li>
              <li className="hover:text-indigo-600 cursor-pointer">License</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2026 EternaPix Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="w-5 h-5 bg-gray-300 rounded-full cursor-pointer hover:bg-indigo-400"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-full cursor-pointer hover:bg-indigo-400"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-full cursor-pointer hover:bg-indigo-400"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
