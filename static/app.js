const form = document.querySelector("#workflow-form");
const button = document.querySelector("#submit-button");
const status = document.querySelector("#status");
const results = document.querySelector("#results");
const resultText = document.querySelector("#result-text");
const promptText = document.querySelector("#prompt-text");
const mode = document.querySelector("#mode");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.textContent = "Creating your workflow…";
  button.disabled = true;
  results.hidden = true;

  const payload = {
    role: document.querySelector("#role").value,
    outcome: document.querySelector("#outcome").value,
    brief: document.querySelector("#brief").value,
  };

  try {
    const response = await fetch("/api/workflow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "The workflow could not be created.");
    }

    resultText.textContent = data.result;
    promptText.textContent = data.prompt;
    mode.textContent = data.mode === "ai_generated"
      ? "Generated with your configured AI provider."
      : "Prompt-only mode: no AI provider is configured.";
    results.hidden = false;
    status.textContent = "Workflow ready.";
  } catch (error) {
    status.textContent = error.message || "Something went wrong.";
  } finally {
    button.disabled = false;
  }
});

document.querySelector("#copy-result").addEventListener("click", () => {
  navigator.clipboard.writeText(resultText.textContent);
});

document.querySelector("#copy-prompt").addEventListener("click", () => {
  navigator.clipboard.writeText(promptText.textContent);
});
