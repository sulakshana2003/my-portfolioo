import { profile } from "../../data/profile";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/60 py-4 mt-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-slate-400">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Built with React, TypeScript & Tailwind CSS.</span>
      </div>
    </footer>
  );
};
