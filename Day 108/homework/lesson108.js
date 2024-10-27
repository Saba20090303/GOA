document.getElementById('searchBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const userInfoDiv = document.getElementById('userInfo');
    
    if (!username) {
        userInfoDiv.innerHTML = "<p>Please enter a username.</p>";
        userInfoDiv.style.display = 'block';
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            userInfoDiv.innerHTML = `
                <img src="${data.avatar_url}" alt="${data.login}" />
                <h2>${data.login}</h2>
                <p>${data.bio ? data.bio : 'No bio available'}</p>
                <p>Public Repositories: ${data.public_repos}</p>
                <p><a href="${data.html_url}" target="_blank">View Profile</a></p>
            `;
            userInfoDiv.style.display = 'block';
        })
        .catch(error => {
            userInfoDiv.innerHTML = `<p>${error.message}</p>`;
            userInfoDiv.style.display = 'block';
        });
});