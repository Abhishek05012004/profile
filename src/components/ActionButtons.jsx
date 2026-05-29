import React from 'react';
import { Phone, Mail, MessageSquare, UserPlus } from 'lucide-react';

const ActionButtons = ({ employee }) => {
  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${employee.name}
ORG:${employee.companyInfo.name}
TITLE:${employee.designation}
TEL;TYPE=CELL:${employee.phone}
EMAIL:${employee.email}
URL;TYPE=Instagram:${employee.social.instagram}
URL;TYPE=LinkedIn:${employee.social.linkedin}
URL;TYPE=Twitter:${employee.social.twitter}
NOTE:Profile for ${employee.name} at ${employee.companyInfo.name}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${employee.name.replace(/\s+/g, '_')}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const whatsappLink = `https://wa.me/${employee.phone.replace(/[^0-9]/g, '')}`;

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4">
      {/* Call Button */}
      <a
        href={`tel:${employee.phone}`}
        className="flex items-center justify-center gap-2 sm:gap-3 bg-indigo-50 border border-indigo-100 p-3 sm:p-4 rounded-2xl group transition-all hover:bg-indigo-600 hover:scale-[1.02] active:scale-95 cursor-pointer"
      >
        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 group-hover:text-white transition-colors flex-shrink-0" />
        <span className="text-xs sm:text-sm font-bold text-indigo-700 group-hover:text-white transition-colors truncate">Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 sm:gap-3 bg-emerald-50 border border-emerald-100 p-3 sm:p-4 rounded-2xl group transition-all hover:bg-emerald-600 hover:scale-[1.02] active:scale-95 cursor-pointer"
      >
        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 group-hover:text-white transition-colors flex-shrink-0" />
        <span className="text-xs sm:text-sm font-bold text-emerald-700 group-hover:text-white transition-colors truncate">WhatsApp</span>
      </a>

      {/* Email Button */}
      <a
        href={`mailto:${employee.email}`}
        className="flex items-center justify-center gap-2 sm:gap-3 bg-orange-50 border border-orange-100 p-3 sm:p-4 rounded-2xl group transition-all hover:bg-orange-600 hover:scale-[1.02] active:scale-95 cursor-pointer"
      >
        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 group-hover:text-white transition-colors flex-shrink-0" />
        <span className="text-xs sm:text-sm font-bold text-orange-700 group-hover:text-white transition-colors truncate">Email</span>
      </a>

      {/* Save Contact Button */}
      <button
        onClick={handleSaveContact}
        className="flex items-center justify-center gap-2 sm:gap-3 bg-sky-50 border border-sky-100 p-3 sm:p-4 rounded-2xl group transition-all hover:bg-sky-600 hover:scale-[1.02] active:scale-95 cursor-pointer"
      >
        <UserPlus className="h-4 w-4 sm:h-5 sm:w-5 text-sky-600 group-hover:text-white transition-colors flex-shrink-0" />
        <span className="text-xs sm:text-sm font-bold text-sky-700 group-hover:text-white transition-colors truncate">Save</span>
      </button>
    </div>
  );
};

export default ActionButtons;
