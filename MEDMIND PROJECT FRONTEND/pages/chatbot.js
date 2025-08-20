function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (userInput.value.trim() === "") return;

  // Display user message
  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.innerText = userInput.value;
  chatBox.appendChild(userMessage);

  // Bot reply (dummy static response)
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerText = "I'm just a demo bot. Let's talk soon!";
    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);

  userInput.value = "";
}
