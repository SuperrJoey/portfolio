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
    // Duplicate the skills array to create seamless loop
    const duplicatedSkills = [...skills, ...skills, ...skills];

    return (
        <div className="relative w-full overflow-hidden py-4">
            {/* Fade overlay gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling container */}
            <div className={`flex ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
                {duplicatedSkills.map((skill, index) => (
                    <div
                        key={`${skill.name}-${index}`}
                        className="flex-shrink-0 mx-4 px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3 min-w-max"
                    >
                        <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-5 h-5 object-contain" 
                        />
                        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
} 