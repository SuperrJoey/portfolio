export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    links: {
        live?: string;
        github?: string;
    },
    // featured
}

export const projects: Project[] = [
    {
        id: "project-1",
        title: "MemoCare",
        description: "A web-application to assist users with memory challenges in tracking and receiving personal memories and information with Web Speech API for voice recognition, hands-free interaction.",
        image: "/memocare-demo.png",
        techStack: ["React", "TypeScript", "Web Speech API", "Tailwind CSS", "Vercel"],
        links: {
            live: "https://memocare-two.vercel.app/",
            github: "https://github.com/SuperrJoey/memocare"
        }
    },
    {
        id: "project-2",
        title: "DevTerrain",
        description: "Transform your GitHub contributions into stunning 3D landscapes. Visualize your coding journey through interactive terrain generated from your commit history.",
        image: "/dev-terrain-demo.png",
        techStack: ["Next.js", "Three.js", "TypeScript", "GitHub API", "Tailwind CSS"],
        links: {
            live: "https://dev-terrain.vercel.app/",
            github: "https://github.com/SuperrJoey/DevTerrain"
        }
    },
    {
        id: "project-3",
        title: "CineFlix",
        description: "A comprehensive full-stack web application designed to manage theatre bookings with user authentication, seat selection, and payment processing.",
        image: "/cine-fliix-demo.png",
        techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
        links: {
            live: "https://cine-flix-inky.vercel.app/",
            github: "https://github.com/SuperrJoey/CineFlix"
        }
    },
]

//helper function to work with project data
export const getProjectById = (id: string): Project | undefined => {
    return projects.find(project => project.id === id);
};

//add a featured field in the interface when projects get too much and use this function
// export const getFeaturedProjects = (): Project[] => {
//     return projects.filter(project => project.featured);
// }