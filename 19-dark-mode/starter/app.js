const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
  console.log("hello");
  document.documentElement.classList.toggle("dark-theme");
});

const articleData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    // format date
    const formatDate = moment(date).format("MMMM Do, YYYY");
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length}</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join("");

articlesContainer.innerHTML = articleData;

// console.log(moment);
