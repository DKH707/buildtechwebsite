import React, { useState, useEffect, useRef } from 'react';
import { useLoadingContext } from '../helpers/LoadingContext.jsx';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { BookOpenText, Coffee, Database, HouseLine, List, PaperPlaneTilt, UserFocus, X } from '@phosphor-icons/react';
import EspressoLoader from './EspressoLoader';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const navigation = [
  { name: 'Home', href: '/', icon: HouseLine },
  { name: 'About Derek', href: '/about', icon: UserFocus },
  { name: 'Projects', href: '/projects', icon: Database },
  { name: 'Experience', href: '/experience', icon: BookOpenText },
  { name: 'Coffee', href: '/coffee', icon: Coffee },
  { name: 'Contact', href: '/contact', icon: PaperPlaneTilt },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(!(window.innerWidth < 768));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [animationsInitialized, setAnimationsInitialized] = useState(false);
  
  let currentYear = new Date().getFullYear();

  const { isLoading } = useLoadingContext();
  const location = useLocation();
  
  // Refs for animation targets
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const nameRef = useRef(null);
  const sidebarRef = useRef(null);
  const navItemsRef = useRef([]);
  const profileRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const mainContentRef = useRef(null);

  // Register GSAP plugin
  useEffect(() => {
    gsap.registerPlugin(useGSAP);
  }, []);

  // Initial animation on component mount
  useGSAP(() => {
    // Don't run animations if they've already been initialized
    if (animationsInitialized) return;
    
    // Header animation - slide down with fade
    gsap.fromTo(headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Logo animation - spin in with bounce
    gsap.fromTo(logoRef.current,
      { rotation: 360, scale: 0, opacity: 0 },
      { 
        rotation: 0, 
        scale: 1, 
        opacity: 1, 
        duration: 1, 
        ease: "back.out(1.7)", 
        delay: 0.2 
      }
    );

    // Name animation
    const nameElements = nameRef.current.children;
    gsap.fromTo(nameElements[0],
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, delay: 0.4 }
    );
    
    gsap.fromTo(nameElements[1],
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, delay: 0.6 }
    );

    // Animate sidebar if open on initial load
    if (sidebarOpen) {
      setTimeout(() => {
        animateSidebarContent(true);
      }, 300);
    }
    
    setAnimationsInitialized(true);
  }, []);

  // Navigation item hover animations
  const handleNavItemHover = (index, isEntering) => {
    const navItem = navItemsRef.current[index];
    const icon = navItem?.querySelector('svg');
    const text = navItem?.querySelector('span');
    
    if (!navItem || !icon || !text) return;

    if (isEntering) {
      gsap.to(icon, {
        scale: 1.2,
        color: '#ffffff',
        duration: 0.3,
      });
      
      gsap.to(text, {
        x: 3,
        duration: 0.3,
      });
      
      gsap.to(navItem, {
        backgroundColor: 'rgba(255, 99, 71, 0.3)',
        duration: 0.3,
      });
    } else {
      gsap.to(icon, {
        scale: 1,
        color: '',
        duration: 0.3,
      });
      
      gsap.to(text, {
        x: 0,
        duration: 0.3,
      });
      
      gsap.to(navItem, {
        backgroundColor: '',
        duration: 0.3,
      });
    }
  };

  // Animate sidebar content appearance/disappearance
  const animateSidebarContent = (isOpen) => {
    if (!sidebarRef.current) return;
    
    const navItems = navItemsRef.current.filter(item => item !== null);
    const profile = profileRef.current;
    
    if (isOpen && navItems.length > 0) {
      // Staggered animation for nav items
      gsap.fromTo(
        navItems,
        { x: -20, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.4, 
          ease: "power1.out"
        }
      );

      // Profile section animation
      if (profile) {
        gsap.fromTo(
          profile,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.6 }
        );
      }
    } else if (navItems.length > 0) {
      // Quick fade out when closing
      gsap.to(navItems, {
        opacity: 0,
        duration: 0.2
      });
      
      if (profile) {
        gsap.to(profile, {
          opacity: 0,
          duration: 0.2
        });
      }
    }
  };

  // Page transition animation
  useEffect(() => {
    // If not loading and content ref exists, animate content on page change
    if (!isLoading && mainContentRef.current) {
      gsap.fromTo(
        mainContentRef.current,
        { opacity: 0, y: 10 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          ease: "power1.out",
          clearProps: "all" // Important to prevent style buildup
        }
      );
    }
  }, [location.pathname, isLoading]);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const wasMobile = isMobile;
      const wasOpen = sidebarOpen;
      
      setIsMobile(window.innerWidth < 768);
      
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
      else if (wasMobile !== (window.innerWidth < 768)) {
        setSidebarOpen(true);
        
        // Only animate if switching from mobile to desktop
        if (wasMobile && !wasOpen) {
          setTimeout(() => animateSidebarContent(true), 300);
        }
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, sidebarOpen]);

  const toggleSidebar = () => {
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    
    // Animate the toggle button
    if (toggleBtnRef.current) {
      gsap.to(toggleBtnRef.current, {
        rotation: newState ? 180 : 0,
        duration: 0.4,
        ease: "back.out(1.7)"
      });
    }
    
    // Animation will happen naturally through CSS transitions
    // We'll trigger the content animation after a delay
    if (newState) {
      setTimeout(() => animateSidebarContent(true), 300);
    }
  };

  // Handle navigation item click with ripple effect
  const handleNavClick = (index) => {
    if (isMobile) {
      setSidebarOpen(false);
    }
    
    // Simple ripple effect
    const navItem = navItemsRef.current[index];
    if (!navItem) return;
    
    // Create and position ripple element
    const ripple = document.createElement('div');
    ripple.className = 'absolute bg-white/30 rounded-full pointer-events-none';
    navItem.appendChild(ripple);
    
    // Get dimensions
    const rect = navItem.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    
    // Position at center
    gsap.set(ripple, {
      width: 0,
      height: 0,
      x: rect.width / 2,
      y: rect.height / 2,
      top: 0,
      left: 0
    });
    
    // Animate ripple
    gsap.to(ripple, {
      width: size,
      height: size,
      x: rect.width / 2 - size/2,
      y: rect.height / 2 - size/2,
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }
    });
  };

  return (
    <div className="flex h-screen flex-col bg-bground">
      {/* Top bar */}
      <header 
        ref={headerRef}
        className="bg-bground border-b border-secondary p-4 flex items-center justify-between z-10"
      >
        <div className="flex items-center">
          <button
            ref={toggleBtnRef}
            type="button"
            className="text-white p-2 rounded-md hover:bg-accent overflow-hidden"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? <X size='1.5rem' weight='light' /> : <List size='1.5rem' weight='light' />}
          </button>
          <a href="/">
            <img
              ref={logoRef}
              alt="Buildtech Systems"
              src="/RedLogo_noText.png"
              className="h-8 w-auto ml-4"
            />
          </a>
          <div ref={nameRef} className='inline-flex'>
            <h1 className="text-white text-xl font-semibold ml-4 hidden sm:block">Derek Hopkins</h1>
            <h1 className="text-accent text-xl font-semibold sm:block">&nbsp;Buildtech Systems</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* You can add user profile, notifications, etc. here */}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden ">
        {/* Sidebar navigation */}
        <aside
          ref={sidebarRef}
          className={classNames(
            'bg-bground border-r border-secondary transition-all duration-300 ease-in-out z-10',
            sidebarOpen ? 'w-64' : 'w-0',
            isMobile ? 'fixed h-full' : 'relative'
          )}
        >
          <nav className={classNames(
            'flex flex-col h-full py-4 overflow-hidden',
            sidebarOpen ? 'opacity-100' : 'opacity-0',
            'transition-opacity duration-300'
          )}>
            <ul role="list" className="flex flex-1 flex-col px-4">
              <li>
                <ul role="list" className="space-y-1">
                  {navigation.map((item, index) => (
                    <li key={item.name} ref={el => navItemsRef.current[index] = el}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? 'bg-accent text-white'
                              : 'text-white hover:bg-accent hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold relative overflow-hidden'
                          )
                        }
                        onClick={() => handleNavClick(index)}
                        onMouseEnter={() => handleNavItemHover(index, true)}
                        onMouseLeave={() => handleNavItemHover(index, false)}
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
              <li ref={profileRef} className="mt-auto max-sm:my-auto">
                <img src='/derek_cropped.jpg' className='rounded-full size-20 mx-auto'></img>
                <div className="text-xs text-gray-400 px-2 pt-4">
                  © {currentYear} Buildtech Systems
                </div>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main 
          ref={mainContentRef}
          className={classNames(
            'flex-1 overflow-y-auto transition-all duration-300 ease-in-out relative',
            sidebarOpen && !isMobile ? 'ml-0' : 'ml-0'
          )}
        >
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