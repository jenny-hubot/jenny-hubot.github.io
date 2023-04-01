const chatbot = () => {
  let name = prompt("Hello! What's your name?");
  let message = `Nice to meet you, ${name}! How can I help you today?`;
  let conversation = document.querySelector('.conversation');

  const addBubble = (text, sender) => {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.classList.add(sender);
    bubble.innerHTML = `<p>${text}</p>`;
    conversation.appendChild(bubble);
  }

  addBubble(message, 'bot');

  document.querySelector('.btn').addEventListener('click', () => {
    let userInput = document.querySelector('input').value;
    addBubble(userInput, 'user');
    switch (userInput.toLowerCase()) {
      case "hi":
      case "hello":
        message = "Hi there! How can I assist you today?";
        break;
      case "how are you":
        message = "I'm just a computer program, so I'm always doing well. Thanks for asking!";
        break;
      case "what's your name":
        message = "My name is Chatbot!";
        break;
      case "what can you do":
        message = "I can answer questions, give advice, and chat with you. Just let me know what you need!";
        break;
      default:
        message = "I'm sorry, I didn't understand that. Could you please rephrase your question?";
    }
    addBubble(message, 'bot');
    document.querySelector('input').value = '';
  });
}

window.onload = chatbot;
