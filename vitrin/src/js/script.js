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
            image.setAttribute('data-src', Icons[cats].src)
            image.classList.add('animate-skeleton-loading', 'bg-skeleton')
            image.alt = "";
            image.classList.add('w-[125px]')
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
        // logoImage.setAttribute("src", skeletonimage);
        logoImage.setAttribute("data-src", element.src);
        logoImage.classList.add('px-[1px]', 'animate-skeleton-loading', 'bg-skeleton')
        logoImage.setAttribute("style", "width: 75px; height: 75px;");
        logoImage.setAttribute("alt", "");

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
        //* create header section for slider
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
        carouselconainer.classList.add('carousel-container', 'flex', 'flex-row', "w-[100%]", "h-36", "overflow-hidden", 'relative', "gap-[10rem]")
        const carousel = document.createElement('div')
        carousel.classList.add("slider", "flex", "transition-transform", "ease-in")
        addSlideToCarousel(carousel)
        carouselconainer.appendChild(carousel)
        carouselgrid.appendChild(carouselconainer)
        element.appendChild(carouselgrid)

        // Variables
        let isDragging = false;
        let startPosition = 0;
        let currentTranslate = 0;
        let maxTranslate = 180;
        let minTranslate = -10;
        let prevTranslate = 0;
        let animationID = 0;
        const slider = document.querySelector(".slider");

        // Functions
        function onTouchStart(event) {
            isDragging = true;
            startPosition = getPositionX(event);
            animationID = requestAnimationFrame(animation);
            slider.classList.add("grabbing");
        }

        function onTouchMove(event) {
            if (isDragging) {
                const currentPosition = getPositionX(event);
                currentTranslate = prevTranslate + currentPosition - startPosition;
            }
        }

        function onTouchEnd() {
            console.log(animationID)
            cancelAnimationFrame(animationID);
            isDragging = false;
            prevTranslate = currentTranslate;
            slider.classList.remove("grabbing");
        }

        function getPositionX(event) {
            return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
        }

        function animation() {
            setSliderPosition();
            if (isDragging) {
                requestAnimationFrame(animation);
            }
        }


        function setSliderPosition() {
            console.log(currentTranslate)
            if (currentTranslate > maxTranslate) { currentTranslate = maxTranslate; }
            else if (currentTranslate < minTranslate) { currentTranslate = minTranslate; }
            carousel.style.transform = `translateX(${currentTranslate}px)`;
        }

        // Event listeners
        carousel.addEventListener("mousedown", onTouchStart);
        carousel.addEventListener("touchstart", onTouchStart);

        carousel.addEventListener("mousemove", onTouchMove);
        carousel.addEventListener("touchmove", onTouchMove);

        carousel.addEventListener("mouseup", onTouchEnd);
        carousel.addEventListener("touchend", onTouchEnd);
        carousel.addEventListener("mouseleave", onTouchEnd);

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
                    img.classList.remove('animate-skeleton-loading')
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
    images.forEach(image =>
        imageObserver.observe(image))
})

// * this section will handle the sticky header  
// * stick the header to the top by adding a specific css class  
const header = document.getElementById("header");
let sticky = header.offsetTop;
var lastScrollPosition = window.scrollY;
window.onscroll = () => {
    const currentScrollPosition = window.scrollY;
    const direction = currentScrollPosition > lastScrollPosition ? 'down' : 'up'
    lastScrollPosition = currentScrollPosition;
    header.classList.add("sticky");
    // const blueheader = document.getElementById("blueheader");
    if (direction === 'down') {
        header.classList.remove('animate-blueheaderanimationopen')
        header.classList.add("animate-blueheaderanimatioclose");
        header.classList.add("closeanimation");
    } else {
        header.classList.remove("animate-blueheaderanimatioclose");
        header.classList.add("animate-blueheaderanimationopen");
        header.classList.remove("closeanimation");
    }
}
