document.getElementById('generateButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const emoji = document.getElementById('emoji').value;
    const funfact = document.getElementById('funfact').value;

    const bio = `Hey! I'm ${username} ${emoji}. Fun fact: ${funfact}. Let's connect!`;

    document.getElementById('bioDisplay').textContent = bio;
});