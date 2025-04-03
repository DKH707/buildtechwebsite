import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  AcademicCapIcon,
  FolderIcon,
  HomeIcon,
  PaperAirplaneIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About Derek', href: '/about', icon: UserIcon },
  { name: 'Projects', href: '/projects', icon: FolderIcon },
  { name: 'Education', href: '/education', icon: AcademicCapIcon },
  { name: 'Contact', href: '/contact', icon: PaperAirplaneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen flex-col bg-bground">
      {/* Top bar */}
      <header className="bg-bground border-b border-gray-700 p-4 flex items-center justify-between z-10">
        <div className="flex items-center">
          <button
            type="button"
            className="text-white p-2 rounded-md hover:bg-accent"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
          <a href="/">
          <img
            alt="Buildtech Systems"
            src="/RedLogo_noText.png"
            className="h-8 w-auto ml-4"
          />
          </a>
          <h1 className="text-white text-xl font-semibold ml-4 hidden sm:block"></h1>
        </div>
        <div className="flex items-center gap-4">
          {/* You can add user profile, notifications, etc. here */}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar navigation */}
        <aside
          className={classNames(
            'bg-bground border-r border-gray-700 transition-all duration-300 ease-in-out z-10',
            sidebarOpen ? 'w-64' : 'w-0',
            isMobile ? 'fixed h-full' : 'relative'
          )}
        >
          <nav className={classNames(
            'flex flex-col h-full py-4 overflow-y-auto',
            sidebarOpen ? 'opacity-100' : 'opacity-0',
            'transition-opacity duration-300'
          )}>
            <ul role="list" className="flex flex-1 flex-col px-4">
              <li>
                <ul role="list" className="space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) => 
                          classNames(
                            isActive 
                              ? 'bg-accent text-white' 
                              : 'text-white hover:bg-accent hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                          )
                        }
                        onClick={() => isMobile && setSidebarOpen(false)}
                      >
                        {({ isActive }) => (
                          <>
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                isActive ? 'text-white' : 'text-primary group-hover:text-white',
                                'h-6 w-6 shrink-0'
                              )}
                            />
                            <span className="whitespace-nowrap">{item.name}</span>
                          </>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto pt-6">
                <div className="text-xs text-gray-400 px-2">
                  © 2025 Buildtech Systems
                </div>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className={classNames(
          'flex-1 overflow-y-auto transition-all duration-300 ease-in-out',
          sidebarOpen && !isMobile ? 'ml-0' : 'ml-0'
        )}>
          <div className="content">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}