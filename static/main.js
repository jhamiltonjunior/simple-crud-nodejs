const article = document.querySelector('.enviar');
const getArticle = document.querySelector('[data-js="getArticle"]');


article.addEventListener('click', (event) => {
  // event.preventDefault();
  getArticle.textContent = tinyMCE.get('article').getContent();
});
