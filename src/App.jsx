import { useState, useEffect } from "react";

const EL_LOGO = "data:image/png;base64,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";

// ── EL Brand ─────────────────────────────────────────────────────
const EL = {
  // COA Dashboard — exact values
  dark:        "#1A0D05",   // hero / header background
  mid:         "#4A2A10",   // secondary dark — borders, depth
  amber:       "#E07A1A",   // primary amber
  amberLight:  "#F59C3A",   // amber light — numbers, highlights
  maroon:      "#7A1040",   // maroon — P1/P3 pillar accent
  maroonLight: "#A01855",   // maroon light — hover/tint
  cream:       "#FDF6EC",   // page background
  white:       "#ffffff",

  // EL brand kept for identity
  pink:        "#a3195b",   // EL magenta — tab outline, footer
  orange:      "#f39200",   // EL orange — P2/P4 pillar accent

  // Surfaces
  card:        "#ffffff",
  cardBorder:  "#e8d8c4",   // warm border

  // Tints
  pinkLight:   "#FDF0F5",
  orangeLight: "#FFF8F0",

  // Text
  greyText:    "#5A3E2B",   // warm dark mid
  greyMid:     "#e8d8c4",
  grey:        "#f5ede0",
  greyLight:   "#faf3e8",

  // Aliases for backward compat
  brown:       "#1A0D05",
  brownDeep:   "#0f0802",
  black:       "#1A0D05",
};

// ── Q2 date boundaries ──────────────────────────────────────────
const Q2_START = "2026-04-01";
const Q2_END   = "2026-06-30";
const TODAY    = new Date("2026-04-25"); // current date

// ── Status calculation logic ────────────────────────────────────
function calcStatus(progress, deadline) {
  const p = Number(progress) || 0;

  if (p === 100) return "completed";

  const daysLeft = deadline
    ? Math.ceil((new Date(deadline) - TODAY) / (1000 * 60 * 60 * 24))
    : null;

  const nearDeadline = daysLeft !== null && daysLeft <= 10;

  if (p === 0)          return nearDeadline ? "off_track"   : "not_started";
  if (p <= 40)          return nearDeadline ? "off_track"   : "started";
  if (p <= 79)          return nearDeadline ? "at_risk"     : "on_track";
  if (p <= 99)          return "nearly_done";
  return "not_started";
}

const STATUS_MAP = {
  not_started: { label:"Not Started", dot:"#9E9E9E", bg:"#F4F4F4", border:"#DCDCDC", text:"#555555" },
  started:     { label:"Started",     dot:"#4A90D9", bg:"#EBF3FC", border:"#B8D5F0", text:"#1A5FA8" },
  on_track:    { label:"On Track",    dot:"#27AE60", bg:"#E8F6EE", border:"#9DDBB5", text:"#145E33" },
  nearly_done: { label:"Nearly Done", dot:"#f39200", bg:"#FFF5DC", border:"#FFD97A", text:"#7A4F00" },
  completed:   { label:"Completed ✓", dot:"#27AE60", bg:"#D4F5E2", border:"#6DD9A0", text:"#0A4020" },
  at_risk:     { label:"At Risk",     dot:"#E8A000", bg:"#FFF5DC", border:"#FFD97A", text:"#7A4F00" },
  off_track:   { label:"Off Track",   dot:"#D32F2F", bg:"#FDECEA", border:"#F5AAAA", text:"#8B1A1A" },
};

function getStatusInfo(key) {
  return STATUS_MAP[key] || STATUS_MAP.not_started;
}

function daysUntil(deadline) {
  if (!deadline) return null;
  return Math.ceil((new Date(deadline) - TODAY) / (1000 * 60 * 60 * 24));
}

