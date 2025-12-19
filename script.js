function openModal(type) {
  const modal = document.getElementById("modal");
  const text = document.getElementById("modal-text");

  const data = {
    chatgpt: `
      <h2>ChatGPT</h2>
      <p><b>What it is:</b> An AI tool that helps with writing, studying, coding, and idea generation.</p>
      <p><b>Why useful:</b> Saves time, explains topics simply, and boosts productivity.</p>
      <p><b>Best for:</b> Students, freelancers, programmers, writers.</p>
    `,
    w3: `
      <h2>W3Schools</h2>
      <p><b>What it is:</b> A beginner-friendly coding learning website.</p>
      <p><b>Why useful:</b> Easy tutorials with examples.</p>
      <p><b>Best for:</b> New programmers.</p>
    `,
    youtube: `
      <h2>YouTube</h2>
      <p><b>What it is:</b> Video platform with tutorials and courses.</p>
      <p><b>Why useful:</b> Visual learning.</p>
      <p><b>Best for:</b> Everyone.</p>
    `,
    github: `
      <h2>GitHub</h2>
      <p><b>What it is:</b> Code hosting and collaboration platform.</p>
      <p><b>Why useful:</b> Store projects and learn from others.</p>
      <p><b>Best for:</b> Developers & students.</p>
    `
  };

  text.innerHTML = data[type];
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
