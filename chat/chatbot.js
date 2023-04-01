import phrases from './phrases.js';

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

    let responseFound = false;
    for (let i = 0; i < phrases.length; i++) {
      if (phrases[i].input.includes(userInput.toLowerCase())) {
        message = phrases[i].output;
        responseFound = true;
        break;
      }
    }

    if (!responseFound) {
      message = "I'm sorry, I didn't understand that. Could you please rephrase your question?";
    }

    addBubble(message, 'bot');
    document.querySelector('input').value = '';
  });
}

window.onload = chatbot;
