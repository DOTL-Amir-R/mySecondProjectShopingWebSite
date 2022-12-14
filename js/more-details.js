import productsData from "../data/data-base.js";
import { generateProductsForSliderProduct } from "../module/components/makeSliderProduct.js";
import { silderProduct } from "../module/components/makeSliderProduct.js";

const mainProductContainer = document.getElementById('main-product-container');
const typeYourReviewInput = document.getElementById('type-your-review-input');
const reviewByStarsContainer = document.getElementById('review-by-stars-container');
const submitUserReviewBtn = document.getElementById('submit-user-review-btn');
const commentsOfUsersContainer = document.getElementById('comments-of-users-container');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
const relatedProductsContainer = document.getElementById('related-products-container');
const nextArrowTodaysOff = document.getElementById('next-arrow-todays-off');
const prevArrowTodaysOff = document.getElementById('prev-arrow-todays-off');
const todaysOffProductsContainer = document.getElementById('todays-off-products-container')

const currentProductIdFromLocalStorage = localStorage.getItem('currentProductID');

const dataFromLocalStorage = localStorage.getItem('idOfMainProductFromMoreDetailsPage');

const dataFromLocalStorageParsed =JSON.parse(dataFromLocalStorage);

const arrayShared = dataFromLocalStorageParsed || [] ;
productsData().forEach((item)=>{
    if(item.id === Number(currentProductIdFromLocalStorage)){
        const test03 = `
        <div id="${item.id}" class="main-product-container d-flex flex-column align-items-center">
        <div class="name-of-product f-size-30 font-weight-500 my-3 py-3 ">
            ${item.name}
        </div>
        <div class="product-img-container d-flex gap-30 justify-content-center">
            <img class="width-26-percentage box-shadow-one" src="${item.icon}">
            <div class="details-for-product width-39-percentage f-size-18 fw-normal box-shadow-one pt-2 ps-2">
                ${item.moreDetails}
            </div>
            <div class="buy-product-container padd-20 box-shadow-one d-flex flex-column">
                <div class="price-of-product f-size-18 fw-normal">
                ${item.price}
                </div>
                <div class="wirte-your-address f-size-18 fw-normal">
                    Write your address
                </div>
                <form>
                    <input id="input-for-determine-number-of-products" type="number" value="2">
                </form>
                <div class="colors-cotainer d-flex">
                    <div class="colors-title f-size-18 fw-normal">
                        Colors
                    </div>
                    <img class="selected-colors-container" src="${item.color}">
                    
                    </img>
                </div>
                <button id="add-to-your-basket" class="f-size-18 fw-normal">
                    Add to your basket
                </button>
                <button class="f-size-18 fw-normal ">
                    Buy now
                </button>
            </div>
        </div>
        </div>
        `
        mainProductContainer.innerHTML = test03;
    }
})



const addToYourBasket = document.getElementById('add-to-your-basket');

addToYourBasket.addEventListener('click' , ()=>{

    const mainProductData = [...mainProductContainer.children];
    const idOfMainProduct = mainProductData[0].id;
    arrayShared.push(idOfMainProduct);

    localStorage.setItem('idOfMainProductFromMoreDetailsPage',JSON.stringify(arrayShared));

});

const reviewStarsFromUserChildrenArray = [...reviewByStarsContainer.children];
reviewByStarsContainer.addEventListener('click',(item)=>{
    const itemId = item.target.id
    switch(itemId){
        case 'first-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
            break;
        case 'second-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
            break;
        case 'third-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
            break;
        case 'fourth-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
            break;
        case 'fith-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            `
            break;
    }

});

submitUserReviewBtn.addEventListener('click',()=>{
    const userReviewInText = typeYourReviewInput.value
    const makeUserReviewInHtml = `
    <div class="user-icon-review-rating-container d-flex align-items-center gap-3">
    <div class="user-profile">
        <img class="user-profile" src="../img/empty-profile-user-circle.png" alt="user profile">
    </div>
    <div class="rate-review-comment-container d-flex flex-column ">
        <div class="rate-of-stars-container d-flex mb-3">
        ${reviewByStarsContainer.innerHTML}
        </div>
        <div class="comment-of-user mt-3 f-size-18 fw-normal">
            ${userReviewInText}
        </div>
    </div>
    </div>
    `
    commentsOfUsersContainer.innerHTML += makeUserReviewInHtml
    console.log(typeYourReviewInput.value)
});


generateProductsForSliderProduct(relatedProductsContainer)
silderProduct(relatedProductsContainer,nextArrow,prevArrow)
generateProductsForSliderProduct(todaysOffProductsContainer)
silderProduct(todaysOffProductsContainer,nextArrowTodaysOff,prevArrowTodaysOff)
// if(nextArrow.addEventListener('click')){
//     console.log('clicked not interval')
// }else{
//     setInterval(() => {
//         console.log('interval')
//     }, 3000);
// }