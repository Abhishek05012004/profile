import React from 'react';

const ProfileAvatar = ({ image, name }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -mt-10 z-20">
      <div className="relative p-1.5 bg-white rounded-full shadow-xl shadow-indigo-100/50">
        <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-white">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=128`;
              }}
            />
          ) : (
            <div className="h-full w-full bg-indigo-100 flex items-center justify-center">
              <span className="text-3xl font-bold text-indigo-600">
                {name?.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        {/* Decorative Ring */}
        <div className="absolute -inset-1 rounded-full border-2 border-indigo-100 animate-pulse opacity-50" />
      </div>
    </div>
  );
};

export default ProfileAvatar;
