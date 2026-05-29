import React from 'react';

const HeaderBanner = ({ logo }) => {
  return (
    <div className="relative h-48 w-full bg-[#0a0a0a] flex items-start justify-center overflow-hidden pt-4">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-600 via-transparent to-transparent" />
      </div>

      {/* Main Logo Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        {logo ? (
          <img 
            src={logo} 
            alt="National Foods Logo" 
            className="h-28 w-auto object-contain transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/260x100?text=National+Foods';
            }}
          />
        ) : (
          <div className="text-center">
            <span className="text-white font-black text-4xl tracking-tighter uppercase drop-shadow-lg">
              National Foods
            </span>
            <p className="text-slate-400 text-xs tracking-[0.2em] uppercase mt-1">the hing specialist</p>
          </div>
        )}
      </div>
      
      {/* Bottom Curve/Shade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  );
};

export default HeaderBanner;
