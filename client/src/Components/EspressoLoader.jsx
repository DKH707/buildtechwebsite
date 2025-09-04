import React, { useState, useEffect } from 'react';

const EspressoLoader = ({ loading = true }) => {
  const [pourProgress, setPourProgress] = useState(0);
  const [cupFill, setCupFill] = useState(0);
  const [steam, setSteam] = useState(false);
  
  useEffect(() => {
    if (!loading) {
      setPourProgress(0);
      setCupFill(0);
      setSteam(false);
      return;
    }
    
    // Pour animation
    const pourInterval = setInterval(() => {
      setPourProgress(prev => {
        if (prev >= 100) {
          clearInterval(pourInterval);
          setSteam(true);
          return 100;
        }
        return prev + 4;
      });
    }, 50);
    
    // Cup fill animation (slightly delayed)
    const fillInterval = setInterval(() => {
      setCupFill(prev => {
        if (prev >= 100) {
          clearInterval(fillInterval);
          return 100;
        }
        // Start filling only when pour has started
        if (pourProgress > 10) {
          return prev + 3;
        }
        return prev;
      });
    }, 50);
    
    return () => {
      clearInterval(pourInterval);
      clearInterval(fillInterval);
    };
  }, [loading, pourProgress]);
  
  return (
    <div className="flex flex-col py-20 items-center justify-center w-full h-64">
      <div className="relative w-40 h-56">
        {/* Machine */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-white rounded-t-lg">
            <img src='/RedLogo_noText.png' className='w-3/4 pt-4 mx-auto'></img>
        </div>
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-secondary"></div>
        
        {/* Portafilter */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-600 rounded-md"></div>
        
        {/* Coffee pour animation */}
        {pourProgress > 0 && cupFill < 100 && (
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-2 bg-amber-900"
               style={{ height: `${Math.min(pourProgress / 4, 16)}px` }}>
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 -rotate-180 w-2 h-14 bg-amber-800 opacity-75"></div>
          </div>
        )}
        
        {/* Cup */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
          {/* Saucer */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gray-200 rounded-full"></div>
          
          {/* Cup body */}
          <div className="relative w-16 h-16 bg-white rounded-b-3xl rounded-t-md overflow-hidden">
            {/* Cup handle */}
            <div className="absolute top-4 -right-4 w-6 h-8 border-4 border-white rounded-r-full"></div>
            
            {/* Coffee fill */}
            <div className="absolute bottom-0 left-0 right-0 bg-amber-900 transition-height duration-300 ease-in-out"
                 style={{ height: `${cupFill}%` }}>
              {/* Crema */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-amber-600"></div>
            </div>
          </div>
        </div>
        
        {/* Steam animation */}
        {steam && (
          <>
            <div className="absolute top-36 left-1/2 ml-2 w-1 opacity-70">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-steam1"></div>
            </div>
            <div className="absolute top-36 left-1/2 ml-4 w-1 opacity-70">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-steam2 animation-delay-500"></div>
            </div>
            <div className="absolute top-36 left-1/2 ml-0 w-1 opacity-70">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-steam3 animation-delay-1000"></div>
            </div>
          </>
        )}
      </div>
      
      <style jsx="true">{`
        .animate-steam1 {
          animation: steam 3s infinite ease-out;
          animation-delay: 0.1s;
        }
        
        .animate-steam2 {
          animation: steam 3s infinite ease-out;
          animation-delay: 0.5s;
        }
        
        .animate-steam3 {
          animation: steam 3s infinite ease-out;
          animation-delay: 1s;
        }
        
        @keyframes steam {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-20px) scale(1.5);
            opacity: 0;
          }
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .transition-height {
          transition: height 0.5s;
        }
      `}</style>
    </div>
  );
};

export default EspressoLoader;