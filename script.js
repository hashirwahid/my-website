function openAbout(type) {
  let title = document.getElementById("aboutTitle");
  let text = document.getElementById("aboutText");

  if (type === "chatgpt") {
    title.innerText = "ChatGPT";
    text.innerText =
      "ChatGPT is an AI tool that helps with writing, studying, coding, answering questions, and generating ideas. It is very useful for students and professionals.";
  }

  if (type === "w3") {
    title.innerText = "W3Schools";
    text.innerText =
      "W3Schools is a free learning website for HTML, CSS, JavaScript, and other programming languages with examples and practice.";
  }

  if (type === "canva") {
    title.innerText = "Canva";
    text.innerText =
      "Canva is an online design tool used to create posters, logos, presentations, and social media graphics easily.";
  }

  if (type === "removebg") {
    title.innerText = "Remove.bg";
    text.innerText =
      "Remove.bg uses AI to remove image backgrounds automatically. It is useful for designers and content creators.";
  }

  document.getElementById("aboutBox").style.display = "flex";
}

function closeAbout() {
  document.getElementById("aboutBox").style.display = "none";
}
