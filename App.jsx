import { useState, useEffect } from "react";

const EL_LOGO = "data:image/png;base64,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";

// ── EL Brand ──────────────────────────────────────────────────────────────────
const EL = {
  dark:        "#1A0D05",
  mid:         "#4A2A10",
  amber:       "#E07A1A",
  amberLight:  "#F59C3A",
  maroon:      "#7A1040",
  cream:       "#FDF6EC",
  white:       "#ffffff",
  pink:        "#a3195b",
  orange:      "#f39200",
  cardBorder:  "#e8d8c4",
  pinkLight:   "#FDF0F5",
  orangeLight: "#FFF8F0",
  greyText:    "#5A3E2B",
  greyMid:     "#e8d8c4",
  grey:        "#f5ede0",
  greyLight:   "#faf3e8",
  brownDeep:   "#0f0802",
};

// ── Status ────────────────────────────────────────────────────────────────────
const STATUS_MAP = {
  not_started: { label:"Not Started", dot:"#9E9E9E", bg:"#F4F4F4", border:"#DCDCDC", text:"#555555" },
  started:     { label:"Started",     dot:"#4A90D9", bg:"#EBF3FC", border:"#B8D5F0", text:"#1A5FA8" },
  on_track:    { label:"On Track",    dot:"#27AE60", bg:"#E8F6EE", border:"#9DDBB5", text:"#145E33" },
  nearly_done: { label:"Nearly Done", dot:"#f39200", bg:"#FFF5DC", border:"#FFD97A", text:"#7A4F00" },
  completed:   { label:"Completed ✓", dot:"#27AE60", bg:"#D4F5E2", border:"#6DD9A0", text:"#0A4020" },
  at_risk:     { label:"At Risk",     dot:"#E8A000", bg:"#FFF5DC", border:"#FFD97A", text:"#7A4F00" },
  off_track:   { label:"Off Track",   dot:"#D32F2F", bg:"#FDECEA", border:"#F5AAAA", text:"#8B1A1A" },
};

function getStatusInfo(key) { return STATUS_MAP[key] || STATUS_MAP.not_started; }

function calcStatus(pct, deadline) {
  const p = Number(pct) || 0;
  if (p === 100) return "completed";
  const today = new Date();
  const daysLeft = deadline ? Math.ceil((new Date(deadline) - today) / 86400000) : null;
  const near = daysLeft !== null && daysLeft <= 10;
  if (p === 0)   return near ? "off_track"  : "not_started";
  if (p <= 40)   return near ? "off_track"  : "started";
  if (p <= 79)   return near ? "at_risk"    : "on_track";
  if (p <= 99)   return "nearly_done";
  return "not_started";
}

function daysUntil(deadline) {
  if (!deadline) return null;
  return Math.ceil((new Date(deadline) - new Date()) / 86400000);
}

function formatTs(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day:"numeric", month:"short" }) +
    " · " + d.toLocaleTimeString("en-GB", { hour:"2-digit", minute:"2-digit" });
}

// ── Pillar meta ───────────────────────────────────────────────────────────────
const PM = {
  P1: { color:EL.maroon, bg:EL.pinkLight,   icon:"🌍", name:"Expanding Access"         },
  P2: { color:EL.orange, bg:EL.orangeLight, icon:"⚙️",  name:"Infrastructure for Scale" },
  P3: { color:EL.maroon, bg:EL.pinkLight,   icon:"👥", name:"People & Culture"          },
  P4: { color:EL.orange, bg:EL.orangeLight, icon:"📣", name:"Shifting the System"       },
};

// ── Quarters ──────────────────────────────────────────────────────────────────
const QUARTERS = [
  { id:"Q2",  label:"Q2",         period:"Apr – Jun 2026", end:"2026-06-30", color:EL.amber  },
  { id:"Q3",  label:"Q3",         period:"Jul – Sep 2026", end:"2026-09-30", color:EL.orange },
  { id:"EY1", label:"End Year 1", period:"Oct – Dec 2026", end:"2026-12-31", color:EL.dark   },
];

// Default deadline per quarter (shown on every card until a custom one is set)
const QUARTER_DEADLINES = {
  Q2:  "2026-06-30",
  Q3:  "2026-09-30",
  EY1: "2026-12-31",
};

