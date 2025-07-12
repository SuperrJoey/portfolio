'use client'

const skills = [
  { name: 'TypeScript', icon: '/typescript.svg' },
  { name: 'React', icon: '/react.svg' },
  { name: 'Next.js', icon: '/nextjs.svg' },
  { name: 'Node.js', icon: '/nodejs.svg' },
  { name: 'Express', icon: '/express.svg' },
  { name: 'MongoDB', icon: '/mongodb.svg' },
  { name: 'PostgreSQL', icon: '/postgresql.svg' },
  { name: 'GitHub', icon: '/github.svg' },
  { name: 'Tailwind CSS', icon: '/tailwind.svg' },
  { name: 'Supabase', icon: '/supabase-logo.svg'}
]

interface ScrollingSkillsProps {
  direction?: 'left' | 'right';
}

export default function ScrollingSkills({ direction = 'left' }: ScrollingSkillsProps) {
    const duplicatedSkills = [...skills, ...skills, ...skills];

    return (
        <div className="relative w-full overflow-hidden py-2 sm:py-4">
            {/* Scrolling container with CSS mask for seamless fade */}
            <div className={`flex ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
                 style={{
                     maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
                 }}>
                {duplicatedSkills.map((skill, index) => (
                    <div
                        key={`${skill.name}-${index}`}
                        className="flex-shrink-0 mx-2 sm:mx-4 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-xl hover:bg-gray-700/90 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-2 sm:gap-3 min-w-max group"
                    >
                        <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-blue-900/50 to-purple-900/50 group-hover:from-blue-800/60 group-hover:to-purple-800/60 transition-all duration-300">
                            <img 
                                src={skill.icon} 
                                alt={skill.name} 
                                className="w-3 h-3 sm:w-4 sm:h-4 object-contain group-hover:scale-110 transition-transform duration-300" 
                            />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-blue-300 whitespace-nowrap transition-colors duration-300">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
} 