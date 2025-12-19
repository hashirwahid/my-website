document.addEventListener("DOMContentLoaded", () => {

const websites = [
  {name:"ChatGPT", url:"https://chat.openai.com", desc:"AI assistant for study & writing"},
  {name:"Khan Academy", url:"https://khanacademy.org", desc:"Free education for all"},
  {name:"Coursera", url:"https://coursera.org", desc:"University courses"},
  {name:"edX", url:"https://edx.org", desc:"Harvard & MIT courses"},
  {name:"YouTube", url:"https://youtube.com", desc:"Free learning videos"},
  {name:"W3Schools", url:"https://w3schools.com", desc:"Web development tutorials"},
  {name:"freeCodeCamp", url:"https://freecodecamp.org", desc:"Learn coding free"},
  {name:"Codecademy", url:"https://codecademy.com", desc:"Interactive coding"},
  {name:"MIT OpenCourseWare", url:"https://ocw.mit.edu", desc:"MIT free courses"},
  {name:"Google Scholar", url:"https://scholar.google.com", desc:"Academic research"},
  {name:"Canva", url:"https://canva.com", desc:"Design & presentations"},
  {name:"Grammarly", url:"https://grammarly.com", desc:"Writing assistant"},
  {name:"Notion", url:"https://notion.so", desc:"Notes & productivity"},
  {name:"Quizlet", url:"https://quizlet.com", desc:"Flashcards"},
  {name:"Duolingo", url:"https://duolingo.com", desc:"Language learning"},
  {name:"TED-Ed", url:"https://ed.ted.com", desc:"Educational videos"},
  {name:"Open Library", url:"https://openlibrary.org", desc:"Free books"},
  {name:"Project Gutenberg", url:"https://gutenberg.org", desc:"Classic ebooks"},
  {name:"Overleaf", url:"https://overleaf.com", desc:"LaTeX editor"},
  {name:"Wolfram Alpha", url:"https://wolframalpha.com", desc:"Math solver"},
  {name:"Coursera Labs", url:"https://www.coursera.org", desc:"Hands-on labs"},
  {name:"Skillshare", url:"https://skillshare.com", desc:"Creative skills"},
  {name:"Udemy Free", url:"https://udemy.com", desc:"Free courses"},
  {name:"Simplilearn", url:"https://simplilearn.com", desc:"Tech learning"},
  {name:"GeeksForGeeks", url:"https://geeksforgeeks.org", desc:"Programming help"},
  {name:"Stack Overflow", url:"https://stackoverflow.com", desc:"Coding Q&A"},
  {name:"GitHub", url:"https://github.com", desc:"Code hosting"},
  {name:"Replit", url:"https://replit.com", desc:"Online coding"},
  {name:"CodePen", url:"https://codepen.io", desc:"Frontend playground"},
  {name:"MDN Web Docs", url:"https://developer.mozilla.org", desc:"Web standards"},
  {name:"Slidesgo", url:"https://slidesgo.com", desc:"Presentation templates"},
  {name:"Pexels", url:"https://pexels.com", desc:"Free images"},
  {name:"Unsplash", url:"https://unsplash.com", desc:"Free photos"},
  {name:"Pixabay", url:"https://pixabay.com", desc:"Free media"},
  {name:"Remove.bg", url:"https://remove.bg", desc:"Remove backgrounds"},
  {name:"TinyPNG", url:"https://tinypng.com", desc:"Compress images"},
  {name:"Z-Library", url:"https://z-lib.org", desc:"Books & papers"},
  {name:"Academic Earth", url:"https://academicearth.org", desc:"University lectures"},
  {name:"StudySmarter", url:"https://studysmarter.us", desc:"Study planner"},
  {name:"FutureLearn", url:"https://futurelearn.com", desc:"Free courses"},
  {name:"LibreTexts", url:"https://libretexts.org", desc:"Open textbooks"},
  {name:"Mathway", url:"https://mathway.com", desc:"Math solver"},
  {name:"Desmos", url:"https://desmos.com", desc:"Graphing calculator"},
  {name:"Photopea", url:"https://photopea.com", desc:"Online Photoshop"},
  {name:"PDFDrive", url:"https://pdfdrive.com", desc:"Free PDFs"},
  {name:"Smallpdf", url:"https://smallpdf.com", desc:"PDF tools"},
  {name:"Tinkercad", url:"https://tinkercad.com", desc:"3D learning"}
];

const cards = document.getElementById("cards");

function logoURL(site) {
  return `https://logo.clearbit.com/${new URL(site.url).hostname}`;
}

function render(list) {
  cards.innerHTML = "";
  list.forEach(site => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${logoURL(site)}" onerror="this.src='https://via.placeholder.com/80?text=🌐'">
      <h3>${site.name}</h3>
      <p>${site.desc}</p>
    `;
    card.onclick = () => window.open(site.url, "_blank");
    cards.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  render(websites.filter(w => w.name.toLowerCase().includes(q)));
});

render(websites);

});
