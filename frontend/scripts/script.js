const addArticleBtn = $('#addnews-btn');
const articleForm = $('#addnews-form');

const cardsContainer = $('#cards-container');

axios.defaults.baseURL = 'http://localhost/news-website/backend';

const getArticles = async () => {
  try {
    const response = await axios.get('/getnews.php');
    return response.data.news;
  } catch (error) {
    console.error(error);
  }
};

const addArticle = async (headline, text, author) => {
  const data = new FormData();
  data.append('headline', headline);
  data.append('text', text);
  data.append('author', author);

  try {
    await axios.post('/addnews.php', data);
  } catch (error) {
    console.error(error);
  }
};

$('#addnews-btn').click(function (event) {
  event.preventDefault();

  var headline = $('#headline').val();
  var newsText = $('#articleText').val();
  var author = $('#author').val();

  addArticle(headline, newsText, author);

  window.location.href = '/frontend/index.html';
});

const populateArticleCard = (article) => {
  return `<div class="card flex center box-shadow off-white-bg">
            <p>${article.headline}</p>
            <p class="card-text">${article.text}</p>
            <p>${article.author} - ${article.date}</p>
        </div>`;
};

const populateArticleCards = (articles) => {
  cardsContainer.empty();
  $.each(articles, (index, article) => {
    cardsContainer.append(populateArticleCard(article));
  });
};

getArticles().then((articles) => {
  if (articles.length > 0) {
    console.log(articles);
    populateArticleCards(articles);
  }
});
