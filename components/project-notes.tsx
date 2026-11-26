const projectNotes = [
  {
    number: "01",
    project: "AI Study Coach",
    focus: "Learning",
    title: "A study plan that can flex.",
    detail:
      "Bring the tutor, focus sessions, revision cards, and progress into one learning flow, so the next step stays easy to find.",
  },
  {
    number: "02",
    project: "AI Sales Companion",
    focus: "Field sales",
    title: "Customer context, ready for the visit.",
    detail:
      "Pair lead details with visit planning, suggested stops, and follow-up notes for a sales day that moves between desk and field.",
  },
  {
    number: "03",
    project: "AI Attendance",
    focus: "Workplace",
    title: "Make each workday easy to read.",
    detail:
      "Connect check-in, shift activity, and attendance trends while keeping the important daily actions within quick reach.",
  },
  {
    number: "04",
    project: "Cattle IoT",
    focus: "Smart farming",
    title: "Herd records meet live conditions.",
    detail:
      "Bring animal profiles, health alerts, and barn sensor readings into one mobile view, giving the farm team useful context at a glance.",
  },
];

export function ProjectNotes() {
  return (
    <div className="project-notes-grid">
      {projectNotes.map((note) => (
        <article className="project-note-card" key={note.number}>
          <div className="project-note-topline">
            <span>{note.number}</span>
            <small>{note.focus}</small>
          </div>
          <p className="project-note-project">{note.project}</p>
          <h3>{note.title}</h3>
          <p className="project-note-detail">{note.detail}</p>
        </article>
      ))}
    </div>
  );
}
