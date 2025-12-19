function openModal(site) {
  const content = {
    chatgpt: `
      <h2>ChatGPT</h2>
      <p><strong>What it is:</strong> ChatGPT is an AI-powered assistant that helps students write essays, understand topics, solve problems, and generate ideas.</p>
      <p><strong>Why useful:</strong> Perfect for studying, research, coding help, brainstorming, and learning faster.</p>
      <p><strong>Best for:</strong> Students, writers, programmers, freelancers.</p>
    `,
    w3: `
      <h2>W3Schools</h2>
      <p><strong>What it is:</strong> A complete learning platform for web development.</p>
      <p><strong>Why useful:</strong> Beginner-friendly tutorials with examples.</p>
      <p><strong>Best for:</strong> Learning HTML, CSS, JavaScript, Python.</p>
    `,
    youtube: `
      <h2>YouTube</h2>
      <p><strong>What it is:</strong> Video platform with free educational content.</p>
      <p><strong>Why useful:</strong> Learn visually from experts.</p>
      <p><strong>Best for:</strong> Any subject, anytime.</p>
    `,
    github: `
      <h2>GitHub</h2>
      <p><strong>What it is:</strong> Platform to host and share code.</p>
      <p><strong>Why useful:</strong> Essential for developers and students.</p>
      <p><strong>Best for:</strong> Coding projects and collaboration.</p>
    `
  };

  document.getElementById("modal-text").innerHTML = content[site];
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
