import React, { useState, useEffect } from 'react';
import { useLoadingContext } from '../helpers/LoadingContext.jsx';
import { NavLink, Outlet } from 'react-router-dom';
import { Database, HouseLine, List, PaperPlaneTilt, UserFocus, X } from '@phosphor-icons/react';
import EspressoLoader from './EspressoLoader';

const navigation = [
  { name: 'Home', href: '/', icon: HouseLine },
  { name: 'About Derek', href: '/about', icon: UserFocus },
  { name: 'Projects', href: '/projects', icon: Database },
  { name: 'Contact', href: '/contact', icon: PaperPlaneTilt },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(!(window.innerWidth < 768));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { isLoading } = useLoadingContext();

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
      else {
        setSidebarOpen(true)
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
      <header className="bg-bground border-b border-secondary p-4 flex items-center justify-between z-10">
        <div className="flex items-center">
          <button
            type="button"
            className="text-white p-2 rounded-md hover:bg-accent"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? <X size='1.5rem' weight='light' /> : <List size='1.5rem' weight='light' />}
          </button>
          <a href="/">
            <img
              alt="Buildtech Systems"
              src="/RedLogo_noText.png"
              className="h-8 w-auto ml-4"
            />
          </a>
          <div className='inline-flex'>
            <h1 className="text-white text-xl font-semibold ml-4 hidden sm:block">Derek Hopkins</h1>
            <h1 className="text-accent text-xl font-semibold sm:block">&nbsp;Buildtech Systems</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* You can add user profile, notifications, etc. here */}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar navigation */}
        <aside
          className={classNames(
            'bg-bground border-r border-secondary transition-all duration-300 ease-in-out z-10',
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
              <li className="mt-auto max-sm:my-auto">
                <img src='/derek_cropped.jpg' className='rounded-full size-20 mx-auto'></img>
                <div className="text-xs text-gray-400 px-2 pt-4">
                  © 2025 Buildtech Systems
                </div>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className={classNames(
          'flex-1 overflow-y-auto transition-all duration-300 ease-in-out relative',
          sidebarOpen && !isMobile ? 'ml-0' : 'ml-0'
        )}>
          {/* Always render the content */}
          <div className="content">
            <Outlet />
          </div>

          {/* Overlay the loader when loading */}
          {isLoading && (
            <div className="absolute inset-0 bg-bground z-50 flex">
              <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        aria-hidden="true"
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-white/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-bground">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                </div>
              <EspressoLoader loading={isLoading} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}