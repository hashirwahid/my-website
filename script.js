document.addEventListener("DOMContentLoaded", () => {

const websites = [
  {name:"ChatGPT", url:"https://chat.openai.com", desc:"AI assistant for study & writing"},
  {name:"Khan Academy", url:"https://khanacademy.org", desc:"Free education platform"},
  {name:"Coursera", url:"https://coursera.org", desc:"University courses"},
  {name:"edX", url:"https://edx.org", desc:"Harvard & MIT courses"},
  {name:"YouTube", url:"https://youtube.com", desc:"Free learning videos"},
  {name:"W3Schools", url:"https://w3schools.com", desc:"Web tutorials"},
  {name:"freeCodeCamp", url:"https://freecodecamp.org", desc:"Learn coding free"},
  {name:"Codecademy", url:"https://codecademy.com", desc:"Interactive coding"},
  {name:"MIT OpenCourseWare", url:"https://ocw.mit.edu", desc:"MIT courses"},
  {name:"Google Scholar", url:"https://scholar.google.com", desc:"Academic research"},
  {name:"Canva", url:"https://canva.com", desc:"Design tool"},
  {name:"Grammarly", url:"https://grammarly.com", desc:"Writing assistant"},
  {name:"Notion", url:"https://notion.so", desc:"Notes & planning"},
  {name:"Quizlet", url:"https://quizlet.com", desc:"Flashcards"},
  {name:"Duolingo", url:"https://duolingo.com", desc:"Learn languages"},
  {name:"TED-Ed", url:"https://ed.ted.com", desc:"Educational videos"},
  {name:"Open Library", url:"https://openlibrary.org", desc:"Free books"},
  {name:"Project Gutenberg", url:"https://gutenberg.org", desc:"Classic ebooks"},
  {name:"Overleaf", url:"https://overleaf.com", desc:"LaTeX editor"},
  {name:"Wolfram Alpha", url:"https://wolframalpha.com", desc:"Math engine"},
  {name:"GeeksForGeeks", url:"https://geeksforgeeks.org", desc:"Programming help"},
  {name:"Stack Overflow", url:"https://stackoverflow.com", desc:"Coding Q&A"},
  {name:"GitHub", url:"https://github.com", desc:"Code hosting"},
  {name:"Replit", url:"https://replit.com", desc:"Online IDE"},
  {name:"MDN Web Docs", url:"https://developer.mozilla.org", desc:"Web documentation"},
  {name:"Unsplash", url:"https://unsplash.com", desc:"Free photos"},
  {name:"Pexels", url:"https://pexels.com", desc:"Stock images"},
  {name:"TinyPNG", url:"https://tinypng.com", desc:"Image compression"},
  {name:"Photopea", url:"https://photopea.com", desc:"Online Photoshop"},
  {name:"PDFDrive", url:"https://pdfdrive.com", desc:"Free PDFs"},
  {name:"Smallpdf", url:"https://smallpdf.com", desc:"PDF tools"},
  {name:"Mathway", url:"https://mathway.com", desc:"Math solver"},
  {name:"Desmos", url:"https://desmos.com", desc:"Graphing calculator"},
  {name:"LibreTexts", url:"https://libretexts.org", desc:"Open textbooks"},
  {name:"FutureLearn", url:"https://futurelearn.com", desc:"Free courses"},
  {name:"Academic Earth", url:"https://academicearth.org", desc:"University lectures"},
  {name:"StudySmarter", url:"https://studysmarter.us", desc:"Study planner"},
  {name:"Zotero", url:"https://zotero.org", desc:"Research manager"},
  {name:"Mendeley", url:"https://mendeley.com", desc:"Reference manager"},
  {name:"Skillshare", url:"https://skillshare.com", desc:"Creative skills"},
  {name:"Udemy Free", url:"https://udemy.com", desc:"Free courses"},
  {name:"Slidesgo", url:"https://slidesgo.com", desc:"Presentation templates"},
  {name:"Remove.bg", url:"https://remove.bg", desc:"Remove image background"},
  {name:"Tinkercad", url:"https://tinkercad.com", desc:"3D learning"}
];

const cards = document.getElementById("cards");
const details = document.getElementById("details");

function render(list) {
  cards.innerHTML = "";
  list.forEach(site => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="icon">🌐</div>
      <h3>${site.name}</h3>
      <p>${site.desc}</p>
    `;
    card.onclick = () => showDetails(site);
    cards.appendChild(card);
  });
}

function showDetails(site) {
  document.getElementById("detail-title").innerText = site.name;
  document.getElementById("detail-desc").innerText = site.desc;
  document.getElementById("detail-link").href = site.url;
  details.style.display = "block";
  details.scrollIntoView({behavior:"smooth"});
}

window.closeDetails = () => {
  details.style.display = "none";
};

document.getElementById("searchInput").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  render(websites.filter(w => w.name.toLowerCase().includes(q)));
});

render(websites);

});
