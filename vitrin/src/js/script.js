//* index.html script 
//* contains some methods for creating dynamic html tags
//* and some eventlisteners for scrolling and carousel moves 

//* the initializer method for the index file 
//* in this method we create some carousels and category icons   
const skeletonimage = './assets/images/had.jpg'
document.addEventListener("DOMContentLoaded", function () {
    //TODO  to add the big icons 
    //* this method will add categories cards to the div with id  cardContainer  
    function addCard() {
        const cardContainer = document.getElementById('CatsContainer')
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
            },]
        for (let cats in Icons) {
            const link = document.createElement("a");
            link.href = "#";
            link.className = "w-max flex px-4";
            const cardDiv = document.createElement("div");
            const imageDiv = document.createElement("div");
            const image = document.createElement("img");
            image.setAttribute('data-src', Icons[cats].src )
            image.src = skeletonimage;
            image.alt = `${Icons[cats].title}`;
            image.classList.add('w-[125px]', 'h-[50px]')
            imageDiv.appendChild(image);

            const textDiv = document.createElement("div");
            textDiv.className = "text-center";
            textDiv.textContent = Icons[cats].title;

            // Build the structure
            cardDiv.appendChild(imageDiv);
            cardDiv.appendChild(textDiv);
            link.appendChild(cardDiv);

            // Add the card to the container
            cardContainer.appendChild(link
            );
        }
    }
    //* use the add card method  
    addCard();
    // * create slide and carousel and the append it to element 
    function createSlideElement(element) {
        const slide = document.createElement("div");
        slide.classList.add("slide", "flex", "justify-center", "items-center",
            // "w-full", 
            "pl-[2.95rem]",
            "pr-[2.5rem]",
            // 'py-10',
            'h-fit',
            'pt-[8%]',
        );

        const link = document.createElement("a");
        link.setAttribute("href", "");
        link.classList.add("absolute", "border-zinc-700");

        const slideContent = document.createElement("div");
        slideContent.classList.add("flex", "h-fit", "bg-white");

        const logoContainer = document.createElement("div");

        const logoImage = document.createElement("img");
        logoImage.setAttribute("src", skeletonimage);
        logoImage.setAttribute("data-src", element.src);
        logoImage.classList.add('px-[1px]')
        logoImage.setAttribute("style", "width: 75px; height: 75px;");
        logoImage.setAttribute("alt", "Logo");

        const logoText = document.createElement("div");
        logoText.classList.add("text-center", "pb-[5px]", "text-sm");
        logoText.textContent = element.title;

        logoContainer.appendChild(logoImage);
        logoContainer.appendChild(logoText);
        slideContent.appendChild(logoContainer);
        link.appendChild(slideContent);
        slide.appendChild(link);

        return slide;
    }

    // * add the createded slide to the carousel
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

        cards.forEach(element => {
            const newSlide = createSlideElement(element);
            carousel.appendChild(newSlide);
        });
    }
    // * add the carousel to the div with elementID
    function createCarousel(elementID) {
        const element = document.getElementById(elementID)
        const carouseltag = document.createElement('div');
        carouseltag.classList.add('flex', 'flex-row', 'justify-between')
        const title = document.createElement('h3');
        title.classList.add('pr-[0.5rem]')
        title.textContent = element.dataset.title
        carouseltag.appendChild(title)
        const link = document.createElement('a')
        link.classList.add('pl-[0.5rem]')
        link.classList.add('text-blue-700')
        link.textContent = element.dataset.link ? 'مشاهده همه' : '';
        link.href = `https://vitrin.splus.ir/${element.dataset.link}`
        carouseltag.appendChild(link)
        element.appendChild(carouseltag)
        const carouselgrid = document.createElement('div');
        carouselgrid.classList.add('grid', 'justify-between')
        const carouselconainer = document.createElement('div')

        carouselconainer.classList.add('carousel-container', 'flex', 'flex-row', "w-full", "h-36", "overflow-hidden", 'relative', "gap-[10rem]")
        const carousel = document.createElement('div')
        carousel.classList.add("carousel", "flex", "transition-transform", "ease-in")
        addSlideToCarousel(carousel)
        carouselconainer.appendChild(carousel)
        carouselgrid.appendChild(carouselconainer)
        element.appendChild(carouselgrid)
        const slides = document.querySelectorAll('.slide')

        let isDragging = false;
        let startX = 0;
        let translateX = 0;
        const slideWidth = slides[0].offsetWidth;
        const maxTranslateX = 1 * slideWidth;
        const minTranslateX = 0;

        carouselconainer.addEventListener("mousedown", (e) => {
            e.preventDefault();
            isDragging = true;
            startX = e.clientX - carousel.offsetLeft;
            carousel.style.transition = "none";
        });
        document.addEventListener("mouseup", (e) => {
            e.preventDefault();
        });

        document.addEventListener("mousemove", (e) => {
            e.preventDefault();
            if (!isDragging) return;

            const x = e.clientX - carousel.offsetLeft;
            const offsetX = x - startX;
            let newTranslateX = translateX + offsetX;

            if (newTranslateX > maxTranslateX) {
                newTranslateX = maxTranslateX;
            } else if (newTranslateX < minTranslateX) {
                newTranslateX = minTranslateX;
            }
            // console.log(newTranslateX)

            carousel.style.transform = `translateX(${newTranslateX}px)`;
        });


    }
    createCarousel('bartarin');
    createCarousel('porfrosh');
    createCarousel('labkhandane');
    createCarousel('sabkzendegi');
    createCarousel('akhbar');
    createCarousel('mazhabi');
    createCarousel('tabliq');
    createCarousel('soroush');
    function lazyLoadImages(entries, observer) {
        entries.forEach(element => {
            if (element.isIntersecting) {
                const img = element.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.setAttribute('src', src);
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    }
    const images = document.querySelectorAll('img')
    const imageObserver = new IntersectionObserver(lazyLoadImages, {
        rootMargin: '50px',
        threshold: 0
    });
    images.forEach(image=>
        imageObserver.observe(image))
})

// * this section will handle the sticky header  
// * stick the header to the top by adding a specific css class  
const header = document.getElementById("header");
var sticky = header.offsetTop;
window.onscroll = () => {
    if (window.scrollY > sticky) {
        header.classList.add("hiddenbb");
    } else {
        header.classList.remove("hiddenbb");
    }
}
let lastScrollPosition = window.scrollY;
