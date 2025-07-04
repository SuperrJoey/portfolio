'use client'

const skills = [
  { name: 'TypeScript', icon: '/typescript.svg' },
  { name: 'React', icon: '/react.svg' },
  { name: 'Next.js', icon: '/nextdotjs.svg' },
  { name: 'Node.js', icon: '/nodedotjs.svg' },
  { name: 'Express', icon: '/express.svg' },
  { name: 'MongoDB', icon: '/mongodb.svg' },
  { name: 'MySQL', icon: '/mysql.svg' },
  { name: 'PostgreSQL', icon: '/postgresql.svg' },
  { name: 'Git', icon: '/git.svg' },
  { name: 'GitHub', icon: '/github.svg' },
  { name: 'Tailwind CSS', icon: '/tailwindcss.svg' },
  { name: 'Socket.io', icon: '/socketdotio.svg' },
]

export default function Skills() {    
    return (
        <div className="">
            <div className='flex flex-wrap gap-2'>
                {skills.map((tech, index) => 
                (
                    <div
                        key={index}
                        className='rounded-lg text-center px-4 py-2 border border-transparent border-zinc-200 text-sm transition-all duration-300 hover:-transalte-y-1 hover:shadow-md flex items-center gap-2'
                        >
                        <img src={tech.icon} alt="tech.name" className='w-4 h-4 object-contain'/>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
