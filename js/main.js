const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const middle = $('.middle');
const productItem = $('.product-item');

var productApi = 'http://localhost:3000/products';
var listProductsBlock = document.querySelector('#listProducts');

class Product {
  constructor(id, images, name, quantity, price, discountPercent, describe) {
    this.id = id;
    this.images = images;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.discountPercent = discountPercent;
    this.describe = describe;
  }
  static from(json) {
    return Object.assign(new Product(), json);
  };
  applyData(json) {
    Object.assign(this, json);
  }
}


$('.header__mid__logo').onclick = function() {
    middle.innerHTML = saver;
    window.scrollTo(0, 0);
}

// getProductDetail('1');


const website =  {
  saver: "",
  products: [],

  renderProducts: function(products) {
      const _this = this;
      var htmls = products.map(function(product) {
        const productData = new Product();
        productData.applyData(product);
        const images = Object.values(productData.images);

        console.log(typeof productData.id);

        return     `
        <div class="product-item  ${productData.discountPercent > 0 ? "product-item--discount" : ""}" onclick="website.getProductDetail('${productData.id}')" >
            <div class="discount-tag">
                <p>-${productData.discountPercent}%</p>
            </div>
            <img src="${images[0]}" alt="" class="picture">
            <div class="info">
                <p>${productData.name}</p>
                <div class="price">
                    <p class="orginal-price">
                        ${productData.discountPercent > 0 ? productData.price * productData.discountPercent / 100 : productData.price}
                    </p>
                    <p class="discount-price">
                        ${productData.price}
                    </p>
                </div>
            </div>
        </div>`;
      });
      listProductsBlock.innerHTML = htmls.join('');
  },

  renderProductDetail: function(product) {
      saver = middle.innerHTML;

      const images = Object.values(product.images);

      middle.innerHTML = `
          <div class="direct">
              <div class="direct__item">Trang chủ</div>
              <i class="fa-solid fa-angle-right"></i>
              <div class="direct__item">Sản phẩm nổi bật</div>
              <i class="fa-solid fa-angle-right"></i>
              <div class="direct__item">${product.name}</div>
          </div>
          <div class="mainInfo">
              <div class="imageBox">
                  <img src="${images[0]}" alt="" class="mainImage">
                  <ul class="image__list">
                      <li class="image__item">
                          <img src="${images[0]}" alt="">
                      </li>
                      <li class="image__item">
                          <img src="${images[1]}" alt="">
                      </li>
                      <li class="image__item">
                          <img src="${images[2]}" alt="">
                      </li>
                      <li class="image__item">
                          <img src="${images[3]}" alt="">
                      </li>
                  </ul>
              </div>
              <div class="textInfo">
                  <h1 class="title">${[product.name]}</h1>
                  <div class="status">
                      <p>Trạng thái</p>
                      <span class="status__text">
                          <i class="fa-solid fa-check"></i>
                          ${product.quantity > 0 ? "Còn hàng" : "Hết hàng"}
                      </span>
                  </div>
                  <div class="price">
                      <span class="price__new">
                          <div class="number">
                              ${product.discountPercent > 0 ? (product.discountPercent * product.price / 100) : product.price}
                          </div>
                      </span>
                      <span class="price__old" ${product.discountPercent <= 0 ? "style=display:none;" : ""} ">
                          <p>Giá gốc:</p>
                          <div class="number">
                              ${product.price}
                          </div>
                          <div class="discount_rate">(-${product.discountPercent}%)</div>
                      </span>
                  </div>
                  <div class="description">
                      ${product.describe}
                  </div>
                  <div class="addCart">
                      <p>Số lượng: </p>
                      <div class="quantity">
                          <button class="quantity__btn quantity__btn--minus">-</button>
                          <p class="quantity__input" value="1">1</p>
                          <button class="quantity__btn quantity__btn--plus">+</button>
                      </div>
                      <button class="addCart__btn">Mua hàng</button>
                  </div>
                  <div class="tags__container">
                      <p>Tags:</p>
                      <ul class="tags">
                          <li class="tags__item">100k-200</li>
                          <li class="tags__item">Arius Bảo Bình</li>
                          <li class="tags__item">Hoa Bốn Mùa</li>
                          <li class="tags__item">Oshitsu</li>
                          <li class="tags__item">Thành Lộc</li>
                          <li class="tags__item">Vạn Đức</li>
                          <li class="tags__item">Vinamilk</li>
                          <li class="tags__item">Vĩnh Tiến</li>
                          <li class="tags__item">Vinmart</li>
                          <li class="tags__item">Vissan</li>
                      </ul>    
                  </div>
                  <div class="share">
                      <span>Chia sẻ:</span>
                      <ul class="iconList">
                          <li class="iconList__item">
                              <a href="#"><i class="fa-brands fa-facebook-square"></i></a>
                          </li>
                          <li class="iconList__item">
                              <a href="#"><i class="fa-brands fa-twitter-square"></i></a>
                          </li>
                          <li class="iconList__item">
                              <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                          </li>
                          <li class="iconList__item">
                              <a href="#"><i class="fa-brands fa-google-plus"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      `;
      window.scrollTo(0, 0);
  },

  getProducts: function() {
    const _this = this;
    fetch(productApi) 
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      _this.products = data;
      _this.renderProducts(_this.products);
    });
  },

  getProductDetail: function(id) {
    const _this = this;
    fetch(`${productApi}/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var product = Product.from(data);
        _this.renderProductDetail(product);
    })
  },

  

  start: function() {
    
    this.getProducts(this.renderProducts);
  }
  
}

website.start();