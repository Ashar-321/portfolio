import Image from "next/image";
import type { Project, ProjectVisual } from "@/lib/projects";

const previewCopy: Record<ProjectVisual, { eyebrow: string; title: string; metric: string }> = {
  pos: { eyebrow: "ROYAL POS", title: "Business overview", metric: "Sales today" },
  farm: { eyebrow: "CATTLE ERP", title: "Farm workspace", metric: "Active farms" },
  store: { eyebrow: "A2 ATTIRE", title: "New season", metric: "Shop collection" },
  analytics: { eyebrow: "INSIGHT CRM", title: "Sales overview", metric: "Monthly revenue" },
  giftcard: { eyebrow: "SHOPIFY APP", title: "Campaign overview", metric: "Gift cards" },
  scheduler: { eyebrow: "SHOPIFY APP", title: "Campaign calendar", metric: "Scheduled" },
  lock: { eyebrow: "SHOPIFY APP", title: "Access rules", metric: "Protected items" },
  school: { eyebrow: "SCHOOL ERP", title: "School overview", metric: "Enrolled students" },
  distribution: { eyebrow: "DISTRIBUTION", title: "Operations overview", metric: "Orders today" },
  warehouse: { eyebrow: "WAREHOUSE ERP", title: "Stock overview", metric: "Tracked items" },
  "mobile-study": { eyebrow: "AI STUDY COACH", title: "Your study plan", metric: "Today's focus" },
  "mobile-field": { eyebrow: "FIELD COMPANION", title: "Today's visits", metric: "Next customer" },
  ledger: { eyebrow: "AI SMART LEDGER", title: "Financial overview", metric: "To receive" },
  attendance: { eyebrow: "AI ATTENDANCE", title: "Today's check-in", metric: "Hours this week" },
  "cattle-iot": { eyebrow: "CATTLE IOT ERP", title: "Farm sensors", metric: "Healthy animals" },
};

const bars = [35, 56, 43, 72, 53, 88, 66, 96, 62, 78, 50, 86];

