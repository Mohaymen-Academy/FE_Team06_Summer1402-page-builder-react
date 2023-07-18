// const Icons=require('/Data.js')
// import { Icons } from "./Data";
document.addEventListener("DOMContentLoaded", function () {

    // const cardContainer = document.getElementById('CatsContainer')
    // function addCard() {
    //     const Icons = [
    //         {
    //             title: "بازی و تفریح",
    //             src: "./assets/images/bazi.png",
    //         },
    //         {
    //             title: "پخش تلویزیون",
    //             src: "./assets/images/pakhsh.png",
    //         },
    //         {
    //             title: "انیمیشن",
    //             src: "./assets/images/tv.png",
    //         },
    //         {
    //             title: "مذهبی",
    //             src: "./assets/images/mazhabi.png",
    //         },
    //         {
    //             title: "سبک زندگی",
    //             src: "./assets/images/sabk.png",
    //         },
    //         {
    //             title: "زنگ مدرسه",
    //             src: "./assets/images/zang.png",
    //         },
    //         {
    //             title: "اخبار",
    //             src: "./assets/images/news.png",
    //         },
    //         {
    //             title: "کودکانه",
    //             src: "./assets/images/kodak.png",
    //         },
    //     ]
    //     for (let cats in Icons) {
    //         console.log(Icons[cats])
    //         const link = document.createElement("a");
    //         link.href = "#";
    //         link.className = "w-max flex px-4";

    //         const cardDiv = document.createElement("div");

    //         const imageDiv = document.createElement("div");
    //         const image = document.createElement("img");
    //         image.src = Icons[cats].src;
    //         image.alt = `${Icons[cats].title}`;
    //         imageDiv.appendChild(image);

    //         const textDiv = document.createElement("div");
    //         textDiv.className = "text-center";
    //         textDiv.textContent = Icons[cats].title;

    //         // Build the structure
    //         cardDiv.appendChild(imageDiv);
    //         cardDiv.appendChild(textDiv);
    //         link.appendChild(cardDiv);

    //         // Add the card to the container
    //         cardContainer.appendChild(link);
    //     }
    // }
    // addCard();

    
    function createSlideElement() {
    const slide = document.createElement("div");
    slide.classList.add("slide", "flex", "justify-center", "items-center", "w-full", "h-full", "text-3xl", "px-20");

    const link = document.createElement("a");
    link.setAttribute("href", "");
    link.classList.add("absolute");

    const slideContent = document.createElement("div");
    slideContent.classList.add("flex", "m-5", "w-[110px]", "h-[150px]", "justify-between", "bg-white");

    const logoContainer = document.createElement("div");

    const logoImage = document.createElement("img");
    logoImage.setAttribute("src", "./assets/images/logo.png");
    logoImage.setAttribute("style", "width: 90px; height: 90px;");
    logoImage.setAttribute("alt", "Logo");

    const logoText = document.createElement("div");
    logoText.classList.add("text-center", "py-[5px]");
    logoText.textContent = "سروش";

    logoContainer.appendChild(logoImage);
    logoContainer.appendChild(logoText);
    slideContent.appendChild(logoContainer);
    link.appendChild(slideContent);
    slide.appendChild(link);

    return slide;
}
function addSlideToCarousel(
    // cards
    ) {
    const carousel = document.getElementById("carousel");
    // cards.forEach(element => {
    // });
    const newSlide = createSlideElement();
    carousel.appendChild(newSlide);
}

// Call the function to add the slide to the carousel
addSlideToCarousel();

})