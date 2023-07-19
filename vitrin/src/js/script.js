document.addEventListener("DOMContentLoaded", function () {
    //TODO 
    // to add the big icons 
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

    function createSlideElement(element) {
        const slide = document.createElement("div");
        slide.classList.add("slide", "flex", "justify-center", "items-center", "w-full", "h-full", "text-3xl", "px-20");

        const link = document.createElement("a");
        link.setAttribute("href", "");
        link.classList.add("absolute");

        const slideContent = document.createElement("div");
        slideContent.classList.add("flex", "m-5", "w-[110px]", "h-[150px]", "justify-between", "bg-white");

        const logoContainer = document.createElement("div");

        const logoImage = document.createElement("img");
        logoImage.setAttribute("src", element.src);
        logoImage.setAttribute("style", "width: 90px; height: 90px;");
        logoImage.setAttribute("alt", "Logo");

        const logoText = document.createElement("div");
        logoText.classList.add("text-center", "py-[5px]");
        logoText.textContent = element.title;

        logoContainer.appendChild(logoImage);
        logoContainer.appendChild(logoText);
        slideContent.appendChild(logoContainer);
        link.appendChild(slideContent);
        slide.appendChild(link);

        return slide;
    }
    function addSlideToCarousel(
        carousel
    ) {
        const cards = [
            {
                title: 'سروش',
                src: "./assets/images/logo.png",
            },
            {
                title: 'سروش',
                src: "./assets/images/logo.png",
            },
            {
                title: 'سروش',
                src: "./assets/images/logo.png",
            },
            {
                title: 'سروش',
                src: "./assets/images/logo.png",
            },
            {
                title: 'سروش',
                src: "./assets/images/logo.png",
            },
            {
                title: 'سروش',
                src: "./assets/images/logo.png",
            },
            {
                title: 'سروش',
                src: "./assets/images/logo.png",
            },
            {
                title: 'سروش',
                src: "./assets/images/logo.png",
            },

        ]
        // const  = document.getElementById("carousel");
        cards.forEach(element => {
            const newSlide = createSlideElement(element);
            carousel.appendChild(newSlide);
        });

    }
    function createCarousel(elementID) {
        const element = document.getElementById(elementID)
        const carouseltag = document.createElement('div');
        carouseltag.classList.add('flex', 'flex-row', 'justify-evenly')
        const title = document.createElement('h3');
        title.textContent = element.dataset.title
        carouseltag.appendChild(title)
        const link = document.createElement('a')
        link.classList.add('text-blue-700')
        link.textContent = element.dataset.link ? 'مشاهده همه' : '';
        link.href = `https://vitrin.splus.ir/${element.dataset.link}`
        carouseltag.appendChild(link)
        element.appendChild(carouseltag)
        const carouselgrid = document.createElement('div');
        carouselgrid.classList.add('grid', 'justify-center')
        const carouselconainer = document.createElement('div')
        
        carouselconainer.classList.add('carousel-container', 'flex', 'flex-row', "w-[91%]", "h-48", "overflow-hidden", 'relative', "gap-[10rem]")
        const carousel=document.createElement('div')
        carousel.classList.add("carousel","flex" ,"transition-transform", "ease-in")
        addSlideToCarousel(carousel)
        carouselconainer.appendChild(carousel)
        carouselgrid.appendChild(carouselconainer)
        element.appendChild(carouselgrid)


    }
    createCarousel('bartarin');
    createCarousel('porfrosh');
    createCarousel('labkhandane');
    createCarousel('sabkzendegi');
    createCarousel('akhbar');
    createCarousel('mazhabi');
    createCarousel('tabliq');
    createCarousel('soroush');
    // Call the function to add the slide to the carousel
    // addSlideToCarousel();
    // const carouselContainer = document.querySelector(".carousel-container");
    // const carousel = document.querySelector(".carousel");
    // const slides = document.querySelectorAll(".slide");
    // let isDragging = false;
    // let startX = 0;
    // let translateX = 0;
    // const slideWidth = slides[0].offsetWidth;
    // const maxTranslateX = 1* slideWidth;
    // const minTranslateX =  0;

    // carouselContainer.addEventListener("mousedown", (e) => {
    //     e.preventDefault();
    //     isDragging = true;
    //     startX = e.clientX - carousel.offsetLeft;
    //     carousel.style.transition = "none";
    // });

    // document.addEventListener("mousemove", (e) => {
    //     e.preventDefault();
    //     if (!isDragging) return;

    //     const x = e.clientX - carousel.offsetLeft;
    //     const offsetX = x - startX;
    //     let newTranslateX = translateX + offsetX;
    //     if(newTranslateX>=maxTranslateX/2){
    //         slides[0].style.visibility='hidden';
    //     }

    //     if (newTranslateX > maxTranslateX) {
    //         newTranslateX = maxTranslateX;
    //     } else if (newTranslateX < minTranslateX) {
    //         newTranslateX = minTranslateX;
    //     }
    //     // console.log(newTranslateX)

    //     carousel.style.transform = `translateX(${newTranslateX}px)`;
    // });

    // document.addEventListener("mouseup", (e) => {
    //     e.preventDefault()
    //     // isDragging = false;
    //     // carousel.style.transition = "transform 0.3s ease";
    // });
})