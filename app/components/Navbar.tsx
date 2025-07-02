'use client'

import { useState } from 'react';
import { Home, Search, Heart, User, Settings, Bell } from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'projects', icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>, label: 'Projects' },
  { id: 'search', icon: <Search size={18} />, label: 'Search' },
  { id: 'heart', icon: <Heart size={18} />, label: 'Favorites' },
  { id: 'bell', icon: <Bell size={18} />, label: 'Notifications' },
  { id: 'user', icon: <User size={18} />, label: 'Profile' },
];

const MinimalNavbar = () => {
  const [activeItem, setActiveItem] = useState<string>('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
         <nav className='absolute  top-6 left-1/2 transform -translate-x-1/2 z-50 mt-4'>
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gray-200/30 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-64 h-64 bg-gray-300/20 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="relative z-10">
        <nav className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full px-3 py-2 shadow-lg transition-all duration-300 hover:bg-white/90 hover:border-gray-300/60 hover:shadow-xl hover:-translate-y-0.5">
          <div className="flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative p-2.5 rounded-full transition-all duration-200 group/item ${
                  activeItem === item.id
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                }`}
                style={{
                  transitionDelay: `${index * 30}ms`,
                }}
              >
                <div className={`transition-all duration-200 ${
                  hoveredItem === item.id && activeItem !== item.id ? 'scale-110' : 'scale-100'
                }`}>
                  {item.icon}
                </div>

                {activeItem === item.id && (
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full"></div>
                )}

                {hoveredItem === item.id && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-150">
                    {item.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900"></div>
                  </div>
                )}

                <div className="absolute inset-0 rounded-full opacity-0 group-active/item:opacity-100 bg-gray-200 animate-ping pointer-events-none"></div>
              </button>
            ))}
          </div>

          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
        </nav>
      </div>
    </div>
    </nav>
  );
};

export default MinimalNavbar;

