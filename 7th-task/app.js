import { add, subtract, pi } from './math.js';
import { greet } from './greet.js';
import { capitalize } from './utlis.js';

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(pi);

console.log(greet(capitalize('ghoniem')));

const postsContainer = document.getElementById('posts');
const errorContainer = document.getElementById('error');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    if (!res.ok) throw new Error('Failed to fetch posts');
    console.log(res);
    return res.json();
  })
  .then(data => {
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      const title = document.createElement('h3');
      title.textContent = capitalize(post.title);
      const body = document.createElement('p');
      body.textContent = post.body.slice(0, 100) + '...';
      postElement.appendChild(title);
      postElement.appendChild(body);
      postElement.addEventListener('click', () => {
        modalContent.innerHTML = `<h2>${capitalize(post.title)}</h2><p>${
          post.body
        }</p>`;
        modal.style.display = 'block';
      });
      postsContainer.appendChild(postElement);
    });
  })
  .catch(err => {
    errorContainer.textContent = err.message;
  });

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
