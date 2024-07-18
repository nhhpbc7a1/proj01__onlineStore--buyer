const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const middle = $('.middle');
const productItem = $('.product-item');

// const products = [
//     {
//         images: [ 
//             './assets/products/product1/picture1.webp',
//             './assets/products/product1/picture2.webp',
//             './assets/products/product1/picture3.webp',
//             './assets/products/product1/picture4.webp',
//         ],
//         name: 'Cà chua Đà Lạt',
//         quantity: 1,
//         price: 45000,
//         discountPercent: 33,
//         describe: 'Giá trị dinh dưỡng:   Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt giúp duy trì sức khỏe,...',
//     },
//     {
//         images: [ 
//             './assets/products/product1/picture1.webp',
//             './assets/products/product1/picture2.webp',
//             './assets/products/product1/picture3.webp',
//             './assets/products/product1/picture4.webp',
//         ],
//         name: 'Vải thiều loại to',
//         quantity: 1,
//         price: 30000,
//         discountPercent: 0,
//         describe: 'Giá trị dinh dưỡng:   Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt giúp duy trì sức khỏe,...',
//     },
//     {
//         images: [ 
//             './assets/products/product1/picture1.webp',
//             './assets/products/product1/picture2.webp',
//             './assets/products/product1/picture3.webp',
//             './assets/products/product1/picture4.webp',
//         ],
//         name: 'Hồng đỏ Mỹ',
//         quantity: 1,
//         price: 30000,
//         discountPercent: 0,
//         describe: 'Giá trị dinh dưỡng:   Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt giúp duy trì sức khỏe,...',
//     },
//     {
//         images: [ 
//             './assets/products/product1/picture1.webp',
//             './assets/products/product1/picture2.webp',
//             './assets/products/product1/picture3.webp',
//             './assets/products/product1/picture4.webp',
//         ],
//         name: 'Dưa leo Đà Lạt',
//         quantity: 1,
//         price: 30000,
//         discountPercent: 0,
//         describe: 'Giá trị dinh dưỡng:   Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt giúp duy trì sức khỏe,...',
//     },

// ];

const products = [];
var productApi = 'http://localhost:3000/products';

fetch(productApi)
  .then(response => response.json())
  .then(data => {
    products = data;
    console.log(products);
  });

var saver = middle.innerHTML;

productItem.onclick = function(e) {
    const product = products[0];
    saver = middle.innerHTML;
    middle.innerHTML = `
        <div class="direct">
            <div class="direct__item">Trang chủ</div>
            <i class="fa-solid fa-angle-right"></i>
            <div class="direct__item">Sản phẩm nổi bật</div>
            <i class="fa-solid fa-angle-right"></i>
            <div class="direct__item">Vải thiều loại to</div>
        </div>
        <div class="mainInfo">
            <div class="imageBox">
                <img src="${product.images[0]}" alt="" class="mainImage">
                <ul class="image__list">
                    <li class="image__item">
                        <img src="${product.images[0]}" alt="">
                    </li>
                    <li class="image__item">
                        <img src="${product.images[1]}" alt="">
                    </li>
                    <li class="image__item">
                        <img src="${product.images[2]}" alt="">
                    </li>
                    <li class="image__item">
                        <img src="${product.images[3]}" alt="">
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
                            ${product.discountPercentage > 0 ? (product.discountPercentage * product.price / 100) : product.price}
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
}

$('.header__mid__logo').onclick = function() {
    middle.innerHTML = saver;
    window.scrollTo(0, 0);
}