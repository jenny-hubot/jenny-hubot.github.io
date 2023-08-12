document.addEventListener('DOMContentLoaded', function() {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // GPT-3 API configuration
    const apiKey = 'YOUR_GPT3_API_KEY'; // Replace with your GPT-3 API key
    const engine = 'davinci'; // GPT-3 engine

    sendButton.addEventListener('click', function() {
        const userMessage = userInput.value.trim();

        if (userMessage !== '') {
            displayMessage('user', userMessage);

            // Call GPT-3 API to generate response
            axios.post(`https://api.openai.com/v1/engines/${engine}/completions`, {
                prompt: userMessage,
                max_tokens: 50 // Limit response length
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            })
            .then(response => {
                const aiResponse = response.data.choices[0].text;
                displayMessage('chatbot', aiResponse);
            })
            .catch(error => {
                console.error('Error:', error);
            });

            userInput.value = '';
        }
    });

    function displayMessage(role, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbox ${role}-message`;
        messageDiv.textContent = message;
        chatbotMessages.appendChild(messageDiv);
    }
});
