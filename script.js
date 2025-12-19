const websites = [
  {
    name: "ChatGPT",
    desc: "AI assistant for learning, writing & coding.",
    points: ["Homework help", "Essay writing", "Coding support"]
  },
  {
    name: "Khan Academy",
    desc: "Free education for everyone.",
    points: ["Math & science", "Practice exercises", "Video lessons"]
  },
  {
    name: "Coursera",
    desc: "Free university-level courses.",
    points: ["Certificates", "Top universities", "Career skills"]
  },
  {
    name: "edX",
    desc: "Online courses from Harvard & MIT.",
    points: ["Free learning", "Professional courses"]
  },
  {
    name: "W3Schools",
    desc: "Learn web development for free.",
    points: ["HTML, CSS, JS", "Beginner friendly"]
  },
  {
    name: "YouTube",
    desc: "Free video learning platform.",
    points: ["Any subject", "Learn visually"]
  },
  {
    name: "MIT OpenCourseWare",
    desc: "Free MIT courses.",
    points: ["Engineering", "Computer science"]
  },
  {
    name: "Canva",
    desc: "Design tool for students.",
    points: ["Presentations", "Posters", "Free templates"]
  },
  {
    name: "Grammarly",
    desc: "Improve your writing.",
    points: ["Grammar check", "Essay help"]
  },
  {
    name: "Google Scholar",
    desc: "Academic research search engine.",
    points: ["Research papers", "Citations"]
  },

  /* ---- 40 MORE (shortened list names) ---- */
  { name: "Quizlet", desc: "Flashcards & study sets.", points: ["Memorization", "Practice"] },
  { name: "Duolingo", desc: "Learn languages free.", points: ["Daily practice"] },
  { name: "Codecademy", desc: "Coding for beginners.", points: ["Interactive lessons"] },
  { name: "FreeCodeCamp", desc: "Learn coding free.", points: ["Certifications"] },
  { name: "TED-Ed", desc: "Educational videos.", points: ["Short lessons"] },
  { name: "Notion", desc: "Notes & organization.", points: ["Student planning"] },
  { name: "Google Docs", desc: "Free documents.", points: ["Collaboration"] },
  { name: "Slidesgo", desc: "Free presentation templates.", points: ["PowerPoint"] },
  { name: "Open Library", desc: "Free books.", points: ["Millions of books"] },
  { name: "Project Gutenberg", desc: "Free ebooks.", points: ["Classic books"] },

  /* continue up to ~50 */
];

// CREATE CARDS
const cardsDiv = document.getElementById("cards");
const details = document.getElementById("details");

websites.forEach((site, index) => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerText = site.name;
  div.onclick = () => showDetail(index);
  cardsDiv.appendChild(div);
});

// SHOW DETAILS
function showDetail(i) {
  document.getElementById("detail-title").innerText = websites[i].name;
  document.getElementById("detail-desc").innerText = websites[i].desc;

  const list = document.getElementById("detail-list");
  list.innerHTML = "";
  websites[i].points.forEach(p => {
    const li = document.createElement("li");
    li.innerText = p;
    list.appendChild(li);
  });

  details.style.display = "block";
  details.scrollIntoView({ behavior: "smooth" });
}
