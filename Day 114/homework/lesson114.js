async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        displayData(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(post) {
    const postContainer = document.getElementById('post');
    postContainer.innerHTML = `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `;
}

fetchData();