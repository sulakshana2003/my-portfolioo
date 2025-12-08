import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <div className="section-container space-y-6">
      <div>
        <p className="section-subtitle">Projects</p>
        <h2 className="section-title">What I&apos;ve Built</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article key={project.title} className="card flex flex-col gap-3">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            </div>
            <p className="text-sm text-slate-300">{project.description}</p>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full bg-slate-800/90 text-[11px] uppercase tracking-wide text-slate-200 border border-slate-700/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
