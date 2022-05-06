(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded",() => {
        const news_fetch = async () => {
            let datas = await fetch('https://api.newscatcherapi.com/v2/search?q=mount kilimanjaro' ,{
                method: 'GET',
                headers: {
                    'x-api-key': 'dLeJVAkrV16Vwwaa430eHC1WwSWir37ZsjSIQwqnWB8' 
                }
            }).then(res => {
                return res.json()
            })
            .then(data => {
                display(data);
                return data;
            })
            return datas;
        }
        news_fetch()
        // let images = news_fetch().media;
        // let news = news_fetch().articals;
        // console.log(images)
        // console.log(news)
      const display = (news) => {
          console.log(news.articles);
          let n = document.querySelector('.news-collections');
          let div = document.createElement('div');
          div.classList.add('news');

      for (const article of news.articles) {
                    div.innerHTML = `
          <div class="news">
          <div class="news-img">
          <img src="${article.media}" alt="">
      </div>
      <div class="news-story">
          <div class="news-head">
              ${article.title}
          </div>
          <div class="news-sub-head">
              <h1>${article.excerpt}</h1>
          </div>
          <div class="news-body">
              <p>
                  ${article.summary}... <a href="" class="read-more">read more</a>
              </p>
          </div>
      </div>
      </div>`
      n.append(div)
      }
      }
    })
})()