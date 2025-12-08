import { technicalSkills, softSkills, languages } from "../../data/skills";

export const Skills = () => {
  return (
    <div className="section-container space-y-6">
      <div>
        <p className="section-subtitle">Skills</p>
        <h2 className="section-title">Technical & Soft Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card space-y-4">
          <h3 className="text-lg font-semibold text-white">Technical Skills</h3>
          <SkillGroup label="Languages" items={technicalSkills.languages} />
          <SkillGroup label="Frameworks & Libraries" items={technicalSkills.frameworks} />
          <SkillGroup label="Concepts" items={technicalSkills.concepts} />
          <SkillGroup label="Tools" items={technicalSkills.tools} />
        </div>

        <div className="card space-y-4">
          <h3 className="text-lg font-semibold text-white">Soft Skills & Languages</h3>
          <SkillGroup label="Soft Skills" items={softSkills} />
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase mb-1">
              Languages
            </p>
            <ul className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="px-3 py-1 rounded-full bg-slate-800/80 text-xs text-slate-100 border border-slate-700/70"
                >
                  {lang.name} &mdash; {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

type SkillGroupProps = {
  label: string;
  items: string[];
};

const SkillGroup = ({ label, items }: SkillGroupProps) => (
  <div>
    <p className="text-xs font-semibold text-slate-400 uppercase mb-1">{label}</p>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="px-3 py-1 rounded-full bg-slate-800/80 text-xs text-slate-100 border border-slate-700/70"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);
