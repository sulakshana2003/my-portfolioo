import { certifications } from "../../data/certifications";

export const Certifications = () => {
  return (
    <div className="section-container">
      <div className="card space-y-4">
        <p className="section-subtitle">Certifications</p>
        <h2 className="section-title">Certifications</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
