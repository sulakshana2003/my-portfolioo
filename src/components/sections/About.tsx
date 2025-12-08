import { profile } from "../../data/profile";

export const About = () => {
  return (
    <div className="section-container">
      <div className="card">
        <p className="section-subtitle">Profile</p>
        <h2 className="section-title">About Me</h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {profile.summary}
        </p>
      </div>
    </div>
  );
};
