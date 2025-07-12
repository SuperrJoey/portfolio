import ScrollingSkills from './ScrollingSkills';

export default function Hero() {
    return (
        <section id="home" className="min-h-[85vh] bg-gray-900 flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
                    backgroundSize: '400px 400px'
                }}></div>
            </div>

            {/* Main content */}
            <div className="max-w-4xl w-full mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-2 sm:px-4 lg:px-10 flex-1 relative z-10">
                {/*Photo*/}
                <div className="flex-shrink-0 order-1 lg:order-none">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 group">
                        {/* Enhanced gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
                        
                        {/* Image container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-800 p-1 shadow-2xl">
                            <img 
                                src="/dev-photo.png" 
                                alt="Dev - Full Stack Developer"
                                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                        
                        {/* Enhanced floating elements */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse delay-75 shadow-lg"></div>
                        <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-150 shadow-lg"></div>
                    </div>
                </div>

                {/* About section */}
                <div className="space-y-4 px-4 sm:px-6 lg:px-10 text-center lg:text-left order-2 lg:order-none">
                    <p className="text-gray-100 text-sm sm:text-base font-medium">
                        Hi, I&apos;m Dev, 20, based in India.
                    </p>
                    
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        I am a full stack web-developer who builds modern web-apps. I love learning new things, experimenting with them, and always being curious about them
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base">
                        In my free time, I like to watch sports and it&apos;s related documentaries, or sitcoms.
                    </p>
                </div>
            </div>

            {/* Scrolling Skills Animation */}
            <div className="w-full max-w-6xl mx-auto mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 relative z-10">
                <ScrollingSkills />
            </div>
        </section>
    )
}