// ── All Initiatives ───────────────────────────────────────────────────────────
const ALL_INITIATIVES = [
  // Q2 (includes initiatives transferred from Q1)
  { id:"p1-9",  quarter:"Q2",  pillar:"P1", initiative:"Fidelity Review Process (Flag–Fix–Exit)", owner:"Terry Kiruki",    keyResult:"Documented and active by Q1 Year 1",
    activities:[{id:"p1-9-1",label:"Define fidelity criteria & quality standards"},{id:"p1-9-2",label:"Draft Flag-Fix-Exit process document"},{id:"p1-9-3",label:"Review with programme delivery team"},{id:"p1-9-4",label:"Pilot one fidelity review session"},{id:"p1-9-5",label:"Finalise, approve and publish documentation"}]},
  { id:"p1-10", quarter:"Q2",  pillar:"P1", initiative:"Gateway selection criteria formalised",    owner:"Terry / Steve",   keyResult:"Criteria agreed by Q1 Year 1",
    activities:[{id:"p1-10-1",label:"Map existing partner entry points and gaps"},{id:"p1-10-2",label:"Draft selection criteria framework"},{id:"p1-10-3",label:"Review criteria with Terry & Steve"},{id:"p1-10-4",label:"Stakeholder consultation on criteria"},{id:"p1-10-5",label:"Criteria formally agreed and documented"}]},
  { id:"p2-6",  quarter:"Q2",  pillar:"P2", initiative:"Internal tech implementation owner named", owner:"Terry Kiruki",    keyResult:"Owner assigned by Q1 Year 1",
    activities:[{id:"p2-6-1",label:"Define role scope and responsibilities"},{id:"p2-6-2",label:"Assess internal candidates"},{id:"p2-6-3",label:"Consult with relevant team leads"},{id:"p2-6-4",label:"Owner confirmed and role communicated"}]},
  { id:"p2-8",  quarter:"Q2",  pillar:"P2", initiative:"Decision rights framework clarified",      owner:"Terry / Steve",   keyResult:"Framework adopted by end of Q1 Year 1",
    activities:[{id:"p2-8-1",label:"Audit current decision-making gaps"},{id:"p2-8-2",label:"Draft decision rights framework"},{id:"p2-8-3",label:"Review with leadership team"},{id:"p2-8-4",label:"Refine based on feedback"},{id:"p2-8-5",label:"Framework formally adopted and shared"}]},
  { id:"p3-1",  quarter:"Q2",  pillar:"P3", initiative:"Org architecture mapped against 2030",     owner:"Terry Kiruki",    keyResult:"Documented by end of Year 1 Q1",
    activities:[{id:"p3-1-1",label:"Review current org chart and roles"},{id:"p3-1-2",label:"Map required capabilities for 2030 vision"},{id:"p3-1-3",label:"Identify structural gaps and overlaps"},{id:"p3-1-4",label:"Draft future architecture proposal"},{id:"p3-1-5",label:"Review and sign off with leadership"}]},

  // Q2
  { id:"p1-7",  quarter:"Q2",  pillar:"P1", initiative:"Hero Index v1 operationalised",            owner:"Tonny Njeru",     keyResult:"Baseline + endline tools live by Q2 Year 1",
    activities:[{id:"p1-7-1",label:"Define all 5 dimensions of the Hero Index"},{id:"p1-7-2",label:"Develop baseline measurement tools"},{id:"p1-7-3",label:"Develop endline measurement tools"},{id:"p1-7-4",label:"Test tools with a sample cohort"},{id:"p1-7-5",label:"Refine tools based on pilot feedback"},{id:"p1-7-6",label:"Launch live tracking system"}]},
  { id:"p1-8",  quarter:"Q2",  pillar:"P1", initiative:"Depth threshold per pathway",              owner:"Tonny / Terry",   keyResult:"Thresholds agreed by Q2 Year 1",
    activities:[{id:"p1-8-1",label:"Review all existing programme pathways"},{id:"p1-8-2",label:"Draft threshold criteria for each pathway"},{id:"p1-8-3",label:"Consult with delivery team on thresholds"},{id:"p1-8-4",label:"Thresholds agreed and documented"},{id:"p1-8-5",label:"Communicate thresholds to relevant teams"}]},
  { id:"p2-4",  quarter:"Q2",  pillar:"P2", initiative:"Cost per participant calculated",          owner:"Cynthia / Philip", keyResult:"Cost model complete by end of Year 1 Q2",
    activities:[{id:"p2-4-1",label:"Gather all programme cost data (staff, materials, venue)"},{id:"p2-4-2",label:"Build cost model spreadsheet template"},{id:"p2-4-3",label:"Calculate cost per participant per pathway"},{id:"p2-4-4",label:"Validate figures with Cynthia & Philip"},{id:"p2-4-5",label:"Document and present final cost model"}]},
  { id:"p2-5",  quarter:"Q2",  pillar:"P2", initiative:"Scale scenarios developed",                owner:"Cynthia / Terry", keyResult:"3 scenarios approved by end of Year 1 Q2",
    activities:[{id:"p2-5-1",label:"Define scenario parameters and assumptions"},{id:"p2-5-2",label:"Develop conservative growth scenario"},{id:"p2-5-3",label:"Develop moderate growth scenario"},{id:"p2-5-4",label:"Develop optimistic growth scenario"},{id:"p2-5-5",label:"Scenarios reviewed and approved by Terry"}]},
  { id:"p2-9",  quarter:"Q2",  pillar:"P2", initiative:"Go/no-go qualification framework",         owner:"Terry / Steve",   keyResult:"Used in all expansion decisions from Year 1 Q2",
    activities:[{id:"p2-9-1",label:"Map current expansion decision process"},{id:"p2-9-2",label:"Draft qualification criteria and scoring"},{id:"p2-9-3",label:"Review with Terry & Steve"},{id:"p2-9-4",label:"Document framework"},{id:"p2-9-5",label:"Test on one real expansion decision"}]},
  { id:"p3-2",  quarter:"Q2",  pillar:"P3", initiative:"Communications Lead hired",                owner:"Terry / Steve",   keyResult:"Role filled by end of Year 1 Q1–Q2",
    activities:[{id:"p3-2-1",label:"Draft and approve job description"},{id:"p3-2-2",label:"Post role on relevant platforms"},{id:"p3-2-3",label:"Shortlist top candidates"},{id:"p3-2-4",label:"Conduct interviews"},{id:"p3-2-5",label:"Make offer and confirm hire"}]},
  { id:"p3-3",  quarter:"Q2",  pillar:"P3", initiative:"People Strategy developed",                owner:"Terry Kiruki",    keyResult:"Strategy live by end of Q2 Year 1",
    activities:[{id:"p3-3-1",label:"Conduct staff needs and culture assessment"},{id:"p3-3-2",label:"Draft People Strategy framework"},{id:"p3-3-3",label:"Consult with team leads and staff"},{id:"p3-3-4",label:"Finalise strategy document"},{id:"p3-3-5",label:"Approved by leadership and made live"}]},
  { id:"p3-4",  quarter:"Q2",  pillar:"P3", initiative:"Trainer development pathway defined",      owner:"Anna Navua",      keyResult:"Pathway documented by end of Year 1 Q2",
    activities:[{id:"p3-4-1",label:"Map current trainer skill levels and gaps"},{id:"p3-4-2",label:"Define pathway stages and milestones"},{id:"p3-4-3",label:"Link pathway to LMS requirements"},{id:"p3-4-4",label:"Document full trainer development pathway"},{id:"p3-4-5",label:"Review and sign off with Anna"}]},
  { id:"p3-8",  quarter:"Q2",  pillar:"P3", initiative:"Live the Work standard defined",           owner:"Terry / Leadership", keyResult:"Documented by end of Year 1 Q2",
    activities:[{id:"p3-8-1",label:"Define key behaviours aligned to EL values"},{id:"p3-8-2",label:"Draft 'Live the Work' standard document"},{id:"p3-8-3",label:"Consult with staff and leadership"},{id:"p3-8-4",label:"Finalise and formally approve standard"},{id:"p3-8-5",label:"Distribute to all staff"}]},
  { id:"p3-9",  quarter:"Q2",  pillar:"P3", initiative:"Org health check mechanism",               owner:"Terry / Boniface", keyResult:"Operational from Year 1 Q2",
    activities:[{id:"p3-9-1",label:"Research existing health check approaches"},{id:"p3-9-2",label:"Design EL-specific health check tool"},{id:"p3-9-3",label:"Pilot with one team"},{id:"p3-9-4",label:"Refine based on pilot feedback"},{id:"p3-9-5",label:"Make operational organisation-wide"}]},
  { id:"p4-1",  quarter:"Q2",  pillar:"P4", initiative:"Communications Strategy",                  owner:"Comms Lead / Terry", keyResult:"Live by end of Q2 Year 1",
    activities:[{id:"p4-1-1",label:"Audit current comms channels and gaps"},{id:"p4-1-2",label:"Define target audiences and key messages"},{id:"p4-1-3",label:"Draft strategy document"},{id:"p4-1-4",label:"Review with Terry and leadership"},{id:"p4-1-5",label:"Finalise, approve and publish"}]},
  { id:"p4-2",  quarter:"Q2",  pillar:"P4", initiative:"Funder Navigation Map",                   owner:"Comms Lead / CEO", keyResult:"Live by end of Q2 Year 1",
    activities:[{id:"p4-2-1",label:"Research and map the funder landscape"},{id:"p4-2-2",label:"Align funders to EL's four pillars"},{id:"p4-2-3",label:"Draft navigation document"},{id:"p4-2-4",label:"Review with Comms Lead & CEO"},{id:"p4-2-5",label:"Publish and share with team"}]},
  { id:"p4-6",  quarter:"Q2",  pillar:"P4", initiative:"Agency-first narrative framework",        owner:"Comms Lead",       keyResult:"In use across all external comms by Q2 Year 1",
    activities:[{id:"p4-6-1",label:"Define and document 'agency-first' principles"},{id:"p4-6-2",label:"Draft narrative framework document"},{id:"p4-6-3",label:"Test with key stakeholders"},{id:"p4-6-4",label:"Revise and finalise framework"},{id:"p4-6-5",label:"Brief and train all external comms team"}]},

  // Q3
  { id:"p2-3",  quarter:"Q3",  pillar:"P2", initiative:"EL profiled on 3+ funder databases",      owner:"Comms Lead",       keyResult:"3+ profiles active by end of Year 1 Q3",
    activities:[{id:"p2-3-1",label:"Identify top 5 relevant funder databases"},{id:"p2-3-2",label:"Create / update profile on Database 1"},{id:"p2-3-3",label:"Create / update profile on Database 2"},{id:"p2-3-4",label:"Create / update profile on Database 3"},{id:"p2-3-5",label:"Share database access with team"}]},
  { id:"p2-7",  quarter:"Q3",  pillar:"P2", initiative:"Trainer LMS v1 launched",                  owner:"Anna / Frankline", keyResult:"LMS operational by end of Year 1 Q3–Q4",
    activities:[{id:"p2-7-1",label:"Define LMS requirements and features"},{id:"p2-7-2",label:"Select and procure LMS platform"},{id:"p2-7-3",label:"Set up LMS structure and categories"},{id:"p2-7-4",label:"Upload initial training content"},{id:"p2-7-5",label:"Pilot test with 3–5 trainers"},{id:"p2-7-6",label:"Full launch to all trainers"}]},
  { id:"p4-7",  quarter:"Q3",  pillar:"P4", initiative:"Digital presence: website, SEO, platforms",owner:"Comms Lead / Gloria", keyResult:"3+ platforms active by end of Q3 Year 1",
    activities:[{id:"p4-7-1",label:"Audit and update existing website"},{id:"p4-7-2",label:"Implement basic SEO improvements"},{id:"p4-7-3",label:"Launch and optimise LinkedIn page"},{id:"p4-7-4",label:"Launch second social platform"},{id:"p4-7-5",label:"Develop content calendar"},{id:"p4-7-6",label:"Active content live on 3+ platforms"}]},

  // End Year 1
  { id:"p1-1",  quarter:"EY1", pillar:"P1", initiative:"Maintain direct delivery — primary lab",   owner:"Anna / Peter",    keyResult:"Min 4,000 participants/yr",
    activities:[{id:"p1-1-1",label:"Plan and confirm Q1 cohort delivery"},{id:"p1-1-2",label:"Deliver Q1 cohort successfully"},{id:"p1-1-3",label:"Plan and confirm Q2 cohort delivery"},{id:"p1-1-4",label:"Deliver Q2 cohort successfully"},{id:"p1-1-5",label:"Deliver Q3 & Q4 cohorts"},{id:"p1-1-6",label:"Reach 4,000+ total participants milestone"}]},
  { id:"p1-2",  quarter:"EY1", pillar:"P1", initiative:"Trainer Academy v1 launched",              owner:"Anna Navua",      keyResult:"10 certified trainers by end of Year 1",
    activities:[{id:"p1-2-1",label:"Define Trainer Academy curriculum"},{id:"p1-2-2",label:"Recruit trainer candidates (10+ applicants)"},{id:"p1-2-3",label:"Run Training of Trainers (ToT) programme"},{id:"p1-2-4",label:"Assess all candidates"},{id:"p1-2-5",label:"Certify 10 trainers"}]},
  { id:"p1-3",  quarter:"EY1", pillar:"P1", initiative:"Durability tracking system",               owner:"Tonny Njeru",     keyResult:"6m / 12m / 3yr tracking live from Year 1",
    activities:[{id:"p1-3-1",label:"Design durability tracking framework"},{id:"p1-3-2",label:"Build 6-month follow-up tool"},{id:"p1-3-3",label:"Build 12-month follow-up tool"},{id:"p1-3-4",label:"Build 3-year follow-up tool"},{id:"p1-3-5",label:"Pilot with first programme cohort"},{id:"p1-3-6",label:"System live across all pathways"}]},
  { id:"p1-4",  quarter:"EY1", pillar:"P1", initiative:"Partner Embedding Rubric",                 owner:"Wangui Kimaru",   keyResult:"Applied to 100% of new partners from Year 1",
    activities:[{id:"p1-4-1",label:"Define rubric dimensions and scoring criteria"},{id:"p1-4-2",label:"Draft rubric assessment tool"},{id:"p1-4-3",label:"Pilot with one existing partner"},{id:"p1-4-4",label:"Refine and document final rubric"},{id:"p1-4-5",label:"Applied to first new partner"}]},
  { id:"p1-5",  quarter:"EY1", pillar:"P1", initiative:"5 embedding partners onboarded",           owner:"Wangui Kimaru",   keyResult:"5 partners active by end of Year 1",
    activities:[{id:"p1-5-1",label:"Identify and approach potential partners"},{id:"p1-5-2",label:"Apply Partner Embedding Rubric to candidates"},{id:"p1-5-3",label:"Onboard Partner 1"},{id:"p1-5-4",label:"Onboard Partners 2–3"},{id:"p1-5-5",label:"Onboard Partners 4–5"}]},
  { id:"p1-6",  quarter:"EY1", pillar:"P1", initiative:"Federated pathway Version 1",              owner:"Terry / Wangui",  keyResult:"Piloted in 2 locations by end of Year 2",
    activities:[{id:"p1-6-1",label:"Design federated pathway model"},{id:"p1-6-2",label:"Identify 2 pilot locations"},{id:"p1-6-3",label:"Prepare locations for pilot"},{id:"p1-6-4",label:"Run pilot in Location 1"},{id:"p1-6-5",label:"Run pilot in Location 2"},{id:"p1-6-6",label:"Evaluate and document learnings"}]},
  { id:"p1-11", quarter:"EY1", pillar:"P1", initiative:"MEL system digitised",                     owner:"Tonny Njeru",     keyResult:"≥80% data completeness by end of Year 1",
    activities:[{id:"p1-11-1",label:"Assess current MEL tools and gaps"},{id:"p1-11-2",label:"Select digital MEL platform"},{id:"p1-11-3",label:"Build all data collection forms"},{id:"p1-11-4",label:"Train team on new system"},{id:"p1-11-5",label:"Go live with digital system"},{id:"p1-11-6",label:"Achieve ≥80% data completeness"}]},
  { id:"p1-12", quarter:"EY1", pillar:"P1", initiative:"Annual Impact Report",                     owner:"Tonny / Comms Lead", keyResult:"Published annually from Year 2",
    activities:[{id:"p1-12-1",label:"Collect all data and programme evidence"},{id:"p1-12-2",label:"Draft report structure and outline"},{id:"p1-12-3",label:"Write report content"},{id:"p1-12-4",label:"Design and produce report"},{id:"p1-12-5",label:"Publish and distribute to stakeholders"}]},
  { id:"p2-1",  quarter:"EY1", pillar:"P2", initiative:"Fundraising pipeline: 3+ multi-year funders", owner:"Terry / Steve", keyResult:"1 new multi-year funder by end of Year 2",
    activities:[{id:"p2-1-1",label:"Map current and lapsed funder relationships"},{id:"p2-1-2",label:"Identify 3+ multi-year funder targets"},{id:"p2-1-3",label:"Make initial approaches and introductions"},{id:"p2-1-4",label:"Submit at least 1 full proposal"},{id:"p2-1-5",label:"Secure 1 new multi-year funder commitment"}]},
  { id:"p2-2",  quarter:"EY1", pillar:"P2", initiative:"Funder-ready evidence pack",              owner:"Comms Lead / Tonny", keyResult:"Live and updated annually",
    activities:[{id:"p2-2-1",label:"Audit existing evidence and materials"},{id:"p2-2-2",label:"Draft evidence pack structure"},{id:"p2-2-3",label:"Compile key data and case studies"},{id:"p2-2-4",label:"Design and produce evidence pack"},{id:"p2-2-5",label:"Pack live and shared with funders"}]},
  { id:"p2-10", quarter:"EY1", pillar:"P2", initiative:"Board skills matrix reviewed",            owner:"Steve / Board",   keyResult:"UK/Global finance gap addressed by end of Year 2",
    activities:[{id:"p2-10-1",label:"Review current board skills matrix"},{id:"p2-10-2",label:"Identify key skills gaps (especially finance)"},{id:"p2-10-3",label:"Develop board recruitment criteria"},{id:"p2-10-4",label:"Approach prospective board members"},{id:"p2-10-5",label:"New board member with finance skills recruited"}]},
  { id:"p3-5",  quarter:"EY1", pillar:"P3", initiative:"100% trainers recertified annually",      owner:"Anna Navua",      keyResult:"Lapse = review before next delivery · From Year 2",
    activities:[{id:"p3-5-1",label:"Define recertification standards and criteria"},{id:"p3-5-2",label:"Build recertification assessment process"},{id:"p3-5-3",label:"Notify all trainers of requirements"},{id:"p3-5-4",label:"Run first recertification cycle"},{id:"p3-5-5",label:"100% of trainers recertified"}]},
  { id:"p3-6",  quarter:"EY1", pillar:"P3", initiative:"Quarterly trainer community convenings",  owner:"Anna Navua",      keyResult:"4 per year from Year 1 Q3",
    activities:[{id:"p3-6-1",label:"Design convening format and agenda template"},{id:"p3-6-2",label:"Plan and run Q3 convening"},{id:"p3-6-3",label:"Collect feedback and improve"},{id:"p3-6-4",label:"Plan and run Q4 convening"}]},
  { id:"p3-7",  quarter:"EY1", pillar:"P3", initiative:"Immersive onboarding for all staff",      owner:"Terry Kiruki",    keyResult:"100% onboarded, grounded in cultural principles",
    activities:[{id:"p3-7-1",label:"Define onboarding principles aligned to EL culture"},{id:"p3-7-2",label:"Design immersive onboarding programme"},{id:"p3-7-3",label:"Run first onboarding cohort"},{id:"p3-7-4",label:"Collect and act on feedback"},{id:"p3-7-5",label:"100% of staff complete onboarding"}]},
  { id:"p3-10", quarter:"EY1", pillar:"P3", initiative:"Succession plans for Country Lead & CEO", owner:"Steve / Terry",   keyResult:"Plans documented by end of Year 2",
    activities:[{id:"p3-10-1",label:"Identify key roles needing succession plans"},{id:"p3-10-2",label:"Assess internal succession candidates"},{id:"p3-10-3",label:"Draft Country Lead succession plan"},{id:"p3-10-4",label:"Draft CEO succession plan"},{id:"p3-10-5",label:"Plans reviewed and approved"}]},
  { id:"p3-11", quarter:"EY1", pillar:"P3", initiative:"Burnout monitoring for multi-function roles", owner:"Terry Kiruki", keyResult:"Reviewed quarterly · Ongoing",
    activities:[{id:"p3-11-1",label:"Define burnout risk indicators for multi-function roles"},{id:"p3-11-2",label:"Design quarterly monitoring check-in process"},{id:"p3-11-3",label:"Run Q2 check-in review"},{id:"p3-11-4",label:"Run Q3 check-in review"},{id:"p3-11-5",label:"Run Q4 check-in review"}]},
  { id:"p4-3",  quarter:"EY1", pillar:"P4", initiative:"Sector Presence Calendar",               owner:"Comms Lead",      keyResult:"Operational from Year 1",
    activities:[{id:"p4-3-1",label:"Map all relevant sector events and conferences"},{id:"p4-3-2",label:"Draft annual sector presence calendar"},{id:"p4-3-3",label:"Submit to attend or speak at 2–3 events"},{id:"p4-3-4",label:"Confirmed presence at 2–3 events"},{id:"p4-3-5",label:"Calendar operational and maintained"}]},
  { id:"p4-4",  quarter:"EY1", pillar:"P4", initiative:"Evidence base consolidated",             owner:"Tonny / Comms Lead", keyResult:"3–5 case studies by end of Year 2",
    activities:[{id:"p4-4-1",label:"Audit all existing programme evidence"},{id:"p4-4-2",label:"Develop 1–2 detailed case studies"},{id:"p4-4-3",label:"Develop 2–3 additional case studies"},{id:"p4-4-4",label:"Review and validate all case studies"},{id:"p4-4-5",label:"Publish and make evidence accessible"}]},
  { id:"p4-5",  quarter:"EY1", pillar:"P4", initiative:"EL at 2–3 sector convenings/year",       owner:"Terry / Steve",   keyResult:"2–3 per year from Year 1",
    activities:[{id:"p4-5-1",label:"Identify 3–5 target sector convenings"},{id:"p4-5-2",label:"Submit to participate or speak"},{id:"p4-5-3",label:"Confirm presence at 1 event"},{id:"p4-5-4",label:"Attend and represent EL at 2–3 events"}]},
  { id:"p4-8",  quarter:"EY1", pillar:"P4", initiative:"Storytelling: 1 story + 1 piece per quarter", owner:"Comms Lead / Gloria", keyResult:"8 outputs per year from Q2 Year 1",
    activities:[{id:"p4-8-1",label:"Develop Q2 story + 1 supporting piece"},{id:"p4-8-2",label:"Develop Q3 story + 1 supporting piece"},{id:"p4-8-3",label:"Develop Q4 story + 1 supporting piece"},{id:"p4-8-4",label:"Archive and track all outputs"},{id:"p4-8-5",label:"8+ total outputs achieved for Year 1"}]},
  { id:"p4-9",  quarter:"EY1", pillar:"P4", initiative:"Coalition: 3–5 aligned orgs",            owner:"Terry / Steve",   keyResult:"Relationships documented · Active from Year 1",
    activities:[{id:"p4-9-1",label:"Identify 5+ aligned organisations"},{id:"p4-9-2",label:"Make initial contact with 3 organisations"},{id:"p4-9-3",label:"Document and formalise relationships"},{id:"p4-9-4",label:"Establish ongoing collaboration with 3–5 orgs"},{id:"p4-9-5",label:"Coalition formally documented and active"}]},
];