function DashboardPreview({ type }: { type: ProjectVisual }) {
  const copy = previewCopy[type];
  if (type === "scheduler") {
    return (
      <div className="concept-dashboard scheduler-dashboard">
        <div className="concept-sidebar"><b>launch<span>.</span></b><i className="selected">▦ &nbsp; Calendar</i><i>◷ &nbsp; Campaigns</i><i>◇ &nbsp; Products</i><i>✧ &nbsp; AI planner</i><small>STORE</small><i>↗ &nbsp; Online store</i></div>
        <div className="concept-main"><div className="concept-topline"><span>November 2026 <b>⌄</b></span><i>+ New campaign</i></div><div className="scheduler-title"><div><small>CAMPAIGN PLANNER</small><b>November schedule</b></div><span>Week &nbsp; Month</span></div><div className="calendar-grid"><div className="calendar-days"><i>MON</i><i>TUE</i><i>WED</i><i>THU</i><i>FRI</i><i>SAT</i><i>SUN</i></div>{[...Array(28)].map((_, index) => <div className="calendar-day" key={index}><span>{index + 2 > 30 ? index - 28 : index + 2}</span>{index === 3 && <b className="campaign campaign-green">VIP early access</b>}{index === 9 && <b className="campaign campaign-purple">Weekend offer</b>}{index === 17 && <b className="campaign campaign-orange">New collection</b>}{index === 24 && <b className="campaign campaign-blue">Black Friday</b>}</div>)}</div><div className="scheduler-ai"><span>✦</span><div><b>AI timing suggestion</b><small>Your audience is most active Thursday at 6 PM.</small></div><i>Review</i></div></div>
      </div>
    );
  }
  return (
    <div className={`concept-dashboard art-${type}`}>
      <aside className="concept-sidebar"><b>{copy.eyebrow.split(" ")[0].toLowerCase()}<span>.</span></b><i className="selected">▦ &nbsp; Overview</i><i>◷ &nbsp; {type === "giftcard" ? "Campaigns" : type === "lock" ? "Rules" : "Workspace"}</i><i>◇ &nbsp; {type === "school" ? "Students" : type === "distribution" ? "Orders" : type === "warehouse" ? "Inventory" : "Reports"}</i><i>✧ &nbsp; AI insights</i><small>WORKSPACE</small><i>⚙ &nbsp; Settings</i></aside>
      <div className="concept-main"><div className="concept-topline"><span>{copy.eyebrow}</span><i className="concept-avatar">A</i></div><div className="concept-title"><div><small>AI-POWERED WORKSPACE</small><b>{copy.title}</b></div><span>Last 30 days ⌄</span></div><div className="concept-metrics"><div><small>{copy.metric}</small><b>{type === "school" ? "1,248" : type === "lock" ? "24" : type === "distribution" ? "186" : type === "warehouse" ? "3,840" : "128"}</b><em>↗ &nbsp; 12.8%</em></div><div><small>{type === "giftcard" ? "Redemptions" : type === "school" ? "Attendance" : type === "distribution" ? "On-time delivery" : type === "warehouse" ? "Low-stock alerts" : "Active rules"}</small><b>{type === "school" ? "96.4%" : type === "warehouse" ? "08" : "84%"}</b><em>Updated today</em></div><div><small>AI recommendations</small><b>{type === "giftcard" ? "3" : "12"}</b><em>Ready to review</em></div></div>
        <div className="concept-lower"><div className="concept-chart"><div><b>{type === "giftcard" ? "Campaign performance" : type === "lock" ? "Protected catalog" : type === "school" ? "Attendance trends" : type === "distribution" ? "Orders by region" : "Inventory movement"}</b><small>View report ↗</small></div><div className="concept-bars">{bars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><div className="concept-xlabels"><span>W1</span><span>W2</span><span>W3</span><span>W4</span></div></div><div className="concept-ai-card"><span>✦</span><small>AI INSIGHT</small><b>{type === "giftcard" ? "Your welcome offer is gaining traction." : type === "lock" ? "2 access rules may overlap." : type === "school" ? "Attendance is improving this week." : type === "distribution" ? "3 routes could be grouped." : "8 items may need reordering soon."}</b><i>Review suggestion <span>→</span></i></div></div>
      </div>
    </div>
  );
}

function LedgerPreview() {
  return (
    <div className="mobile-preview ledger-preview">
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-status"><span>9:41</span><span>●●● ▴</span></div>
        <div className="phone-content">
          <div className="phone-greeting"><small>HELLO, AHMED</small><b>Your money, in view.</b></div>
          <div className="phone-highlight"><span>THIS MONTH</span><b>Rs. 85,000 to receive</b><small>Rs. 32,000 to pay</small><i>View ledger</i></div>
          <div className="phone-section-title"><b>Recent activity<span>See all</span></b></div>
          {[["Ali Khan", "+ Rs. 15,000 · Receivable"], ["Usman Ahmed", "Rs. 8,000 · Payable"], ["AI assistant", "Ask about your ledger"]].map(([name, detail]) => <div className="phone-list-row" key={name}><i>Rs</i><span>{name}<small>{detail}</small></span><b>›</b></div>)}
        </div>
        <div className="phone-tabbar"><span>⌂<small>Home</small></span><span>◷<small>People</small></span><span>✧<small>AI chat</small></span><span>◯<small>Profile</small></span></div>
      </div>
    </div>
  );
}

function MobilePreview({ type }: { type: "mobile-study" | "mobile-field" | "attendance" | "cattle-iot" }) {
  const isStudy = type === "mobile-study";
  const isAttendance = type === "attendance";
  const isCattleIot = type === "cattle-iot";
  const variant = isStudy ? "study-preview" : isAttendance ? "attendance-preview" : isCattleIot ? "cattle-iot-preview" : "field-preview";
  const heading = isStudy ? "Ready to learn?" : isAttendance ? "Your workday, in view." : isCattleIot ? "Farm conditions are stable." : "Your day, in view.";
  const highlight = isStudy ? "Biology · Cell structure" : isAttendance ? "Checked in at 9:02 AM" : isCattleIot ? "26.4°C · 61% humidity" : "Green Valley Stores";
  const highlightLabel = isStudy ? "AI STUDY COACH" : isAttendance ? "TODAY'S ATTENDANCE" : isCattleIot ? "BARN 01 · LIVE SENSORS" : "NEXT VISIT · 10:30 AM";
  const highlightSub = isStudy ? "15 min focus session" : isAttendance ? "Verification complete" : isCattleIot ? "Ventilation running · Auto" : "Sahiwal · 2.4 km away";
  const rows = isStudy
    ? [["Review cell structure", "15 min · Today"], ["Practice 10 questions", "20 min · Today"], ["Quick revision cards", "10 min · Today"]]
    : isAttendance
      ? [["Hours worked", "05h 42m · Today"], ["This month", "18 of 22 days"], ["Next shift", "Tomorrow · 9:00 AM"]]
      : isCattleIot
        ? [["North barn", "25.8°C · Stable"], ["Humidity", "60% · Normal range"], ["Ventilation", "Automatic mode"]]
        : [["Review recent orders", "Last order · 3 days ago"], ["Check product availability", "Tap to open"], ["Prepare follow-up note", "Tap to open"]];
  return (
    <div className={`mobile-preview ${variant}`}>
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-status"><span>9:41</span><span>●●● ▰</span></div>
        <div className="phone-content">
          <div className="phone-greeting"><small>{isStudy ? "MONDAY, NOVEMBER 24" : "GOOD MORNING, ASHAR"}</small><b>{heading}</b></div>
          <div className="phone-highlight"><span>{highlightLabel}</span><b>{highlight}</b><small>{highlightSub}</small><i>{isStudy ? "Continue session →" : isAttendance ? "View attendance →" : isCattleIot ? "Open sensor details →" : "View account →"}</i></div>
          <div className="phone-section-title"><b>{isStudy ? "Your plan" : isAttendance ? "Attendance summary" : isCattleIot ? "Live monitoring" : "Visit checklist"}<span>See all</span></b></div>
          {rows.map(([item, detail], index) => <div className="phone-list-row" key={item}><i>{isStudy ? `0${index + 1}` : isAttendance ? "✓" : isCattleIot ? "•" : "✓"}</i><span>{item}<small>{detail}</small></span><b>›</b></div>)}
        </div>
        <div className="phone-tabbar"><span>⌂<small>Home</small></span><span>◷<small>{isStudy ? "Learn" : isAttendance ? "Attendance" : isCattleIot ? "Herd" : "Visits"}</small></span><span>✧<small>{isCattleIot ? "Sensors" : "AI helper"}</small></span><span>◯<small>Profile</small></span></div>
      </div>
    </div>
  );
}
export function ProjectArtwork({ project, className = "", useCover = true }: { project: Project; className?: string; useCover?: boolean }) {
  if (useCover && project.coverImage) return <div className={`project-image-art art-${project.visual} ${className}`}><Image src={project.coverImage} alt={`${project.title} project screenshot`} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>;
  if (project.visual === "ledger") return <div className={`artboard ${className}`}><LedgerPreview /></div>;
  if (project.visual === "mobile-study" || project.visual === "mobile-field" || project.visual === "attendance" || project.visual === "cattle-iot") return <div className={`artboard ${className}`}><MobilePreview type={project.visual} /></div>;
  return <div className={`artboard ${className}`}><DashboardPreview type={project.visual} /></div>;
}