// ── Data ─────────────────────────────────────────────────────────
const PILLARS = [
  {
    id:"P1", name:"Expanding Access", shortName:"Access", color:EL.maroon, bg:EL.pinkLight, icon:"🌍",
    initiatives:[
      { id:"p1-1",  initiative:"Maintain direct delivery — primary lab",      keyResult:"Min 4,000 participants/yr",                         owner:"Anna / Peter"       },
      { id:"p1-2",  initiative:"Trainer Academy v1 launched",                 keyResult:"10 certified trainers by end of Year 1",            owner:"Anna Navua"         },
      { id:"p1-3",  initiative:"Durability tracking system",                  keyResult:"6m / 12m / 3yr tracking live from Year 1",          owner:"Tonny Njeru"        },
      { id:"p1-4",  initiative:"Partner Embedding Rubric",                    keyResult:"Applied to 100% of new partners from Year 1",       owner:"Wangui Kimaru"      },
      { id:"p1-5",  initiative:"5 embedding partners onboarded",              keyResult:"5 partners active by end of Year 1",                owner:"Wangui Kimaru"      },
      { id:"p1-6",  initiative:"Federated pathway Version 1",                 keyResult:"Piloted in 2 locations by end of Year 2",           owner:"Terry / Wangui"     },
      { id:"p1-7",  initiative:"Hero Index v1 operationalised",               keyResult:"Baseline + endline tools live by Q2 Year 1",        owner:"Tonny Njeru"        },
      { id:"p1-8",  initiative:"Depth threshold per pathway",                 keyResult:"Thresholds agreed by Q2 Year 1",                    owner:"Tonny / Terry"      },
      { id:"p1-9",  initiative:"Fidelity Review Process (Flag–Fix–Exit)",     keyResult:"Documented and active by Q1 Year 1",                owner:"Terry Kiruki"       },
      { id:"p1-10", initiative:"Gateway selection criteria formalised",       keyResult:"Criteria agreed by Q1 Year 1",                      owner:"Terry / Steve"      },
      { id:"p1-11", initiative:"MEL system digitised",                        keyResult:"≥80% data completeness by end of Year 1",           owner:"Tonny Njeru"        },
      { id:"p1-12", initiative:"Annual Impact Report",                        keyResult:"Published annually from Year 2",                    owner:"Tonny / Comms Lead" },
    ],
  },
  {
    id:"P2", name:"Infrastructure for Scale", shortName:"Infrastructure", color:EL.orange, bg:EL.orangeLight, icon:"⚙️",
    initiatives:[
      { id:"p2-1",  initiative:"Fundraising pipeline: 3+ multi-year funders", keyResult:"1 new multi-year funder by end of Year 2",          owner:"Terry / Steve"      },
      { id:"p2-2",  initiative:"Funder-ready evidence pack",                  keyResult:"Live and updated annually",                         owner:"Comms Lead / Tonny" },
      { id:"p2-3",  initiative:"EL profiled on 3+ funder databases",          keyResult:"3+ profiles active by end of Year 1 Q3",            owner:"Comms Lead"         },
      { id:"p2-4",  initiative:"Cost per participant calculated",              keyResult:"Cost model complete by end of Year 1 Q2",           owner:"Cynthia / Philip"   },
      { id:"p2-5",  initiative:"Scale scenarios developed",                   keyResult:"3 scenarios approved by end of Year 1 Q2",          owner:"Cynthia / Terry"    },
      { id:"p2-6",  initiative:"Internal tech implementation owner named",    keyResult:"Owner assigned by Q1 Year 1",                       owner:"Terry Kiruki"       },
      { id:"p2-7",  initiative:"Trainer LMS v1 launched",                     keyResult:"LMS operational by end of Year 1 Q3–Q4",            owner:"Anna / Frankline"   },
      { id:"p2-8",  initiative:"Decision rights framework clarified",          keyResult:"Framework adopted by end of Q1 Year 1",             owner:"Terry / Steve"      },
      { id:"p2-9",  initiative:"Go/no-go qualification framework",            keyResult:"Used in all expansion decisions from Year 1 Q2",    owner:"Terry / Steve"      },
      { id:"p2-10", initiative:"Board skills matrix reviewed",                keyResult:"UK/Global finance gap addressed by end of Year 2",  owner:"Steve / Board"      },
    ],
  },
  {
    id:"P3", name:"People & Culture", shortName:"People", color:EL.maroon, bg:EL.pinkLight, icon:"👥",
    initiatives:[
      { id:"p3-1",  initiative:"Org architecture mapped against 2030",         keyResult:"Documented by end of Year 1 Q1",                    owner:"Terry Kiruki"       },
      { id:"p3-2",  initiative:"Communications Lead hired",                   keyResult:"Role filled by end of Year 1 Q1–Q2",                owner:"Terry / Steve"      },
      { id:"p3-3",  initiative:"People Strategy developed",                   keyResult:"Strategy live by end of Q2 Year 1",                 owner:"Terry Kiruki"       },
      { id:"p3-4",  initiative:"Trainer development pathway defined",          keyResult:"Pathway documented by end of Year 1 Q2",            owner:"Anna Navua"         },
      { id:"p3-5",  initiative:"100% trainers recertified annually",           keyResult:"Lapse = review before next delivery · From Year 2", owner:"Anna Navua"         },
      { id:"p3-6",  initiative:"Quarterly trainer community convenings",       keyResult:"4 per year from Year 1 Q3",                         owner:"Anna Navua"         },
      { id:"p3-7",  initiative:"Immersive onboarding for all staff",           keyResult:"100% onboarded, grounded in cultural principles",   owner:"Terry Kiruki"       },
      { id:"p3-8",  initiative:"Live the Work standard defined",              keyResult:"Documented by end of Year 1 Q2",                    owner:"Terry / Leadership" },
      { id:"p3-9",  initiative:"Org health check mechanism",                  keyResult:"Operational from Year 1 Q2",                        owner:"Terry / Boniface"   },
      { id:"p3-10", initiative:"Succession plans for Country Lead & CEO",      keyResult:"Plans documented by end of Year 2",                 owner:"Steve / Terry"      },
      { id:"p3-11", initiative:"Burnout monitoring for multi-function roles",  keyResult:"Reviewed quarterly · Ongoing",                      owner:"Terry Kiruki"       },
    ],
  },
  {
    id:"P4", name:"Shifting the System", shortName:"System", color:EL.orange, bg:EL.orangeLight, icon:"📣",
    initiatives:[
      { id:"p4-1",  initiative:"Communications Strategy",                      keyResult:"Live by end of Q2 Year 1",                          owner:"Comms Lead / Terry" },
      { id:"p4-2",  initiative:"Funder Navigation Map",                       keyResult:"Live by end of Q2 Year 1",                          owner:"Comms Lead / CEO"   },
      { id:"p4-3",  initiative:"Sector Presence Calendar",                    keyResult:"Operational from Year 1",                           owner:"Comms Lead"         },
      { id:"p4-4",  initiative:"Evidence base consolidated",                  keyResult:"3–5 case studies by end of Year 2",                 owner:"Tonny / Comms Lead" },
      { id:"p4-5",  initiative:"EL at 2–3 sector convenings/year",            keyResult:"2–3 per year from Year 1",                          owner:"Terry / Steve"      },
      { id:"p4-6",  initiative:"Agency-first narrative framework",            keyResult:"In use across all external comms by Q2 Year 1",     owner:"Comms Lead"         },
      { id:"p4-7",  initiative:"Digital presence: website, SEO, platforms",   keyResult:"3+ platforms active by end of Q3 Year 1",           owner:"Comms Lead / Gloria"},
      { id:"p4-8",  initiative:"Storytelling: 1 story + 1 piece per quarter", keyResult:"8 outputs per year from Q2 Year 1",                 owner:"Comms Lead / Gloria"},
      { id:"p4-9",  initiative:"Coalition: 3–5 aligned orgs",                 keyResult:"Relationships documented · Active from Year 1",     owner:"Terry / Steve"      },
    ],
  },
];

const Q2_QUICKSTART = [
  { id:"q2-1",  pillar:"P1", initiative:"Fidelity Review Process documented and active",      owner:"Terry",             due:"2026-04-30", urgent:true  },
  { id:"q2-2",  pillar:"P1", initiative:"Hero Index v1: all 5 dimensions defined",            owner:"Tonny",             due:"2026-06-30", urgent:false },
  { id:"q2-3",  pillar:"P1", initiative:"Depth thresholds per pathway agreed",                owner:"Tonny / Terry",     due:"2026-06-30", urgent:false },
  { id:"q2-4",  pillar:"P1", initiative:"Partner Embedding Rubric drafted",                   owner:"Wangui",            due:"2026-06-30", urgent:false },
  { id:"q2-5",  pillar:"P2", initiative:"Decision rights framework clarified",                owner:"Terry / Steve",     due:"2026-04-30", urgent:true  },
  { id:"q2-6",  pillar:"P2", initiative:"Go/no-go qualification framework documented",        owner:"Terry / Steve",     due:"2026-05-31", urgent:false },
  { id:"q2-7",  pillar:"P2", initiative:"Internal tech implementation owner named",           owner:"Terry",             due:"2026-04-30", urgent:true  },
  { id:"q2-8",  pillar:"P2", initiative:"Cost per participant baseline calculated",           owner:"Cynthia",           due:"2026-06-30", urgent:false },
  { id:"q2-9",  pillar:"P2", initiative:"Growth scenarios drafted (3 variants)",              owner:"Cynthia / Terry",   due:"2026-06-30", urgent:false },
  { id:"q2-10", pillar:"P3", initiative:"Communications Lead — role posted, recruiting",      owner:"Terry / Steve",     due:"2026-04-30", urgent:true  },
  { id:"q2-11", pillar:"P3", initiative:"Org architecture mapped against 2030",               owner:"Terry",             due:"2026-05-31", urgent:false },
  { id:"q2-12", pillar:"P3", initiative:"People Strategy drafted",                           owner:"Terry",             due:"2026-06-30", urgent:false },
  { id:"q2-13", pillar:"P3", initiative:"Live the Work standard defined behaviourally",       owner:"Terry",             due:"2026-06-30", urgent:false },
  { id:"q2-14", pillar:"P3", initiative:"Organisational health check mechanism designed",     owner:"Terry / Boniface",  due:"2026-06-30", urgent:false },
  { id:"q2-15", pillar:"P4", initiative:"Communications Strategy drafted",                   owner:"Comms Lead / Terry",due:"2026-06-30", urgent:false },
];

