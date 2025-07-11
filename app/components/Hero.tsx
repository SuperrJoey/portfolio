import ScrollingSkills from './ScrollingSkills';

export default function Hero() {
    return (
        <section id="home" className="min-h-[85vh] bg-gray-50 flex flex-col justify-center px-8 pt-16">
            {/* Main content */}
            <div className="max-w-4xl w-full mx-auto flex items-center gap-16 px-10 flex-1">
                {/*Photo*/}
                <div className="flex-shrink-0">
                    <div className="relative w-64 h-64 group">
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {/* Image container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-white p-1">
                            <img 
                                src="/dev-photo.png" 
                                alt="Dev - Full Stack Developer"
                                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                        {/* Floating elements for creativity */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                    </div>
                </div>

                {/* About section */}
                <div className="space-y-4 px-10">
                    <p className="text-gray-600">
                        Hi, I'm Dev, 20, based in India.
                    </p>
                    
                    <p className="text-gray-600">
                        I am a full stack web-developer who builds modern web-apps and is destined to greatness because I am 
                        tired of living in this loop of mediocrity and hence fighting my way out of it.
                    </p>
                    <p className="text-gray-600">
                        In my free time, I like to watch sports and it's related documentaries, or sitcoms.
                    </p>
                </div>
            </div>

            {/* Scrolling Skills Animation */}
            <div className="w-full max-w-6xl mx-auto mb-8">
                <ScrollingSkills />
            </div>
        </section>
    )
}