const STORAGE_KEY = "el_scoreboard_v6";

function getPct(id, completedActivities, total) {
  return total > 0 ? Math.round(((completedActivities[id] || []).length / total) * 100) : 0;
}

// ── StatusBadge ───────────────────────────────────────────────────────────────
function StatusBadge({ statusKey, small }) {
  const s = getStatusInfo(statusKey);
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", gap:"5px",
      background:s.bg, color:s.text, border:`1.5px solid ${s.border}`,
      borderRadius:"20px", padding:small ? "3px 9px" : "5px 12px",
      fontSize:small ? "10px" : "11px", fontWeight:"700",
      fontFamily:"'DM Sans', sans-serif", whiteSpace:"nowrap", flexShrink:0,
    }}>
      <span style={{ width:small?"6px":"7px", height:small?"6px":"7px", borderRadius:"50%", background:s.dot, display:"inline-block", flexShrink:0 }} />
      {s.label}
    </span>
  );
}

// ── DeadlineChip ──────────────────────────────────────────────────────────────
function DeadlineChip({ deadline, isDefault }) {
  if (!deadline) return null;
  const days    = daysUntil(deadline);
  const fmt     = new Date(deadline).toLocaleDateString("en-GB", { day:"numeric", month:"short" });
  const isPast  = days !== null && days < 0;
  const urgent  = days !== null && days >= 0 && days <= 10;
  // Default (quarter-end) deadlines render subtly; custom deadlines render with urgency colours
  const color   = isDefault ? "#9A7A5A" : isPast ? "#D32F2F" : urgent ? "#E8A000" : EL.greyText;
  const bg      = isDefault ? "#F0E6D8" : isPast ? "#FDECEA" : urgent ? "#FFF5DC" : EL.grey;
  const label   = isDefault ? `Q end: ${fmt}` : isPast ? `${fmt} · Overdue` : `${fmt} · ${days}d left`;
  return (
    <span style={{ display:"inline-flex", alignItems:"center", gap:"4px", background:bg, color, borderRadius:"6px", padding:"2px 8px", fontSize:"10px", fontWeight:isDefault ? "500" : "700", opacity:isDefault ? 0.85 : 1 }}>
      📅 {label}
    </span>
  );
}

