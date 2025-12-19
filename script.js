function showDetails(site) {
  let title = document.getElementById("detail-title");
  let text = document.getElementById("detail-text");
  let link = document.getElementById("detail-link");

  if (site === "chatgpt") {
    title.innerText = "ChatGPT";
    text.innerText =
      "ChatGPT is an AI tool that helps with writing, studying, coding, explaining topics, and generating ideas. It is useful for students, freelancers, and professionals.";
    link.innerText = "Visit ChatGPT";
    link.href = "https://chat.openai.com";
  }

  if (site === "google") {
    title.innerText = "Google";
    text.innerText =
      "Google is the world's most popular search engine. It helps you find information, images, news, and websites instantly.";
    link.innerText = "Visit Google";
    link.href = "https://google.com";
  }

  if (site === "youtube") {
    title.innerText = "YouTube";
    text.innerText =
      "YouTube allows users to watch and upload videos. It is great for learning skills, tutorials, and entertainment.";
    link.innerText = "Visit YouTube";
    link.href = "https://youtube.com";
  }

  if (site === "github") {
    title.innerText = "GitHub";
    text.innerText =
      "GitHub is a platform for developers to store code, collaborate, and publish websites using GitHub Pages.";
    link.innerText = "Visit GitHub";
    link.href = "https://github.com";
  }
}
