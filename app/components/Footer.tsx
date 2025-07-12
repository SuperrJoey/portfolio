export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6 sm:py-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
          backgroundSize: '300px 300px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-xs sm:text-sm text-gray-300 font-medium">
          Designed and Developed by <span className="text-white font-semibold">Dev</span>
        </p>
        
        <div className="flex justify-center items-center mt-2 space-x-2">
          <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </footer>
  );
}