// ── NamePrompt ────────────────────────────────────────────────────────────────
function NamePrompt({ onConfirm }) {
  const [name, setName] = useState("");
  return (
    <div style={{ position:"fixed", inset:0, zIndex:300, background:"rgba(26,13,5,0.9)", display:"flex", alignItems:"center", justifyContent:"center", padding:"24px" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse at 60% 40%, rgba(224,122,26,0.18) 0%, transparent 60%)" }} />
      <div style={{ background:EL.white, borderRadius:"18px", padding:"28px 24px", width:"100%", maxWidth:"340px", position:"relative", boxShadow:"0 8px 40px rgba(0,0,0,0.4)" }}>
        <div style={{ textAlign:"center", marginBottom:"22px" }}>
          <img src={EL_LOGO} alt="EL" style={{ height:"38px", margin:"0 auto 14px", display:"block" }} />
          <div style={{ fontSize:"18px", fontWeight:"700", color:EL.dark, marginBottom:"6px", fontFamily:"'Playfair Display', serif" }}>Welcome to the Scoreboard</div>
          <div style={{ fontSize:"12px", color:EL.greyText, lineHeight:1.6 }}>Enter your name so your progress is tracked and attributed correctly across all initiatives.</div>
        </div>
        <input
          autoFocus value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === "Enter" && name.trim() && onConfirm(name.trim())}
          placeholder="e.g. Tonny Njeru"
          style={{ width:"100%", border:`1.5px solid ${EL.cardBorder}`, borderRadius:"10px", padding:"11px 14px", fontSize:"14px", fontFamily:"'DM Sans', sans-serif", color:EL.dark, background:EL.greyLight, outline:"none", marginBottom:"12px" }}
        />
        <button
          onClick={() => name.trim() && onConfirm(name.trim())}
          style={{ width:"100%", padding:"12px", background:name.trim() ? EL.dark : EL.greyMid, color:name.trim() ? EL.amberLight : EL.greyText, border:"none", borderRadius:"10px", fontSize:"13px", fontWeight:"700", fontFamily:"'DM Sans', sans-serif", cursor:name.trim() ? "pointer" : "default", transition:"all 0.2s" }}
        >Enter Scoreboard →</button>
        <div style={{ fontSize:"10px", color:"#bbb", textAlign:"center", marginTop:"10px" }}>Your name is saved locally on this device</div>
      </div>
    </div>
  );
}