const STORAGE_KEY = "el_scoreboard_v5";

// ── Status badge ─────────────────────────────────────────────────
function StatusBadge({ statusKey, small }) {
  const s = getStatusInfo(statusKey);
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", gap:"5px",
      background:s.bg, color:s.text,
      border:`1.5px solid ${s.border}`,
      borderRadius:"20px", padding: small ? "3px 9px" : "5px 12px",
      fontSize: small ? "10px" : "11px", fontWeight:"700",
      fontFamily:"'DM Sans', sans-serif",
      whiteSpace:"nowrap", flexShrink:0,
    }}>
      <span style={{ width: small ? "6px":"7px", height: small ? "6px":"7px", borderRadius:"50%", background:s.dot, display:"inline-block", flexShrink:0 }} />
      {s.label}
    </span>
  );
}

// ── Progress bar visual ──────────────────────────────────────────
function ProgressBar({ progress, statusKey }) {
  const s = getStatusInfo(statusKey);
  const p = Number(progress) || 0;
  return (
    <div style={{ marginTop:"8px" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"4px" }}>
        <span style={{ fontSize:"10px", color:EL.greyText, fontWeight:"600" }}>PROGRESS</span>
        <span style={{ fontSize:"12px", fontWeight:"800", color:s.dot }}>{p}%</span>
      </div>
      <div style={{ background:EL.greyLight, borderRadius:"6px", height:"7px", overflow:"hidden" }}>
        <div style={{
          width:`${p}%`, background:s.dot,
          height:"100%", borderRadius:"6px",
          transition:"width 0.3s ease",
        }} />
      </div>
      {/* Range markers */}
      <div style={{ display:"flex", justifyContent:"space-between", marginTop:"3px" }}>
        {["0", "40", "79", "99", "100"].map(m => (
          <span key={m} style={{ fontSize:"8px", color:"#c4b5a0", fontWeight:"500" }}>{m}%</span>
        ))}
      </div>
    </div>
  );
}

// ── Deadline chip ────────────────────────────────────────────────
function DeadlineChip({ deadline }) {
  if (!deadline) return null;
  const days = daysUntil(deadline);
  const formatted = new Date(deadline).toLocaleDateString("en-GB", { day:"numeric", month:"short" });
  const isUrgent  = days !== null && days <= 10;
  const isPast    = days !== null && days < 0;
  const color  = isPast ? "#D32F2F" : isUrgent ? "#E8A000" : EL.greyText;
  const bg     = isPast ? "#FDECEA" : isUrgent ? "#FFF5DC" : EL.grey;
  const label  = isPast ? "Overdue" : isUrgent ? `${days}d left` : `${days}d left`;
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", gap:"4px",
      background:bg, color,
      borderRadius:"6px", padding:"2px 8px",
      fontSize:"10px", fontWeight:"700",
    }}>
      📅 {formatted} · {label}
    </span>
  );
}

