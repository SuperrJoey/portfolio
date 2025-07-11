import ScrollingSkills from './ScrollingSkills';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen bg-gray-50 flex flex-col justify-center px-8">
            {/* Main content */}
            <div className="max-w-4xl w-full mx-auto flex items-center gap-16 px-10 flex-1">
                {/*Photo*/}
                {/* <div className="flex-shrink-0">
                    <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                        <img 
                            src="./dev-photo.png" 
                            alt="Profile"
                            className="w-full h-full object-cover" 
                        />
                    </div>
                </div> */}

                {/* About section */}
                <div className="space-y-4 px-10">
                    {/* <div>
                        <h1 className="text-4xl text-gray-900 mb-2">
                            Hi, I'm Dev.
                        </h1>
                    </div> */}

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
                    
                    <div className="pt-4">
                        <a 
                            href=""
                            className="px-6 py-2 bg-gray-700 text-white hover:bg-gray-800 transition-colors rounded-lg"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>

            {/* Scrolling Skills Animation */}
            <div className="w-full max-w-6xl mx-auto mb-8">
                <ScrollingSkills />
            </div>
        </section>
    )
}