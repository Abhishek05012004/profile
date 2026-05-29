import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, AlertCircle } from 'lucide-react';
import employees from '../data/employees.json';
import HeaderBanner from '../components/HeaderBanner';
import ProfileAvatar from '../components/ProfileAvatar';
import ActionButtons from '../components/ActionButtons';
import SocialLinks from '../components/SocialLinks';
import { motion, AnimatePresence } from 'framer-motion';

const ProfilePage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      const foundEmployee = employees.employees.find((emp) => emp.id === id);
      if (foundEmployee) {
        setEmployee({
          ...foundEmployee,
          companyInfo: employees.companyInfo
        });
        setError(false);
      } else {
        setError(true);
      }
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
          <p className="text-slate-500 font-medium font-sans">Retrieving profile...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-50 p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 mb-6">
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Employee Not Found</h1>
          <p className="text-slate-500 mb-6">
            The profile you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            Go Back
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={employee.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative max-w-sm md:max-w-lg mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 overflow-hidden border border-slate-100"
        >
          {/* Top Section with Header Banner */}
          <HeaderBanner 
            logo={employee.companyInfo.logo} 
          />
          
          {/* Overlapping Profile Image */}
          <ProfileAvatar image={employee.profileImage} name={employee.name} />

          {/* Card Body */}
          <div className="pt-28 pb-10 px-8 text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-1">{employee.name}</h1>
            <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase mb-1">
              {employee.designation}
            </p>
            <p className="text-slate-400 text-sm mb-8">{employee.companyInfo.name}</p>

            {/* Action Buttons */}
            <ActionButtons employee={employee} />

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                Connect with me
              </p>
              <SocialLinks social={employee.social} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProfilePage;