// ── Initiative card (full scoreboard) ───────────────────────────
function InitiativeCard({ item, accentColor, accentBg, progress, deadline, onProgress, onDeadline, history }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab]   = useState("details");
  const statusKey  = calcStatus(progress, deadline);
  const s          = getStatusInfo(statusKey);
  const entryCount = (history||[]).filter(e => e.initiativeId === item.id).length;

  return (
    <div style={{
      background:EL.white,
      border:`1px solid ${EL.cardBorder}`,
      borderLeft:`4px solid ${s.dot}`,
      borderRadius:"12px", marginBottom:"9px", overflow:"hidden",
      boxShadow:"0 1px 4px rgba(0,0,0,0.05)",
    }}>
      {/* Header row */}
      <div onClick={() => { setOpen(!open); setTab("details"); }} style={{ padding:"13px 14px", cursor:"pointer", display:"flex", alignItems:"flex-start", gap:"10px" }}>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontSize:"13px", fontWeight:"600", color:EL.dark, lineHeight:1.4, marginBottom:"4px" }}>
            {item.initiative}
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"6px", flexWrap:"wrap" }}>
            <span style={{ fontSize:"11px", color:EL.greyText, fontWeight:"500" }}>👤 {item.owner}</span>
            {deadline && <DeadlineChip deadline={deadline} />}
          </div>
          <ProgressBar progress={progress} statusKey={statusKey} />
        </div>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"6px", flexShrink:0, paddingLeft:"8px" }}>
          <StatusBadge statusKey={statusKey} />
          <span style={{ fontSize:"11px", color:EL.greyMid }}>{open ? "▲" : "▼"}</span>
        </div>
      </div>

      {/* Expanded section */}
      {open && (
        <div style={{ borderTop:`1px solid ${EL.cardBorder}` }}>
          {/* Inner tab bar */}
          <div style={{ display:"flex", borderBottom:`1px solid ${EL.cardBorder}` }}>
            {[
              { t:"details", label:"Details" },
              { t:"history", label:`History${entryCount > 0 ? ` (${entryCount})` : ""}` },
            ].map(({ t, label }) => (
              <button key={t}
                onClick={e => { e.stopPropagation(); setTab(t); }}
                style={{
                  flex:1, padding:"9px 6px",
                  background: tab===t ? EL.greyLight : "transparent",
                  color: tab===t ? EL.dark : EL.greyText,
                  border:"none",
                  borderBottom: tab===t ? `2px solid ${EL.amber}` : "2px solid transparent",
                  fontSize:"12px", fontWeight: tab===t ? "700" : "500",
                  cursor:"pointer", fontFamily:"'DM Sans', sans-serif",
                  transition:"all 0.15s",
                }}
              >{label}</button>
            ))}
          </div>

          {/* Details tab */}
          {tab === "details" && (
            <div style={{ padding:"14px 14px 16px" }}>
              <div style={{
                fontSize:"12px", color:EL.mid, fontWeight:"500",
                lineHeight:1.6, marginBottom:"14px",
                background:EL.greyLight, borderRadius:"8px", padding:"9px 12px",
              }}>
                🎯 {item.keyResult}
              </div>
              <div style={{ marginBottom:"14px" }}>
                <label style={{ fontSize:"11px", fontWeight:"700", color:EL.dark, display:"block", marginBottom:"8px", letterSpacing:"0.5px" }}>
                  PROGRESS — {Number(progress)||0}%
                </label>
                <input
                  type="range" min="0" max="100" step="5"
                  value={Number(progress)||0}
                  onChange={e => onProgress(e.target.value)}
                  onClick={e => e.stopPropagation()}
                  style={{ width:"100%", accentColor:s.dot, cursor:"pointer", height:"6px" }}
                />
                <div style={{ display:"flex", gap:"4px", marginTop:"8px", flexWrap:"wrap" }}>
                  {[
                    { range:"0%",     label:"Not Started", dot:"#9E9E9E" },
                    { range:"1–40%",  label:"Started",     dot:"#4A90D9" },
                    { range:"41–79%", label:"On Track",    dot:"#27AE60" },
                    { range:"80–99%", label:"Nearly Done", dot:"#f39200" },
                    { range:"100%",   label:"Completed",   dot:"#27AE60" },
                  ].map(r => (
                    <span key={r.range} style={{ display:"inline-flex", alignItems:"center", gap:"3px", fontSize:"9px", color:EL.greyText, fontWeight:"500", background:EL.grey, borderRadius:"4px", padding:"2px 6px" }}>
                      <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:r.dot, display:"inline-block" }} />
                      {r.range} {r.label}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize:"11px", fontWeight:"700", color:EL.dark, display:"block", marginBottom:"6px", letterSpacing:"0.5px" }}>
                  TARGET DEADLINE (within Q2)
                </label>
                <input
                  type="date" min={Q2_START} max={Q2_END}
                  value={deadline||""}
                  onChange={e => onDeadline(e.target.value)}
                  onClick={e => e.stopPropagation()}
                  style={{
                    width:"100%", background:EL.grey,
                    border:`1.5px solid ${EL.cardBorder}`,
                    borderRadius:"8px", color:EL.dark,
                    padding:"8px 10px", fontSize:"13px",
                    fontFamily:"'DM Sans', sans-serif", outline:"none",
                  }}
                />
                <div style={{ fontSize:"10px", color:EL.greyText, marginTop:"5px" }}>
                  ⚡ Below 40% within 10 days → Off Track. Below 79% → At Risk.
                </div>
              </div>
            </div>
          )}

          {/* History tab */}
          {tab === "history" && (
            <div style={{ padding:"14px" }}>
              <HistoryPanel initiativeId={item.id} history={history||[]} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Q2 Quick Start card (progress + auto status) ─────────────────
function Q2Card({ item, progress, onProgress, history }) {
  const [open, setOpen] = useState(false);
  const pillar    = PILLARS.find(p => p.id === item.pillar);
  const statusKey = calcStatus(progress, item.due);
  const s         = getStatusInfo(statusKey);
  const days      = daysUntil(item.due);
  const dueLabel  = new Date(item.due).toLocaleDateString("en-GB", { day:"numeric", month:"short" });

  return (
    <div style={{
      background:EL.white,
      border:`1px solid ${EL.cardBorder}`,
      borderLeft:`4px solid ${s.dot}`,
      borderRadius:"12px", marginBottom:"9px", overflow:"hidden",
      boxShadow:"0 1px 4px rgba(0,0,0,0.05)",
    }}>
      <div onClick={() => setOpen(!open)} style={{ padding:"12px 14px", cursor:"pointer", display:"flex", alignItems:"flex-start", gap:"10px" }}>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"5px", flexWrap:"wrap" }}>
            <span style={{ background:pillar.bg, color:pillar.color, border:`1px solid ${pillar.color}33`, borderRadius:"5px", padding:"1px 7px", fontSize:"9px", fontWeight:"700" }}>{item.pillar}</span>
            <span style={{ background: days <= 10 ? "#FDECEA" : days <= 20 ? "#FFF5DC" : EL.grey, color: days <= 10 ? "#D32F2F" : days <= 20 ? "#E8A000" : EL.greyText, borderRadius:"5px", padding:"1px 7px", fontSize:"9px", fontWeight:"700" }}>
              {dueLabel} · {days}d left
            </span>
            {item.urgent && <span style={{ background:"#FDECEA", color:"#D32F2F", borderRadius:"5px", padding:"1px 7px", fontSize:"9px", fontWeight:"800" }}>URGENT</span>}
          </div>
          <div style={{ fontSize:"13px", fontWeight:"600", color:EL.dark, lineHeight:1.35, marginBottom:"6px" }}>{item.initiative}</div>
          <div style={{ fontSize:"11px", color:EL.greyText, fontWeight:"500", marginBottom:"6px" }}>👤 {item.owner}</div>
          <ProgressBar progress={progress} statusKey={statusKey} />
        </div>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"6px", flexShrink:0, paddingLeft:"8px" }}>
          <StatusBadge statusKey={statusKey} />
          <span style={{ fontSize:"11px", color:EL.greyMid }}>{open ? "▲" : "▼"}</span>
        </div>
      </div>

      {open && (
        <div style={{ padding:"0 14px 14px", borderTop:`1px solid ${EL.cardBorder}` }}>
          <label style={{ fontSize:"11px", fontWeight:"700", color:EL.dark, display:"block", margin:"10px 0 8px", letterSpacing:"0.5px" }}>
            UPDATE PROGRESS — {Number(progress)||0}%
          </label>
          <input
            type="range" min="0" max="100" step="5"
            value={Number(progress)||0}
            onChange={e => onProgress(e.target.value)}
            onClick={e => e.stopPropagation()}
            style={{ width:"100%", accentColor:s.dot, cursor:"pointer" }}
          />
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:"4px" }}>
            <span style={{ fontSize:"10px", color:EL.greyText }}>0% — Not Started</span>
            <span style={{ fontSize:"10px", color:EL.greyText }}>100% — Completed</span>
          </div>
          {days <= 10 && (Number(progress)||0) < 80 && (
            <div style={{ marginTop:"10px", background:"#FDECEA", border:"1px solid #F5AAAA", borderRadius:"8px", padding:"8px 10px", fontSize:"11px", color:"#8B1A1A", fontWeight:"500", lineHeight:1.5 }}>
              ⚠️ {days} days to deadline. You need to be above {(Number(progress)||0) <= 40 ? "40% to exit Off Track" : "79% to exit At Risk"}.
            </div>
          )}
          {/* History for this Q2 item */}
          {(history||[]).filter(e => e.initiativeId === item.id).length > 0 && (
            <div style={{ marginTop:"12px" }}>
              <div style={{ fontSize:"10px", fontWeight:"700", color:EL.mid, letterSpacing:"0.8px", marginBottom:"8px" }}>CHANGE HISTORY</div>
              <HistoryPanel initiativeId={item.id} history={history||[]} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Status guide legend (collapsible) ────────────────────────────
const LEGEND_ITEMS = [
  { range:"0%",     label:"Not Started",  dot:"#9E9E9E", detail:"No work begun yet. Fine if deadline is far away."        },
  { range:"1–40%",  label:"Started",      dot:"#4A90D9", detail:"Work underway but early stage."                          },
  { range:"41–79%", label:"On Track",     dot:"#27AE60", detail:"Good progress. Confident it will be done on time."      },
  { range:"80–99%", label:"Nearly Done",  dot:"#f39200", detail:"Final stretch. Almost there."                           },
  { range:"100%",   label:"Completed ✓",  dot:"#27AE60", detail:"Done. No further action needed."                       },
];
const OVERRIDE_ITEMS = [
  { trigger:"≤40% within 10 days", label:"Off Track", dot:"#D32F2F", detail:"Auto-flagged. Unlikely to complete in time." },
  { trigger:"41–79% within 10 days", label:"At Risk",   dot:"#E8A000", detail:"Auto-flagged. Could make it — but needs a push." },
];

function StatusLegend() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom:"16px" }}>
      <button onClick={() => setOpen(!open)} style={{
        width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
        background:EL.white, border:`1.5px solid ${EL.cardBorder}`,
        borderRadius:"12px", padding:"12px 14px", cursor:"pointer",
        fontFamily:"'DM Sans', sans-serif", boxShadow:"0 1px 4px rgba(0,0,0,0.05)",
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
          <span style={{ fontSize:"16px" }}>📖</span>
          <div style={{ textAlign:"left" }}>
            <div style={{ fontSize:"13px", fontWeight:"700", color:EL.black }}>How Status Works</div>
            <div style={{ fontSize:"10px", color:EL.greyText, marginTop:"1px" }}>Progress % + deadline = automatic status</div>
          </div>
        </div>
        <span style={{ fontSize:"11px", color:EL.greyText, fontWeight:"700" }}>{open ? "▲ Hide":"▼ Show"}</span>
      </button>

      {open && (
        <div style={{ marginTop:"6px" }}>
          {/* Progress-based */}
          <div style={{ fontSize:"10px", color:EL.mid, fontWeight:"700", letterSpacing:"1px", margin:"8px 2px 6px" }}>PROGRESS-BASED STATUS</div>
          {LEGEND_ITEMS.map(r => (
            <div key={r.range} style={{ background:EL.white, border:`1px solid ${EL.cardBorder}`, borderLeft:`4px solid ${r.dot}`, borderRadius:"10px", padding:"10px 12px", marginBottom:"6px", display:"flex", alignItems:"center", gap:"10px" }}>
              <div style={{ flexShrink:0, textAlign:"center", minWidth:"42px" }}>
                <div style={{ fontSize:"9px", fontWeight:"700", color:"#aaa", background:EL.grey, borderRadius:"4px", padding:"2px 4px" }}>{r.range}</div>
              </div>
              <div>
                <div style={{ fontSize:"12px", fontWeight:"700", color:EL.dark, marginBottom:"2px" }}>{r.label}</div>
                <div style={{ fontSize:"11px", color:EL.greyText }}>{r.detail}</div>
              </div>
            </div>
          ))}

          {/* Deadline overrides */}
          <div style={{ fontSize:"10px", color:EL.mid, fontWeight:"700", letterSpacing:"1px", margin:"12px 2px 6px" }}>DEADLINE-PROXIMITY OVERRIDE (AUTO)</div>
          {OVERRIDE_ITEMS.map(r => (
            <div key={r.trigger} style={{ background:EL.white, border:`1px solid ${EL.cardBorder}`, borderLeft:`4px solid ${r.dot}`, borderRadius:"10px", padding:"10px 12px", marginBottom:"6px", display:"flex", alignItems:"center", gap:"10px" }}>
              <div style={{ flexShrink:0, textAlign:"center", minWidth:"42px" }}>
                <span style={{ width:"10px", height:"10px", borderRadius:"50%", background:r.dot, display:"inline-block" }} />
              </div>
              <div>
                <div style={{ fontSize:"12px", fontWeight:"700", color:EL.dark, marginBottom:"2px" }}>{r.label}</div>
                <div style={{ fontSize:"10px", color:"#aaa", fontWeight:"600", marginBottom:"2px" }}>Triggers when: {r.trigger}</div>
                <div style={{ fontSize:"11px", color:EL.greyText }}>{r.detail}</div>
              </div>
            </div>
          ))}

          {/* Rule callout */}
          <div style={{ background:EL.brown, borderRadius:"10px", padding:"12px 14px", display:"flex", gap:"10px", alignItems:"flex-start" }}>
            <span style={{ fontSize:"18px", flexShrink:0 }}>⚡</span>
            <div>
              <div style={{ fontSize:"11px", fontWeight:"700", color:EL.orange, marginBottom:"3px" }}>The rule in plain English</div>
              <div style={{ fontSize:"11px", color:"rgba(255,255,255,0.65)", lineHeight:1.6 }}>
                You set the progress %. The system works out your status automatically. The closer you are to your deadline with low progress, the more urgent your flag becomes — no one decides it for you.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── History entry helper ─────────────────────────────────────────
function makeEntry(user, initiativeId, initiativeName, field, from, to) {
  return {
    id: Date.now() + Math.random(),
    user,
    initiativeId,
    initiativeName,
    field,          // "progress" | "deadline" | "q2progress"
    from: String(from),
    to:   String(to),
    ts:   new Date().toISOString(),
  };
}

function formatTs(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day:"numeric", month:"short" }) +
    " · " + d.toLocaleTimeString("en-GB", { hour:"2-digit", minute:"2-digit" });
}

// ── History panel (per initiative) ──────────────────────────────
function HistoryPanel({ initiativeId, history }) {
  const entries = history
    .filter(e => e.initiativeId === initiativeId)
    .sort((a, b) => new Date(b.ts) - new Date(a.ts));

  if (entries.length === 0) return (
    <div style={{ fontSize:"11px", color:"#bbb", fontStyle:"italic", padding:"6px 0" }}>
      No changes recorded yet.
    </div>
  );

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
      {entries.map(e => {
        const isProgress = e.field === "progress" || e.field === "q2progress";
        const from = isProgress ? `${e.from}%` : e.from || "—";
        const to   = isProgress ? `${e.to}%`   : e.to   || "—";
        return (
          <div key={e.id} style={{
            background: EL.greyLight, border:`1px solid ${EL.cardBorder}`,
            borderRadius:"8px", padding:"8px 10px",
            display:"flex", alignItems:"flex-start", gap:"8px",
          }}>
            {/* Avatar initial */}
            <div style={{
              width:"28px", height:"28px", borderRadius:"50%",
              background: EL.dark, color: EL.amberLight,
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:"11px", fontWeight:"700", flexShrink:0,
            }}>
              {e.user.trim().charAt(0).toUpperCase()}
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:"12px", fontWeight:"600", color:EL.dark, marginBottom:"2px" }}>
                {e.user}
                <span style={{ fontWeight:"400", color:EL.greyText }}> updated progress</span>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"3px" }}>
                <span style={{ fontSize:"11px", background:"#fee2e2", color:"#991b1b", borderRadius:"4px", padding:"1px 7px", fontWeight:"600" }}>{from}</span>
                <span style={{ fontSize:"10px", color:"#aaa" }}>→</span>
                <span style={{ fontSize:"11px", background:"#dcfce7", color:"#166534", borderRadius:"4px", padding:"1px 7px", fontWeight:"600" }}>{to}</span>
              </div>
              <div style={{ fontSize:"10px", color:"#aaa", fontWeight:"500" }}>{formatTs(e.ts)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Name prompt modal ────────────────────────────────────────────
function NamePrompt({ onConfirm }) {
  const [name, setName] = useState("");
  return (
    <div style={{
      position:"fixed", inset:0, zIndex:200,
      background:"rgba(26,13,5,0.85)",
      display:"flex", alignItems:"center", justifyContent:"center",
      padding:"24px",
    }}>
      {/* Radial glow behind modal */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        background:`radial-gradient(ellipse at 60% 40%, rgba(224,122,26,0.15) 0%, transparent 60%)`,
      }} />
      <div style={{
        background:EL.white, borderRadius:"16px", padding:"28px 24px",
        width:"100%", maxWidth:"340px", position:"relative",
        boxShadow:"0 8px 40px rgba(0,0,0,0.3)",
      }}>
        <div style={{ textAlign:"center", marginBottom:"20px" }}>
          <div style={{
            width:"48px", height:"48px", borderRadius:"12px",
            background:EL.dark, margin:"0 auto 12px",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:"22px",
          }}>👋</div>
          <div style={{ fontSize:"17px", fontWeight:"700", color:EL.dark, marginBottom:"6px", fontFamily:"'Playfair Display', serif" }}>
            Welcome to the Scoreboard
          </div>
          <div style={{ fontSize:"12px", color:EL.greyText, lineHeight:1.6 }}>
            Enter your name so your updates are tracked and attributed correctly.
          </div>
        </div>
        <input
          autoFocus
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === "Enter" && name.trim() && onConfirm(name.trim())}
          placeholder="e.g. Tonny Njeru"
          style={{
            width:"100%", border:`1.5px solid ${EL.cardBorder}`,
            borderRadius:"10px", padding:"10px 14px",
            fontSize:"14px", fontFamily:"'DM Sans', sans-serif",
            color:EL.dark, background:EL.greyLight,
            outline:"none", marginBottom:"12px",
          }}
        />
        <button
          onClick={() => name.trim() && onConfirm(name.trim())}
          style={{
            width:"100%", padding:"11px",
            background: name.trim() ? EL.dark : EL.cardBorder,
            color: name.trim() ? EL.amberLight : EL.greyText,
            border:"none", borderRadius:"10px",
            fontSize:"13px", fontWeight:"700",
            fontFamily:"'DM Sans', sans-serif",
            cursor: name.trim() ? "pointer" : "default",
            transition:"all 0.2s",
          }}
        >
          Enter Scoreboard →
        </button>
        <div style={{ fontSize:"10px", color:"#bbb", textAlign:"center", marginTop:"10px" }}>
          Your name is saved locally on this device
        </div>
      </div>
    </div>
  );
}

// ── Main app ──────────────────────────────────────────────────────
export default function Scoreboard() {
  const [view, setView]                 = useState("quickstart");
  const [activePillar, setActivePillar] = useState("P1");
  const [progress, setProgressMap]      = useState({});
  const [deadlines, setDeadlines]       = useState({});
  const [q2progress, setQ2Progress]     = useState({});
  const [history, setHistory]           = useState([]);   // audit log
  const [currentUser, setCurrentUser]   = useState(null); // name of logged-in user
  const [showPrompt, setShowPrompt]     = useState(false);

  useEffect(() => {
    try {
      const d = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (d.progress)   setProgressMap(d.progress);
      if (d.deadlines)  setDeadlines(d.deadlines);
      if (d.q2progress) setQ2Progress(d.q2progress);
      if (d.history)    setHistory(d.history);
      // Check saved user
      const savedUser = localStorage.getItem("el_scoreboard_user");
      if (savedUser) setCurrentUser(savedUser);
      else setShowPrompt(true);
    } catch(e) { setShowPrompt(true); }
  }, []);

  const persist = (pr, dl, q2, hist) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ progress:pr, deadlines:dl, q2progress:q2, history:hist })); } catch(e) {}
  };

  const confirmUser = (name) => {
    localStorage.setItem("el_scoreboard_user", name);
    setCurrentUser(name);
    setShowPrompt(false);
  };

  // Find initiative name by id
  const findName = (id) => {
    const allItems = PILLARS.flatMap(p => p.initiatives);
    const q2item   = Q2_QUICKSTART.find(i => i.id === id);
    const mainItem = allItems.find(i => i.id === id);
    return q2item?.initiative || mainItem?.initiative || id;
  };

  const logChange = (hist, id, field, oldVal, newVal) => {
    if (String(oldVal) === String(newVal)) return hist;
    return [...hist, makeEntry(currentUser || "Unknown", id, findName(id), field, oldVal, newVal)];
  };

  const setP = (id, v) => {
    const newHist = logChange(history, id, "progress", progress[id]||0, v);
    const u = {...progress,[id]:v};
    setProgressMap(u); setHistory(newHist);
    persist(u, deadlines, q2progress, newHist);
  };
  const setDL = (id, v) => {
    const newHist = logChange(history, id, "deadline", deadlines[id]||"", v);
    const u = {...deadlines,[id]:v};
    setDeadlines(u); setHistory(newHist);
    persist(progress, u, q2progress, newHist);
  };
  const setQ2 = (id, v) => {
    const newHist = logChange(history, id, "q2progress", q2progress[id]||0, v);
    const u = {...q2progress,[id]:v};
    setQ2Progress(u); setHistory(newHist);
    persist(progress, deadlines, u, newHist);
  };

  const cp = PILLARS.find(p => p.id === activePillar);

  // Summary counts for scoreboard
  const allItems = PILLARS.flatMap(p => p.initiatives);
  const statusCounts = Object.entries(STATUS_MAP).reduce((acc, [key]) => {
    acc[key] = allItems.filter(i => calcStatus(progress[i.id]||0, deadlines[i.id]) === key).length;
    return acc;
  }, {});

  // Q2 summary
  const q2done = Q2_QUICKSTART.filter(i => calcStatus(q2progress[i.id]||0, i.due) === "completed").length;
  const q2Keys = ["not_started","started","on_track","nearly_done","completed","at_risk","off_track"];
  const q2Counts = q2Keys.reduce((acc, key) => {
    acc[key] = Q2_QUICKSTART.filter(i => calcStatus(q2progress[i.id]||0, i.due) === key).length;
    return acc;
  }, {});

  return (
    <div style={{ minHeight:"100vh", background:EL.cream, fontFamily:"'DM Sans', sans-serif", color:EL.dark, maxWidth:"600px", margin:"0 auto" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        button:active { opacity:0.8; transform:scale(0.98); }
        input[type="date"]:focus, input[type="range"]:focus { outline:none; }
        ::-webkit-scrollbar { display:none; }
        input[type="range"] { -webkit-appearance:none; appearance:none; height:6px; border-radius:6px; background:${EL.greyLight}; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance:none; width:18px; height:18px; border-radius:50%; background:${EL.amber}; cursor:pointer; border:2px solid white; box-shadow:0 1px 4px rgba(0,0,0,0.2); }
      `}</style>

      {/* Name prompt */}
      {showPrompt && <NamePrompt onConfirm={confirmUser} />}

      {/* ── HEADER ── */}
      <div style={{
        background: EL.dark,
        padding:"18px 16px 14px",
        position:"sticky", top:0, zIndex:50,
        boxShadow:`0 3px 16px ${EL.brownDeep}88`,
        overflow:"hidden",
      }}>
        {/* COA-style radial gradient overlay */}
        <div style={{
          position:"absolute", inset:0, pointerEvents:"none",
          background:`
            radial-gradient(ellipse at 90% 50%, rgba(224,122,26,0.22) 0%, transparent 60%),
            radial-gradient(ellipse at 10% 80%, rgba(122,16,64,0.18) 0%, transparent 50%)
          `,
        }} />
        {/* Content above gradient */}
        <div style={{ position:"relative" }}>
        {/* Logo + title */}
        <div style={{ marginBottom:"14px" }}>
          <img
            src={EL_LOGO}
            alt="Emerging Leaders"
            style={{ height:"34px", width:"auto", display:"block", marginBottom:"10px", mixBlendMode:"screen" }}
          />
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div style={{
              fontSize:"10px", color:"rgba(255,255,255,0.6)",
              fontWeight:"700", letterSpacing:"2px",
            }}>
              STRATEGY SCOREBOARD · QUARTER 2 — 2026
            </div>
            {currentUser && (
              <div style={{
                display:"flex", alignItems:"center", gap:"5px",
                background:"rgba(255,255,255,0.12)", borderRadius:"20px",
                padding:"3px 10px 3px 5px", border:`1px solid rgba(255,255,255,0.15)`,
              }}>
                <div style={{
                  width:"20px", height:"20px", borderRadius:"50%",
                  background:EL.amber, color:EL.dark,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"10px", fontWeight:"700", flexShrink:0,
                }}>
                  {currentUser.charAt(0).toUpperCase()}
                </div>
                <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.8)", fontWeight:"600", whiteSpace:"nowrap" }}>
                  {currentUser.split(" ")[0]}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Tab toggle — COA style, per-tab outline */}
        <div style={{
          display:"flex",
          background:"rgba(0,0,0,0.25)",
          borderRadius:"10px", padding:"4px", gap:"4px",
        }}>
          {[
            { v:"quickstart", label:"🚀 Q2 Quick Start",  outline: EL.pink    },
            { v:"scoreboard", label:"📊 Full Scoreboard", outline: EL.amber   },
          ].map(({v, label, outline}) => (
            <button key={v} onClick={() => setView(v)} style={{
              flex:1, padding:"8px 6px",
              background: view===v ? EL.white : "transparent",
              color: view===v ? EL.dark : "rgba(255,255,255,0.6)",
              border: `1.5px solid ${view===v ? outline : "rgba(255,255,255,0.15)"}`,
              borderRadius:"7px",
              fontSize:"13px", fontWeight: view===v ? "600" : "500",
              cursor:"pointer", transition:"all 0.2s",
              fontFamily:"'DM Sans', sans-serif",
              boxShadow: view===v ? `0 1px 8px ${outline}55` : "none",
            }}>{label}</button>
          ))}
        </div>
        </div> {/* end relative wrapper */}
      </div>

      {/* ── Q2 QUICK START ── */}
      {view === "quickstart" && (
        <div style={{ padding:"16px" }}>

          {/* Hero card — matches header background */}
          <div style={{ background:EL.dark, borderRadius:"16px", padding:"20px", marginBottom:"14px", position:"relative", overflow:"hidden" }}>
            {/* Same COA radial gradient as header */}
            <div style={{
              position:"absolute", inset:0, pointerEvents:"none",
              background:`
                radial-gradient(ellipse at 90% 50%, rgba(224,122,26,0.22) 0%, transparent 60%),
                radial-gradient(ellipse at 10% 80%, rgba(122,16,64,0.18) 0%, transparent 50%)
              `,
            }} />
            <div style={{ position:"relative" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"14px" }}>
              <div>
                <div style={{ fontSize:"14px", fontWeight:"700", color:EL.white, marginBottom:"3px" }}>Q2 Quick Start</div>
                <div style={{ fontSize:"11px", color:"rgba(255,255,255,0.6)", fontWeight:"400" }}>Complete before end of June</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <span style={{ fontSize:"36px", fontWeight:"800", color:EL.amberLight, lineHeight:1 }}>{q2done}</span>
                <span style={{ fontSize:"18px", color:"rgba(255,255,255,0.35)", fontWeight:"600" }}>/15</span>
                <div style={{ fontSize:"9px", color:"rgba(255,255,255,0.5)", letterSpacing:"0.8px", marginTop:"2px", fontWeight:"600" }}>COMPLETED</div>
              </div>
            </div>
            <div style={{ background:"rgba(255,255,255,0.12)", borderRadius:"6px", height:"7px", overflow:"hidden" }}>
              <div style={{ width:`${(q2done/15)*100}%`, background:EL.amberLight, height:"100%", borderRadius:"6px", transition:"width 0.4s ease" }} />
            </div>
            <div style={{ fontSize:"10px", color:"rgba(255,255,255,0.45)", marginTop:"7px", fontWeight:"500" }}>{15-q2done} item{15-q2done!==1?"s":""} still to complete</div>
            </div>
          </div>

          {/* Mini status counts */}
          <div style={{ display:"flex", gap:"6px", marginBottom:"14px", overflowX:"auto" }}>
            {["not_started","started","on_track","nearly_done","at_risk","off_track","completed"].map(key => {
              const s = getStatusInfo(key);
              const c = q2Counts[key]||0;
              if (c === 0) return null;
              return (
                <div key={key} style={{ background:s.bg, border:`1.5px solid ${s.border}`, borderRadius:"10px", padding:"6px 12px", flexShrink:0, textAlign:"center" }}>
                  <div style={{ fontSize:"16px", fontWeight:"800", color:s.text }}>{c}</div>
                  <div style={{ fontSize:"8px", color:s.text, fontWeight:"600", marginTop:"1px" }}>{s.label.toUpperCase()}</div>
                </div>
              );
            })}
          </div>

          <StatusLegend />

          {/* Urgent */}
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"10px" }}>
            <div style={{ height:"1.5px", flex:1, background:`linear-gradient(to right, ${EL.amber}, transparent)` }} />
            <span style={{ fontSize:"10px", color:EL.amber, fontWeight:"700", letterSpacing:"1px", whiteSpace:"nowrap" }}>⚠️ DUE THIS MONTH</span>
            <div style={{ height:"1.5px", flex:1, background:`linear-gradient(to left, ${EL.amber}, transparent)` }} />
          </div>
          {Q2_QUICKSTART.filter(i => i.urgent).map(item => (
            <Q2Card key={item.id} item={item} progress={q2progress[item.id]||0} onProgress={v => setQ2(item.id, v)} history={history} />
          ))}

          <div style={{ display:"flex", alignItems:"center", gap:"8px", margin:"16px 0 10px" }}>
            <div style={{ height:"1.5px", flex:1, background:EL.greyMid }} />
            <span style={{ fontSize:"10px", color:EL.greyText, fontWeight:"700", letterSpacing:"1px", whiteSpace:"nowrap" }}>MAY & JUNE DEADLINES</span>
            <div style={{ height:"1.5px", flex:1, background:EL.greyMid }} />
          </div>
          {Q2_QUICKSTART.filter(i => !i.urgent).map(item => (
            <Q2Card key={item.id} item={item} progress={q2progress[item.id]||0} onProgress={v => setQ2(item.id, v)} history={history} />
          ))}
        </div>
      )}

      {/* ── FULL SCOREBOARD ── */}
      {view === "scoreboard" && (
        <div>
          {/* Summary */}
          <div style={{ background:EL.white, borderBottom:`1px solid ${EL.cardBorder}`, padding:"14px 16px" }}>
            <div style={{ fontSize:"10px", fontWeight:"700", color:EL.mid, letterSpacing:"1.2px", marginBottom:"12px" }}>OVERALL · 42 INITIATIVES</div>
            <div style={{ display:"flex", gap:"8px", overflowX:"auto" }}>
              {Object.entries(STATUS_MAP).map(([key, s]) => {
                const c = statusCounts[key]||0;
                if (c === 0) return null;
                return (
                  <div key={key} style={{ background:s.bg, border:`1.5px solid ${s.border}`, borderRadius:"10px", padding:"8px 12px", flexShrink:0, textAlign:"center" }}>
                    <div style={{ fontSize:"16px", fontWeight:"800", color:s.text }}>{c}</div>
                    <div style={{ fontSize:"8px", color:s.text, fontWeight:"600", marginTop:"1px" }}>{s.label.toUpperCase()}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div style={{ padding:"12px 16px 0" }}>
            <StatusLegend />
          </div>

          {/* Pillar tabs */}
          <div style={{ display:"flex", overflowX:"auto", padding:"0 16px 12px", gap:"8px" }}>
            {PILLARS.map(p => {
              const completed = p.initiatives.filter(i => calcStatus(progress[i.id]||0, deadlines[i.id])==="completed").length;
              const isActive  = activePillar === p.id;
              return (
                <button key={p.id} onClick={() => setActivePillar(p.id)} style={{
                  flexShrink:0, padding:"8px 14px",
                  background: isActive ? p.color : EL.greyLight,
                  color: isActive ? EL.white : EL.greyText,
                  border:`1.5px solid ${isActive ? p.color : EL.greyMid}`,
                  borderRadius:"22px", fontSize:"12px", fontWeight:"700",
                  cursor:"pointer", fontFamily:"'DM Sans', sans-serif",
                  display:"flex", alignItems:"center", gap:"6px",
                  boxShadow: isActive ? `0 2px 8px ${p.color}44` : "none",
                }}>
                  {p.icon} {p.shortName}
                  <span style={{ background: isActive ? "rgba(255,255,255,0.2)" : EL.greyMid, color: isActive ? EL.white : EL.greyText, borderRadius:"10px", padding:"1px 7px", fontSize:"10px", fontWeight:"700" }}>
                    {completed}/{p.initiatives.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Pillar banner + cards */}
          <div style={{ padding:"0 16px 16px" }}>
            <div style={{ background:EL.brown, borderRadius:"12px", padding:"14px 16px", marginBottom:"14px", display:"flex", alignItems:"center", gap:"12px", position:"relative", overflow:"hidden" }}>
              <div style={{ width:"4px", height:"40px", background:`linear-gradient(to bottom, ${cp.color}, ${cp.color}88)`, borderRadius:"2px", flexShrink:0 }} />
              <span style={{ fontSize:"24px" }}>{cp.icon}</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:"10px", color:"rgba(255,255,255,0.4)", fontWeight:"700", letterSpacing:"1.2px" }}>{cp.id}</div>
                <div style={{ fontSize:"15px", fontWeight:"700", color:EL.white }}>{cp.name}</div>
              </div>
              <div style={{ textAlign:"right", flexShrink:0 }}>
                <div style={{ fontSize:"20px", fontWeight:"800", color:EL.amberLight, lineHeight:1 }}>
                  {cp.initiatives.filter(i => calcStatus(progress[i.id]||0, deadlines[i.id])==="completed").length}
                </div>
                <div style={{ fontSize:"9px", color:"rgba(255,255,255,0.35)", fontWeight:"600" }}>DONE / {cp.initiatives.length}</div>
              </div>
            </div>

            {cp.initiatives.map(item => (
              <InitiativeCard
                key={item.id} item={item}
                accentColor={cp.color} accentBg={cp.bg}
                progress={progress[item.id]||0}
                deadline={deadlines[item.id]||""}
                onProgress={v => setP(item.id, v)}
                onDeadline={v => setDL(item.id, v)}
                history={history}
              />
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ padding:"16px 16px 28px", textAlign:"center", borderTop:`1px solid ${EL.cardBorder}`, background:EL.white }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"6px", marginBottom:"6px" }}>
          <div style={{ width:"28px", height:"2px", background:EL.pink, borderRadius:"2px" }} />
          <div style={{ width:"28px", height:"2px", background:EL.orange, borderRadius:"2px" }} />
        </div>
        <div style={{ fontSize:"11px", color:EL.greyText, fontWeight:"500" }}>
          Scoreboard owner: <strong style={{ color:EL.amber }}>Tonny Njeru</strong>
        </div>
        <div style={{ fontSize:"10px", color:"#bbb", marginTop:"3px" }}>
          Drag slider to update · Dates locked to Q2 2026
        </div>
      </div>
    </div>
  );
}
