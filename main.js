const postsList = document.getElementById('posts-list');

fetch('/posts.json')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3>${post.title}</h3>
        <p>Published on ${post.date}</p>
        <p>${post.summary}</p>
        <a href="${post.url}">Read more</a>
      `;
      postsList.appendChild(li);
    });
  })
  .catch(error => console.error(error));