// ── ActivityDialog ────────────────────────────────────────────────────────────
function ActivityDialog({ initiative, completedActivities, deadline, onToggle, onDeadline, onClose, history, quarterEnd }) {
  const [tab, setTab] = useState("activities");
  const total     = initiative.activities.length;
  const doneCount = completedActivities.length;
  const pct       = total > 0 ? Math.round((doneCount / total) * 100) : 0;
  const statusKey = calcStatus(pct, deadline);
  const s         = getStatusInfo(statusKey);
  const pm        = PM[initiative.pillar];
  const histItems = (history || []).filter(e => e.initiativeId === initiative.id);
  const days      = deadline ? daysUntil(deadline) : null;

  return (
    <div style={{ position:"fixed", inset:0, zIndex:200, background:"rgba(26,13,5,0.82)", display:"flex", alignItems:"flex-end" }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ background:EL.cream, borderRadius:"20px 20px 0 0", width:"100%", maxHeight:"93vh", overflow:"hidden", display:"flex", flexDirection:"column", boxShadow:"0 -8px 40px rgba(0,0,0,0.35)" }}>

        {/* Header */}
        <div style={{ background:EL.dark, padding:"16px 16px 14px", position:"relative", overflow:"hidden", flexShrink:0 }}>
          <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse at 90% 50%, rgba(224,122,26,0.22) 0%, transparent 60%)" }} />
          <div style={{ position:"relative" }}>
            <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"8px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"6px", flexWrap:"wrap", flex:1, minWidth:0 }}>
                <span style={{ background:pm.bg, color:pm.color, border:`1.5px solid ${pm.color}`, borderRadius:"6px", padding:"2px 10px", fontSize:"9px", fontWeight:"800", letterSpacing:"0.5px", whiteSpace:"nowrap" }}>{initiative.pillar} · {pm.name}</span>
                <StatusBadge statusKey={statusKey} small />
              </div>
              <button onClick={onClose} style={{ background:"rgba(255,255,255,0.15)", border:"none", borderRadius:"50%", width:"28px", height:"28px", color:EL.white, fontSize:"13px", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginLeft:"8px" }}>✕</button>
            </div>
            <div style={{ fontSize:"15px", fontWeight:"700", color:EL.white, lineHeight:1.3, marginBottom:"5px" }}>{initiative.initiative}</div>
            <div style={{ fontSize:"11px", color:"rgba(255,255,255,0.6)", marginBottom:"10px" }}>👤 {initiative.owner}</div>
            <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
              <div style={{ flex:1, background:"rgba(255,255,255,0.15)", borderRadius:"6px", height:"6px", overflow:"hidden" }}>
                <div style={{ width:`${pct}%`, background:s.dot, height:"100%", borderRadius:"6px", transition:"width 0.3s" }} />
              </div>
              <span style={{ fontSize:"16px", fontWeight:"800", color:s.dot, minWidth:"38px", textAlign:"right" }}>{pct}%</span>
            </div>
            <div style={{ fontSize:"10px", color:"rgba(255,255,255,0.45)", marginTop:"4px" }}>{doneCount} of {total} activities completed</div>
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display:"flex", background:EL.white, borderBottom:`1px solid ${EL.cardBorder}`, flexShrink:0 }}>
          {[
            { t:"activities", label:"✓ Activities" },
            { t:"keyresult",  label:"🎯 Key Result" },
            { t:"deadline",   label:"📅 Deadline"  },
            { t:"history",    label:`📋 Log${histItems.length > 0 ? ` (${histItems.length})` : ""}` },
          ].map(({ t, label }) => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex:1, padding:"9px 2px",
              background:tab===t ? EL.greyLight : "transparent",
              color:tab===t ? EL.dark : EL.greyText,
              border:"none", borderBottom:`2.5px solid ${tab===t ? EL.amber : "transparent"}`,
              fontSize:"10px", fontWeight:tab===t ? "700" : "500",
              cursor:"pointer", fontFamily:"'DM Sans', sans-serif",
            }}>{label}</button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex:1, overflowY:"auto", padding:"14px" }}>

          {/* Activities tab */}
          {tab === "activities" && (
            <div>
              <div style={{ fontSize:"11px", color:EL.greyText, marginBottom:"12px", lineHeight:1.6, background:EL.white, border:`1px solid ${EL.cardBorder}`, borderRadius:"10px", padding:"10px 12px" }}>
                Tap each activity you have already completed. Progress and status update automatically.
              </div>
              {initiative.activities.map((act, idx) => {
                const done = completedActivities.includes(act.id);
                return (
                  <div key={act.id} onClick={() => onToggle(act.id)} style={{
                    display:"flex", alignItems:"flex-start", gap:"12px",
                    padding:"12px 14px", marginBottom:"8px",
                    background:done ? "#D4F5E2" : EL.white,
                    border:`1.5px solid ${done ? "#6DD9A0" : EL.cardBorder}`,
                    borderLeft:`4px solid ${done ? "#27AE60" : EL.greyMid}`,
                    borderRadius:"10px", cursor:"pointer", transition:"all 0.15s",
                  }}>
                    <div style={{
                      width:"22px", height:"22px", borderRadius:"50%", flexShrink:0,
                      border:`2px solid ${done ? "#27AE60" : "#ccc"}`,
                      background:done ? "#27AE60" : EL.white,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      marginTop:"1px", transition:"all 0.15s",
                    }}>
                      {done && <span style={{ color:"white", fontSize:"12px", fontWeight:"700" }}>✓</span>}
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:"10px", color:done ? "#27AE60" : "#ccc", fontWeight:"700", marginBottom:"2px", letterSpacing:"0.5px" }}>STEP {idx + 1}</div>
                      <div style={{ fontSize:"13px", color:done ? "#145E33" : EL.dark, fontWeight:done ? "600" : "400", lineHeight:1.4 }}>{act.label}</div>
                    </div>
                  </div>
                );
              })}
              <div style={{ marginTop:"14px", background:EL.white, border:`1px solid ${EL.cardBorder}`, borderRadius:"10px", padding:"12px" }}>
                <div style={{ fontSize:"10px", fontWeight:"700", color:EL.mid, letterSpacing:"0.8px", marginBottom:"8px" }}>HOW STATUS IS CALCULATED</div>
                {[["0%","Not Started","#9E9E9E"],["1–40%","Started","#4A90D9"],["41–79%","On Track","#27AE60"],["80–99%","Nearly Done","#f39200"],["100%","Completed","#27AE60"]].map(([r,l,d]) => (
                  <div key={r} style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"5px" }}>
                    <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:d, flexShrink:0 }} />
                    <span style={{ fontSize:"10px", color:EL.greyText }}><strong>{r}</strong> → {l}</span>
                  </div>
                ))}
                <div style={{ fontSize:"10px", color:"#aaa", marginTop:"6px", lineHeight:1.5 }}>⚡ Within 10 days of deadline: &lt;40% → Off Track · &lt;79% → At Risk</div>
              </div>
            </div>
          )}

          {/* Key Result tab */}
          {tab === "keyresult" && (
            <div>
              <div style={{ background:EL.white, border:`1px solid ${EL.cardBorder}`, borderLeft:`4px solid ${pm.color}`, borderRadius:"12px", padding:"16px", marginBottom:"14px" }}>
                <div style={{ fontSize:"10px", fontWeight:"700", color:EL.mid, letterSpacing:"0.8px", marginBottom:"8px" }}>KEY RESULT</div>
                <div style={{ fontSize:"14px", color:EL.dark, fontWeight:"600", lineHeight:1.6 }}>🎯 {initiative.keyResult}</div>
              </div>
              <div style={{ background:EL.white, border:`1px solid ${EL.cardBorder}`, borderRadius:"12px", padding:"16px" }}>
                <div style={{ fontSize:"10px", fontWeight:"700", color:EL.mid, letterSpacing:"0.8px", marginBottom:"8px" }}>CURRENT PROGRESS</div>
                <div style={{ fontSize:"32px", fontWeight:"800", color:s.dot, lineHeight:1 }}>{pct}%</div>
                <div style={{ fontSize:"12px", color:EL.greyText, marginTop:"4px", marginBottom:"10px" }}>{doneCount} of {total} activities complete</div>
                <div style={{ background:EL.greyLight, borderRadius:"6px", height:"8px", overflow:"hidden" }}>
                  <div style={{ width:`${pct}%`, background:s.dot, height:"100%", borderRadius:"6px", transition:"width 0.3s" }} />
                </div>
                <div style={{ marginTop:"10px" }}><StatusBadge statusKey={statusKey} /></div>
              </div>
            </div>
          )}

          {/* Deadline tab */}
          {tab === "deadline" && (
            <div>
              <div style={{ fontSize:"11px", color:EL.greyText, marginBottom:"12px", lineHeight:1.6, background:EL.white, border:`1px solid ${EL.cardBorder}`, borderRadius:"10px", padding:"10px 12px" }}>
                Set a target deadline for this initiative. Deadlines affect your status automatically if progress is low.
              </div>
              <div style={{ background:EL.white, border:`1px solid ${EL.cardBorder}`, borderRadius:"12px", padding:"14px", marginBottom:"12px" }}>
                <label style={{ fontSize:"11px", fontWeight:"700", color:EL.dark, display:"block", marginBottom:"8px", letterSpacing:"0.5px" }}>TARGET DEADLINE</label>
                <input
                  type="date" max={quarterEnd} value={deadline || ""}
                  onChange={e => onDeadline(e.target.value)}
                  style={{ width:"100%", background:EL.grey, border:`1.5px solid ${EL.cardBorder}`, borderRadius:"8px", color:EL.dark, padding:"10px 12px", fontSize:"15px", fontFamily:"'DM Sans', sans-serif", outline:"none" }}
                />
              </div>
              {deadline && days !== null && (
                <div style={{
                  background:days < 0 ? "#FDECEA" : days <= 10 ? "#FFF5DC" : EL.greyLight,
                  border:`1px solid ${days < 0 ? "#F5AAAA" : days <= 10 ? "#FFD97A" : EL.cardBorder}`,
                  borderRadius:"10px", padding:"12px", marginBottom:"12px",
                }}>
                  <div style={{ fontSize:"13px", fontWeight:"600", color:days < 0 ? "#D32F2F" : days <= 10 ? "#E8A000" : EL.dark }}>
                    {days < 0 ? `⚠️ ${Math.abs(days)} days overdue` : `${days} days remaining`}
                  </div>
                  <div style={{ fontSize:"11px", color:EL.greyText, marginTop:"4px" }}>
                    Due: {new Date(deadline).toLocaleDateString("en-GB", { weekday:"long", day:"numeric", month:"long", year:"numeric" })}
                  </div>
                </div>
              )}
              <div style={{ background:EL.white, border:`1px solid ${EL.cardBorder}`, borderRadius:"10px", padding:"12px" }}>
                <div style={{ fontSize:"10px", color:"#aaa", lineHeight:1.6 }}>⚡ Below 40% within 10 days of deadline → <strong>Off Track</strong>. Below 79% → <strong>At Risk</strong>.</div>
              </div>
            </div>
          )}

          {/* History tab */}
          {tab === "history" && (
            <div>
              {histItems.length === 0 ? (
                <div style={{ fontSize:"11px", color:"#bbb", fontStyle:"italic", padding:"8px 0" }}>No changes recorded yet. Updates will appear here.</div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
                  {[...histItems].sort((a,b) => new Date(b.ts) - new Date(a.ts)).map(e => (
                    <div key={e.id} style={{ background:EL.greyLight, border:`1px solid ${EL.cardBorder}`, borderRadius:"8px", padding:"10px 12px", display:"flex", alignItems:"flex-start", gap:"8px" }}>
                      <div style={{ width:"28px", height:"28px", borderRadius:"50%", background:EL.dark, color:EL.amberLight, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px", fontWeight:"700", flexShrink:0 }}>
                        {e.user.trim().charAt(0).toUpperCase()}
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:"12px", fontWeight:"600", color:EL.dark, marginBottom:"2px" }}>
                          {e.user}<span style={{ fontWeight:"400", color:EL.greyText }}> {e.field === "deadline" ? "updated deadline" : "updated progress"}</span>
                        </div>
                        <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"3px" }}>
                          <span style={{ fontSize:"11px", background:"#fee2e2", color:"#991b1b", borderRadius:"4px", padding:"1px 7px", fontWeight:"600" }}>{e.field==="progress" ? `${e.from}%` : e.from||"—"}</span>
                          <span style={{ fontSize:"10px", color:"#aaa" }}>→</span>
                          <span style={{ fontSize:"11px", background:"#dcfce7", color:"#166534", borderRadius:"4px", padding:"1px 7px", fontWeight:"600" }}>{e.field==="progress" ? `${e.to}%` : e.to||"—"}</span>
                        </div>
                        <div style={{ fontSize:"10px", color:"#aaa" }}>{formatTs(e.ts)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Done button */}
        <div style={{ padding:"12px 16px 20px", flexShrink:0, background:EL.white, borderTop:`1px solid ${EL.cardBorder}` }}>
          <button onClick={onClose} style={{ width:"100%", padding:"13px", background:EL.dark, color:EL.amberLight, border:"none", borderRadius:"12px", fontSize:"14px", fontWeight:"700", fontFamily:"'DM Sans', sans-serif", cursor:"pointer" }}>
            Done ✓
          </button>
        </div>
      </div>
    </div>
  );
}

// ── InitiativeCard ────────────────────────────────────────────────────────────
function InitiativeCard({ initiative, completedActivities, deadline, onOpen }) {
  const total           = initiative.activities.length;
  const doneCount       = (completedActivities[initiative.id] || []).length;
  const pct             = total > 0 ? Math.round((doneCount / total) * 100) : 0;
  const effectiveDeadline = deadline || QUARTER_DEADLINES[initiative.quarter] || "";
  const statusKey       = calcStatus(pct, effectiveDeadline);
  const s               = getStatusInfo(statusKey);
  const pm              = PM[initiative.pillar];

  return (
    <div onClick={onOpen} style={{
      background:EL.white, border:`1px solid ${EL.cardBorder}`, borderLeft:`4px solid ${s.dot}`,
      borderRadius:"12px", marginBottom:"9px", boxShadow:"0 1px 4px rgba(0,0,0,0.05)", cursor:"pointer",
    }}>
      <div style={{ padding:"13px 14px" }}>
        <div style={{ display:"flex", alignItems:"flex-start", gap:"10px" }}>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ marginBottom:"5px" }}>
              <span style={{ background:pm.bg, color:pm.color, border:`1px solid ${pm.color}33`, borderRadius:"5px", padding:"1px 8px", fontSize:"9px", fontWeight:"700", letterSpacing:"0.5px" }}>
                {initiative.pillar}
              </span>
            </div>
            <div style={{ fontSize:"13px", fontWeight:"600", color:EL.dark, lineHeight:1.4, marginBottom:"5px" }}>{initiative.initiative}</div>
            <div style={{ display:"flex", alignItems:"center", gap:"6px", flexWrap:"wrap", marginBottom:"8px" }}>
              <span style={{ fontSize:"11px", color:EL.greyText }}>👤 {initiative.owner}</span>
              <DeadlineChip deadline={effectiveDeadline} isDefault={!deadline} />
            </div>
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"4px" }}>
                <span style={{ fontSize:"10px", color:EL.greyText, fontWeight:"600" }}>{doneCount}/{total} activities</span>
                <span style={{ fontSize:"12px", fontWeight:"800", color:s.dot }}>{pct}%</span>
              </div>
              <div style={{ background:EL.greyLight, borderRadius:"6px", height:"6px", overflow:"hidden" }}>
                <div style={{ width:`${pct}%`, background:s.dot, height:"100%", borderRadius:"6px", transition:"width 0.3s" }} />
              </div>
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"6px", flexShrink:0, paddingLeft:"6px" }}>
            <StatusBadge statusKey={statusKey} small />
            <span style={{ fontSize:"9px", color:EL.greyMid, whiteSpace:"nowrap" }}>Tap to update →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [activeQ, setActiveQ]         = useState("Q2"); // Q1 initiatives moved to Q2
  const [activities, setActivities]   = useState({});
  const [deadlines, setDeadlines]     = useState({});
  const [history, setHistory]         = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [showPrompt, setShowPrompt]   = useState(false);
  const [openDialog, setOpenDialog]   = useState(null);

  useEffect(() => {
    try {
      const d = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (d.activities) setActivities(d.activities);
      if (d.deadlines)  setDeadlines(d.deadlines);
      if (d.history)    setHistory(d.history);
      const u = localStorage.getItem("el_scoreboard_user");
      if (u) setCurrentUser(u); else setShowPrompt(true);
    } catch(e) { setShowPrompt(true); }
  }, []);

  const persist = (act, dl, hist) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ activities:act, deadlines:dl, history:hist })); } catch(e) {}
  };

  const confirmUser = name => {
    localStorage.setItem("el_scoreboard_user", name);
    setCurrentUser(name);
    setShowPrompt(false);
  };

  const mkEntry = (initiativeId, field, from, to) => ({
    id: Date.now() + Math.random(),
    user: currentUser || "Unknown",
    initiativeId,
    initiativeName: ALL_INITIATIVES.find(i => i.id === initiativeId)?.initiative || initiativeId,
    field, from: String(from), to: String(to),
    ts: new Date().toISOString(),
  });

  const toggleActivity = (initId, actId) => {
    const cur    = activities[initId] || [];
    const isDone = cur.includes(actId);
    const upd    = isDone ? cur.filter(id => id !== actId) : [...cur, actId];
    const total  = ALL_INITIATIVES.find(i => i.id === initId)?.activities.length || 1;
    const oldPct = Math.round((cur.length / total) * 100);
    const newPct = Math.round((upd.length / total) * 100);
    const newAct = { ...activities, [initId]: upd };
    const hist   = String(oldPct) !== String(newPct) ? [...history, mkEntry(initId, "progress", oldPct, newPct)] : history;
    setActivities(newAct); setHistory(hist);
    persist(newAct, deadlines, hist);
  };

  const setDeadline = (initId, val) => {
    const old = deadlines[initId] || "";
    if (old === val) return;
    const newDL = { ...deadlines, [initId]: val };
    const hist  = [...history, mkEntry(initId, "deadline", old, val)];
    setDeadlines(newDL); setHistory(hist);
    persist(activities, newDL, hist);
  };

  const currentQ   = QUARTERS.find(q => q.id === activeQ);
  const qItems     = ALL_INITIATIVES.filter(i => i.quarter === activeQ);
  const dialogInit = openDialog ? ALL_INITIATIVES.find(i => i.id === openDialog) : null;

  const qStats = qItems.reduce((acc, i) => {
    const sk = calcStatus(getPct(i.id, activities, i.activities.length), deadlines[i.id]);
    acc[sk] = (acc[sk] || 0) + 1;
    return acc;
  }, {});
  const qDone = qStats["completed"] || 0;

  const totalDone = ALL_INITIATIVES.filter(i =>
    calcStatus(getPct(i.id, activities, i.activities.length), deadlines[i.id]) === "completed"
  ).length;

  return (
    <div style={{ minHeight:"100vh", background:EL.cream, fontFamily:"'DM Sans', sans-serif", color:EL.dark, maxWidth:"600px", margin:"0 auto" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        button:active { opacity:0.85; transform:scale(0.97); }
        ::-webkit-scrollbar { display:none; }
        input[type="date"]:focus { outline:none; }
      `}</style>

      {showPrompt && <NamePrompt onConfirm={confirmUser} />}

      {dialogInit && (
        <ActivityDialog
          initiative={dialogInit}
          completedActivities={activities[dialogInit.id] || []}
          deadline={deadlines[dialogInit.id] || ""}
          onToggle={actId => toggleActivity(dialogInit.id, actId)}
          onDeadline={v => setDeadline(dialogInit.id, v)}
          onClose={() => setOpenDialog(null)}
          history={history}
          currentUser={currentUser}
          quarterEnd={currentQ?.end || "2026-12-31"}
        />
      )}

      {/* ── HEADER ── */}
      <div style={{ background:EL.dark, padding:"16px 16px 12px", position:"sticky", top:0, zIndex:50, boxShadow:`0 3px 16px ${EL.brownDeep}88`, overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:`radial-gradient(ellipse at 90% 50%, rgba(224,122,26,0.22) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(122,16,64,0.18) 0%, transparent 50%)` }} />
        <div style={{ position:"relative" }}>
          {/* Logo row */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"12px" }}>
            <div>
              <img src={EL_LOGO} alt="EL" style={{ height:"30px", display:"block", marginBottom:"5px", mixBlendMode:"screen" }} />
              <div style={{ fontSize:"9px", color:"rgba(255,255,255,0.5)", fontWeight:"700", letterSpacing:"2px" }}>STRATEGY SCOREBOARD · 2026–2027</div>
            </div>
            {currentUser && (
              <div style={{ display:"flex", alignItems:"center", gap:"5px", background:"rgba(255,255,255,0.12)", borderRadius:"20px", padding:"3px 10px 3px 5px", border:"1px solid rgba(255,255,255,0.15)", flexShrink:0 }}>
                <div style={{ width:"20px", height:"20px", borderRadius:"50%", background:EL.amber, color:EL.dark, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"10px", fontWeight:"700", flexShrink:0 }}>
                  {currentUser.charAt(0).toUpperCase()}
                </div>
                <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.8)", fontWeight:"600", whiteSpace:"nowrap" }}>{currentUser.split(" ")[0]}</span>
                <button onClick={() => { localStorage.removeItem("el_scoreboard_user"); setCurrentUser(null); setShowPrompt(true); }}
                  style={{ background:"none", border:"none", color:"rgba(255,255,255,0.4)", fontSize:"10px", cursor:"pointer", padding:"0 0 0 2px" }}>✕</button>
              </div>
            )}
          </div>

          {/* Overall progress strip */}
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"12px" }}>
            <div style={{ background:"rgba(255,255,255,0.08)", borderRadius:"8px", padding:"4px 10px", display:"flex", alignItems:"center", gap:"6px" }}>
              <span style={{ fontSize:"15px", fontWeight:"800", color:EL.amberLight }}>{totalDone}</span>
              <span style={{ fontSize:"9px", color:"rgba(255,255,255,0.4)", fontWeight:"600", letterSpacing:"0.5px" }}>/{ALL_INITIATIVES.length} DONE</span>
            </div>
            <div style={{ flex:1, background:"rgba(255,255,255,0.12)", borderRadius:"4px", height:"4px", overflow:"hidden" }}>
              <div style={{ width:`${(totalDone/ALL_INITIATIVES.length)*100}%`, background:EL.amberLight, height:"100%", borderRadius:"4px", transition:"width 0.4s" }} />
            </div>
          </div>

          {/* Quarter tabs */}
          <div style={{ display:"flex", gap:"4px", background:"rgba(0,0,0,0.25)", borderRadius:"10px", padding:"4px" }}>
            {QUARTERS.map(q => (
              <button key={q.id} onClick={() => setActiveQ(q.id)} style={{
                flex:1, padding:"7px 2px",
                background:activeQ===q.id ? EL.white : "transparent",
                color:activeQ===q.id ? EL.dark : "rgba(255,255,255,0.6)",
                border:`1.5px solid ${activeQ===q.id ? q.color : "rgba(255,255,255,0.12)"}`,
                borderRadius:"7px", fontSize:"11px", fontWeight:activeQ===q.id ? "700" : "500",
                cursor:"pointer", fontFamily:"'DM Sans', sans-serif",
                boxShadow:activeQ===q.id ? `0 1px 8px ${q.color}55` : "none",
                transition:"all 0.15s",
              }}>{q.label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ── QUARTER CONTENT ── */}
      <div style={{ padding:"14px 16px 0" }}>

        {/* Quarter hero banner */}
        <div style={{ background:EL.dark, borderRadius:"16px", padding:"18px", marginBottom:"14px", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:`radial-gradient(ellipse at 90% 40%, ${currentQ.color}40 0%, transparent 55%)` }} />
          <div style={{ position:"relative" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div>
                <div style={{ fontSize:"14px", fontWeight:"700", color:EL.white, marginBottom:"2px" }}>
                  {activeQ === "EY1" ? "End of Year 1" : `Quarter ${activeQ.slice(1)}`}
                </div>
                <div style={{ fontSize:"11px", color:"rgba(255,255,255,0.5)" }}>{currentQ.period}</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <span style={{ fontSize:"34px", fontWeight:"800", color:EL.amberLight, lineHeight:1 }}>{qDone}</span>
                <span style={{ fontSize:"14px", color:"rgba(255,255,255,0.3)", fontWeight:"600" }}>/{qItems.length}</span>
                <div style={{ fontSize:"9px", color:"rgba(255,255,255,0.35)", letterSpacing:"0.8px", fontWeight:"600" }}>DONE</div>
              </div>
            </div>
            <div style={{ background:"rgba(255,255,255,0.12)", borderRadius:"6px", height:"5px", overflow:"hidden", marginTop:"12px", marginBottom:"10px" }}>
              <div style={{ width:`${qItems.length > 0 ? (qDone/qItems.length)*100 : 0}%`, background:EL.amberLight, height:"100%", borderRadius:"6px", transition:"width 0.4s" }} />
            </div>
            <div style={{ display:"flex", gap:"5px", flexWrap:"wrap" }}>
              {Object.entries(STATUS_MAP).map(([key, sm]) => {
                const c = qStats[key] || 0;
                if (c === 0) return null;
                return (
                  <span key={key} style={{ background:sm.bg, color:sm.text, border:`1px solid ${sm.border}`, borderRadius:"20px", padding:"2px 8px", fontSize:"9px", fontWeight:"700" }}>
                    <span style={{ display:"inline-block", width:"5px", height:"5px", borderRadius:"50%", background:sm.dot, marginRight:"4px", verticalAlign:"middle" }} />{c} {sm.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Initiatives grouped by pillar */}
        {["P1","P2","P3","P4"].map(pillar => {
          const items = qItems.filter(i => i.pillar === pillar);
          if (items.length === 0) return null;
          const pm   = PM[pillar];
          const done = items.filter(i => calcStatus(getPct(i.id, activities, i.activities.length), deadlines[i.id]) === "completed").length;
          return (
            <div key={pillar} style={{ marginBottom:"6px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"8px", marginTop:"4px" }}>
                <div style={{ width:"3px", height:"22px", background:pm.color, borderRadius:"2px", flexShrink:0 }} />
                <span style={{ fontSize:"13px", fontWeight:"700", color:EL.dark }}>{pm.icon} {pm.name}</span>
                <div style={{ flex:1, height:"1px", background:EL.greyMid }} />
                <span style={{ fontSize:"10px", color:pm.color, fontWeight:"700", background:pm.bg, borderRadius:"10px", padding:"2px 8px", border:`1px solid ${pm.color}33` }}>
                  {done}/{items.length}
                </span>
              </div>
              {items.map(initiative => (
                <InitiativeCard
                  key={initiative.id}
                  initiative={initiative}
                  completedActivities={activities}
                  deadline={deadlines[initiative.id] || ""}
                  onOpen={() => setOpenDialog(initiative.id)}
                />
              ))}
            </div>
          );
        })}

        {qItems.length === 0 && (
          <div style={{ textAlign:"center", padding:"40px 20px", color:EL.greyText }}>
            <div style={{ fontSize:"32px", marginBottom:"8px" }}>📋</div>
            <div style={{ fontSize:"14px", fontWeight:"600" }}>No initiatives assigned to this quarter</div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ padding:"20px 16px 32px", textAlign:"center", borderTop:`1px solid ${EL.cardBorder}`, background:EL.white, marginTop:"16px" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"6px", marginBottom:"6px" }}>
          <div style={{ width:"24px", height:"2px", background:EL.pink, borderRadius:"2px" }} />
          <div style={{ width:"24px", height:"2px", background:EL.orange, borderRadius:"2px" }} />
        </div>
        <div style={{ fontSize:"11px", color:EL.greyText }}>Scoreboard owner: <strong style={{ color:EL.amber }}>Tonny Njeru</strong></div>
        <div style={{ fontSize:"10px", color:"#bbb", marginTop:"3px" }}>Tap any initiative to check off activities · EL Strategy 2026–2030</div>
      </div>
    </div>
  );
}
