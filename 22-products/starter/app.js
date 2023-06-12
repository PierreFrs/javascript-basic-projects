const productsDOM = document.querySelector(".products-center");

const url = "https://course-api.com/javascript-store-products";

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    productsDOM.innerHTML = `<p class="error">Oops, something went wrong...</p>`;
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      return `<a href="product.html?id=${id}" class="single-product">
            <img src="${img}" alt="${title}" class="single-product-img img" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join("");
  productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

const start = async () => {
  const list = await fetchProducts();
  displayProducts(list);
};
start();

window.addEventListener("load", fetchProducts);
