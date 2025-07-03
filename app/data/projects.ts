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
        description: "A web-application to assist users with memory challenges in tracking and receiving personal memories and information with Web Speech API for voice recognition, hands-free",
        image: " ",
        techStack: [" "],
        links: {
            live: "",
            github: ""
        }
    },
    {
        id: "project-2",
        title: "DevTerrain",
        description: "Turn your GitHub contributions into lively 3D Landscapes",
        image: "",
        techStack: [""],
        links: {
            live: "",
            github: ""
        }
    },
    {
        id: "project-3",
        title: "CineFlix",
        description: "A full stack web-app designed to manage theatre bookings",
        image: "",
        techStack: [""],
        links: {
            live: "",
            github: ""
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