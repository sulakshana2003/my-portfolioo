import { education } from "../../data/education";

export const Education = () => {
  return (
    <div className="section-container">
      <div className="card space-y-4">
        <p className="section-subtitle">Education</p>
        <h2 className="section-title">Education</h2>

        {education.map((edu) => (
          <div key={edu.degree} className="border-l border-slate-700 pl-4 ml-1">
            <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
            <p className="text-sm text-slate-300">{edu.institution}</p>
            <p className="text-xs text-slate-400 mb-2">{edu.period}</p>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300">
              {edu.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
