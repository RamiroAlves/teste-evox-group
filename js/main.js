const loaderContainer = document.querySelector(".loader");
const body = document.querySelector("#document");
const searchInput = document.querySelector("#search");

//let page = 1;

const url = `https://newsapi.org/v2/top-headlines?country=br&&apiKey=#############################`;
var req = new Request(url);

const options = {
  method: "Get",
  mode: "cors",
  cache: "default",
};

const addArticles = fetch(req, options)
  .then((response) => {
    response.json().then((data) => showData(data));
  })
  .catch((e) => console.log("Erro: " + e));

const showData = (result) => {
  //console.log(result);
  result.articles.forEach((article) => {
    titleNews = article.title
      ? `<h5 class="card-title px-2 pt-2 pb-0 text-center">${article.title}</h5>`
      : "";
    imgNews = article.urlToImage
      ? `<img class="card-img" alt="${article.urlToImage}>${article.urlToImage}</img>`
      : "";
    descriptionNews = article.description
      ? `<div>${article.description.substring(0, 120)}</div>`
      : "";
    articleNews = article.content
      ? `<div class="card-text text-center">${article.content.substring(
          0,
          200
        )}</div>`
      : "";
    authorNews = article.author ? `<h6>${article.author}</h6>` : "";
    dateNews = article.publishedAt.toLocaleString()
      ? `<h6>Data da publicação: ${(article.publishedAt = new Date(
          article.publishedAt
        ))}</h6>`
      : "";
    urlNews = article.url
      ? `<a href="${article.url}" target="_blank">${article.url}</a>`
      : "";

    let card = `
      <div class="container">
        <div class="row col-lg-12 col-md-8 col-sm-4">
            <div class="">
              <div class="card mb-2">
                      ${titleNews}<hr>
                <div class="flex-row">
                      <img src="${article.urlToImage}" class="card-img img-fluid col-lg-6 col-md-4 col-sm-4" style="width: 100%; height: auto;">
                    <div class="col-lg-6 col-md-5 col-sm-4 float-right">
                      <div class="card-body">
                        <div class="card-subtitle text-center text-muted pb-3">
                          ${descriptionNews}
                        </div>
                        ${articleNews}
                        ${authorNews}
                        ${dateNews}
                      </div>
                    </div>
                </div>
                  <div class="card-footer col-lg-12 col-md-8 col-sm-4 mt-3">
                    ${urlNews}
                  </div>
              </div>
            </div>
        </div>
      </div>
      `;
    document.getElementById("card").innerHTML += card;
  });
};

/*  Funções nao incrementadas
 const getNextPosts = () => {
    page++;

    addArticles(url);
  };

  const removeLoader = () => {
    setTimeout(() => {
      loaderContainer.classList.remove("show");
      getNextPosts();
    }, 1000);
  };

  const showLoader = () => {
    loaderContainer.classList.add("show");
    removeLoader();
  };

  window.addEventListener("scroll", () => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
    const isPageBottomAlmostReached =
      scrollTop + clientHeight >= scrollHeight - 10;

    if (isPageBottomAlmostReached) {
      showLoader();
    }
  });

  searchInput.addEventListener("input", (event) => {
    const inputValue = event.target.value;
    const articles = document.querySelectorAll(".article");

    articles.forEach((article) => {
      const articleTitle = post.querySelector(".article.title").textContent;
      const articleBody = post.querySelector(".article.body").textContent;
      console.log({ articleTitle, articleBody });
    });
  }); */
