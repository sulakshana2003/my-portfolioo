import { profile } from "../../data/profile";

export const Contact = () => {
  return (
    <div className="section-container">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)]">
        {/* Info */}
        <div className="card space-y-4">
          <p className="section-subtitle">Contact</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="text-sm text-slate-300">
            I&apos;m actively looking for an internship or junior software developer role
            where I can contribute to real-world products and keep growing my skills.
          </p>

          <div className="space-y-2 text-sm text-slate-200">
            <p>
              <span className="font-semibold">Phone:</span> {profile.phone}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-sky-400 hover:text-sky-300"
              >
                {profile.email}
              </a>
            </p>
            <p>
              <span className="font-semibold">Location:</span> {profile.location}
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href={profile.linkedin}
                className="text-sky-400 hover:text-sky-300 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                className="text-sky-400 hover:text-sky-300 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Simple form (front-end only) */}
        <form
          className="card space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("This form is only a UI. Wire it to a backend or email service.");
          }}
        >
          <h3 className="text-lg font-semibold text-white">Send a message</h3>
          <div className="space-y-1 text-sm">
            <label className="block text-slate-300">
              Name
              <input
                className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/70"
                required
              />
            </label>
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-slate-300">
              Email
              <input
                type="email"
                className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/70"
                required
              />
            </label>
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-slate-300">
              Message
              <textarea
                className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500/70"
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-sm font-medium text-slate-950 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
