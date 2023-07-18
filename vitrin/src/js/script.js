// const Icons=require('/Data.js')
// import { Icons } from "./Data";
document.addEventListener("DOMContentLoaded", function () {

    const cardContainer = document.getElementById('CatsContainer')
    function addCard() {
        const Icons = [
            {
                title: "بازی و تفریح",
                src: "./assets/images/bazi.png",
            },
            {
                title: "پخش تلویزیون",
                src: "./assets/images/pakhsh.png",
            },
            {
                title: "انیمیشن",
                src: "./assets/images/tv.png",
            },
            {
                title: "مذهبی",
                src: "./assets/images/mazhabi.png",
            },
            {
                title: "سبک زندگی",
                src: "./assets/images/sabk.png",
            },
            {
                title: "زنگ مدرسه",
                src: "./assets/images/zang.png",
            },
            {
                title: "اخبار",
                src: "./assets/images/news.png",
            },
            {
                title: "کودکانه",
                src: "./assets/images/kodak.png",
            },
        ]
        for (let cats in Icons) {
            console.log(Icons[cats])
            const link = document.createElement("a");
            link.href = "#";
            link.className = "w-max flex px-4";

            const cardDiv = document.createElement("div");

            const imageDiv = document.createElement("div");
            const image = document.createElement("img");
            image.src = Icons[cats].src;
            image.alt = `${Icons[cats].title}`;
            imageDiv.appendChild(image);

            const textDiv = document.createElement("div");
            textDiv.className = "text-center";
            textDiv.textContent = Icons[cats].title;

            // Build the structure
            cardDiv.appendChild(imageDiv);
            cardDiv.appendChild(textDiv);
            link.appendChild(cardDiv);

            // Add the card to the container
            cardContainer.appendChild(link);
        }
    }
    addCard();

})
