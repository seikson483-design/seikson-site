/* =========================================================
   SEIKSON — content data
   ערכו כאן את התוכן של האתר. אין צורך לגעת ב-HTML או ב-CSS.
   ========================================================= */

/* ---- כישורים ---- */
const SKILLS = [
  { icon: "🎮", name: "גיימינג" },
  { icon: "🎥", name: "יצירת סרטונים" },
  { icon: "✂️", name: "עריכת סרטונים" },
  { icon: "📡", name: "שידורים חיים" },
  { icon: "🖼️", name: "יצירת תמונות ממוזערות" },
  { icon: "💡", name: "יצירת רעיונות לתוכן" },
  { icon: "📱", name: "Shorts" },
  { icon: "👥", name: "בניית קהילה" },
];

/* ---- הדרך שלי (Timeline) ----
   isGoal: true מסמן את היעד הסופי (מקבל עיצוב מודגש) */
const JOURNEY = [
  { icon: "🚀", title: "התחלת הערוץ", desc: "הצעד הראשון של SEIKSON ביוטיוב." },
  { icon: "📹", title: "העלאת הסרטונים הראשונים", desc: "הסרטונים הראשונים עולים לאוויר." },
  { icon: "🔥", title: "סרטונים שהתחילו לקבל הרבה צפיות", desc: "התוכן מתחיל להגיע ליותר אנשים." },
  { icon: "👥", title: "בניית קהילה", desc: "קהילה אמיתית נבנית סביב הערוץ." },
  { icon: "🎯", title: "היעד הבא", desc: "ממשיכים לצמוח, וידאו אחרי וידאו." },
  { icon: "🏆", title: "100,000 מנויים", desc: "היעד הגדול של המסע.", isGoal: true },
];

/* ---- סרטונים ----
   הוסיפו כאן אובייקט חדש לכל סרטון. אין צורך לשנות כלום מעבר לזה.
   thumb: קישור לתמונה ממוזערת (אפשר להשתמש בקישור התמונה של יוטיוב,
   לדוגמה: https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg)
   url: קישור לסרטון ביוטיוב */
const VIDEOS = [
  {
    title: "כותרת הסרטון הראשון שלי",
    thumb: "",
    url: "https://www.youtube.com/@SEIKSON533",
  },
  {
    title: "כותרת הסרטון השני שלי",
    thumb: "",
    url: "https://www.youtube.com/@SEIKSON533",
  },
  {
    title: "כותרת הסרטון השלישי שלי",
    thumb: "",
    url: "https://www.youtube.com/@SEIKSON533",
  },
];

/* ---- משחקים ----
   פשוט הוסיפו שורה חדשה כדי להוסיף משחק. */
const GAMES = [
  { icon: "🎮", name: "Brawl Stars" },
  { icon: "🔥", name: "Fortnite" },
  { icon: "⚽", name: "FIFA" },
  { icon: "🧱", name: "Roblox" },
];

/* ---- לייב ----
   isLive: true/false — קובע אם מציגים "משדר עכשיו" או "אין לייב כרגע".
   כשמתחילים לשדר: שנו ל-true ועדכנו את הכותרת והקישור. */
const LIVE = {
  isLive: false,
  title: "עדיין אין לייב פעיל",
  desc: "עקבו כדי לא לפספס כשהלייב הבא יתחיל!",
  url: "https://www.youtube.com/@SEIKSON533",
};

/* =========================================================
   Rendering — אין צורך לגעת מכאן ולמטה
   ========================================================= */

function renderSkills() {
  const el = document.getElementById("skills-grid");
  el.innerHTML = SKILLS.map(s => `
    <div class="skill-card">
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
    </div>
  `).join("");
}

function renderTimeline() {
  const el = document.getElementById("timeline");
  el.innerHTML = JOURNEY.map(item => `
    <div class="timeline-item ${item.isGoal ? "is-goal" : ""}">
      <div class="timeline-dot">${item.icon}</div>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-desc">${item.desc}</p>
    </div>
  `).join("");
}

function renderVideos() {
  const el = document.getElementById("videos-grid");
  el.innerHTML = VIDEOS.map(v => `
    <div class="video-card">
      ${
        v.thumb
          ? `<img class="video-thumb" src="${v.thumb}" alt="${v.title}" loading="lazy">`
          : `<div class="video-thumb"></div>`
      }
      <div class="video-body">
        <h3 class="video-title">${v.title}</h3>
        <a class="video-watch" href="${v.url}" target="_blank" rel="noopener">▶ צפייה בסרטון</a>
      </div>
    </div>
  `).join("");
}

function renderGames() {
  const el = document.getElementById("games-grid");
  el.innerHTML = GAMES.map(g => `
    <div class="game-card">
      <div class="game-icon">${g.icon}</div>
      <div class="game-name">${g.name}</div>
    </div>
  `).join("");
}

function renderLive() {
  const el = document.getElementById("live-card");
  el.classList.toggle("live-offline", !LIVE.isLive);
  el.innerHTML = `
    <div>
      <span class="live-badge"><span class="live-dot"></span> ${LIVE.isLive ? "משדר עכשיו" : "לא בשידור"}</span>
      <h3 class="live-title">${LIVE.title}</h3>
      <p class="live-desc">${LIVE.desc}</p>
    </div>
    <a class="btn ${LIVE.isLive ? "btn-primary" : "btn-secondary"}" href="${LIVE.url}" target="_blank" rel="noopener">
      ${LIVE.isLive ? "לצפייה בלייב" : "לערוץ שלי"}
    </a>
  `;
}

renderSkills();
renderTimeline();
renderVideos();
renderGames();
renderLive();

document.getElementById("year").textContent = new Date().getFullYear();
