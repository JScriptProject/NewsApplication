const apiKey = '4429a964a30e4479b112965b18fec73e';

const searchInput = document.querySelector('#search');
const btn = document.querySelector('.submit-btn');
const newsTitle = document.querySelector('.news-title');
const newsInfo = document.querySelector('.news-info');
const newsImg = document.querySelector('.news-img');

let fetchNews = async()=>{
  const query = searchInput.value || 'latest';
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`

  try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.articles);

    newsTitle.textContent = data.articles[0].title;
    newsInfo.textContent = data.articles[0].description;
    newsImg.src = data.articles[0].urlToImage;
  }
  catch(error)
  {
    console.error('Error fetching the news', error);
    container.innerHTML=`<p> Error Fetching latest news, Please try again later`;

  }
}

btn.addEventListener("click", function(){
    fetchNews();
})