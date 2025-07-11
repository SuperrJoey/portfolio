'use client'
import { useState } from 'react';
import { projects } from '../data/projects';

export default function Projects() {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
        }
    }

    return (
        <section id="projects" className="min-h-screen bg-white py-20 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-medium text-gray-900 mb-4 tracking-wide">
                        Projects
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A showcase of my recent work in web development, featuring full-stack applications 
                        and innovative solutions built with modern technologies.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden border-b border-gray-200 bg-gray-100">
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} preview`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.parentElement!.innerHTML = `
                                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                                <div class="text-center">
                                                    <div class="w-16 h-16 bg-gray-300 rounded-lg mb-3 mx-auto flex items-center justify-center">
                                                        <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                        </svg>
                                                    </div>
                                                    <span class="text-sm text-gray-500 font-medium">${project.title}</span>
                                                </div>
                                            </div>
                                        `;
                                    }}
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                {project.techStack.length > 0 && project.techStack[0] !== "" && (
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-600 font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Project Links */}
                                <div className="flex gap-3 pt-2">
                                    {project.links.live && (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                    
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <div>
                        <h3>
                            Get in Touch
                        </h3>
                        <p>
                            Interested in collaborating? Send me a message and I'll get back to you soon.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className='space-y-6'
                            >
                                <div>
                                    <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>
                                        Your Email
                                    </label>
                                    <input 
                                        type="text"
                                        id='email'
                                        name='email'
                                        value={FormData.email}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all'
                                        placeholder='johndoe@example.com'
                                    />

<div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all resize-vertical"
                                placeholder="Tell me about your project or just say hello..."
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </section>
    );
}