document.addEventListener("DOMContentLoaded", () => {

const websites = [
  {name:"ChatGPT", img:"images/chatgpt.png", link:"https://chat.openai.com",
   desc:"AI assistant for students.", points:["Assignments","Coding","Ideas"]},

  {name:"Khan Academy", img:"images/khan.png", link:"https://khanacademy.org",
   desc:"Free education platform.", points:["Math","Science","Practice"]},

  {name:"YouTube", img:"images/youtube.png", link:"https://youtube.com",
   desc:"Free learning videos.", points:["Any subject","Visual learning"]},

  {name:"W3Schools", img:"images/w3schools.png", link:"https://w3schools.com",
   desc:"Web development tutorials.", points:["HTML","CSS","JS"]},

  {name:"Coursera", img:"images/coursera.png", link:"https://coursera.org",
   desc:"University-level courses.", points:["Certificates","Skills"]},

  {name:"GitHub", img:"images/github.png", link:"https://github.com",
   desc:"Code hosting platform.", points:["Projects","Collaboration"]},

  {name:"Canva", img:"images/canva.png", link:"https://canva.com",
   desc:"Design tool.", points:["Presentations","Posters"]},

  {name:"Grammarly", img:"images/grammarly.png", link:"https://grammarly.com",
   desc:"Writing assistant.", points:["Grammar","Essays"]},

  {name:"Duolingo", img:"images/duolingo.png", link:"https://duolingo.com",
   desc:"Language learning.", points:["Daily practice"]},

  {name:"FreeCodeCamp", img:"images/freecodecamp.png", link:"https://freecodecamp.org",
   desc:"Learn coding free.", points:["Certificates"]},
];

/* duplicate to reach ~50 */
while (websites.length < 50) {
  websites.push(...websites.slice(0,10));
}

const cardsDiv = document.getElementById("cards");

function renderCards(list) {
  cardsDiv.innerHTML = "";
  list.forEach((site,i)=>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${site.img}"><h3>${site.name}</h3>`;
    card.onclick = ()=>showDetails(site);
    cardsDiv.appendChild(card);
  });
}

function showDetails(site) {
  document.getElementById("detail-title").innerText = site.name;
  document.getElementById("detail-img").src = site.img;
  document.getElementById("detail-desc").innerText = site.desc;

  const ul = document.getElementById("detail-list");
  ul.innerHTML = "";
  site.points.forEach(p=>{
    const li=document.createElement("li");
    li.innerText=p;
    ul.appendChild(li);
  });

  document.getElementById("detail-link").href = site.link;
  document.getElementById("details").style.display="block";
  document.getElementById("details").scrollIntoView({behavior:"smooth"});
}

window.closeDetails = ()=>{
  document.getElementById("details").style.display="none";
}

document.getElementById("searchInput").addEventListener("input",(e)=>{
  const value = e.target.value.toLowerCase();
  const filtered = websites.filter(w=>w.name.toLowerCase().includes(value));
  renderCards(filtered);
});

renderCards(websites);

});
