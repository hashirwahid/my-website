document.addEventListener("DOMContentLoaded", () => {

  const websites = [
    {
      name: "ChatGPT",
      desc: "AI assistant for learning, writing & coding.",
      points: ["Homework help", "Essay writing", "Coding support"]
    },
    {
      name: "Khan Academy",
      desc: "Free education platform.",
      points: ["Math", "Science", "Practice exercises"]
    },
    {
      name: "W3Schools",
      desc: "Learn web development step by step.",
      points: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "YouTube",
      desc: "Free learning videos.",
      points: ["Any topic", "Visual learning"]
    },
    {
      name: "Coursera",
      desc: "University-level courses.",
      points: ["Certificates", "Career skills"]
    }
  ];

  const cardsDiv = document.getElementById("cards");
  const details = document.getElementById("details");

  if (!cardsDiv) {
    alert("Cards container not found!");
    return;
  }

  websites.forEach((site, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = site.name;
    div.onclick = () => showDetail(index);
    cardsDiv.appendChild(div);
  });

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

});
