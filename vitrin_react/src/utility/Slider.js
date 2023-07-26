class IconSlider{
    constructor(valueRef,sliderdiv, mainbody){
        this.valueRef=valueRef
        this.sliderdiv=sliderdiv
        const sliderwidth = parseFloat(window.getComputedStyle(sliderdiv.current).width)
        const mainbodywidth = parseFloat(window.getComputedStyle(mainbody.current).width)


        this.valueRef.current.maxTranslate=Math.abs((sliderwidth*1.3)-mainbodywidth);
        this.valueRef.current.minTranslate=-Math.abs(sliderwidth-mainbodywidth);

    }
    setEventListeners(){
        this.sliderdiv.current.addEventListener("mousedown",  this.onTouchStart.bind(this));
        this.sliderdiv.current.addEventListener("touchstart", this.onTouchStart.bind(this));
        this.sliderdiv.current.addEventListener("mousemove",  this.onTouchMove.bind(this));
        this.sliderdiv.current.addEventListener("touchmove",  this.onTouchMove.bind(this));
        this.sliderdiv.current.addEventListener("mouseup",    this.onTouchEnd.bind(this));
        this.sliderdiv.current.addEventListener("touchend",   this.onTouchEnd.bind(this));
        this.sliderdiv.current.addEventListener("mouseleave", this.onTouchEnd.bind(this));
    }
    removeEventListeners(){
        this.sliderdiv.current.removeEventListener("mousedown",  this.onTouchStart.bind(this));
        this.sliderdiv.current.removeEventListener("touchstart", this.onTouchStart.bind(this));
        this.sliderdiv.current.removeEventListener("mousemove",  this.onTouchMove.bind(this));
        this.sliderdiv.current.removeEventListener("touchmove",  this.onTouchMove.bind(this));
        this.sliderdiv.current.removeEventListener("mouseup",    this.onTouchEnd.bind(this));
        this.sliderdiv.current.removeEventListener("touchend",   this.onTouchEnd.bind(this));
        this.sliderdiv.current.removeEventListener("mouseleave", this.onTouchEnd.bind(this));
    }
    onTouchStart(event) {
        this.valueRef.current.isDragging = true;
        this.valueRef.current.startPosition = this.getPositionX(event);
        this.valueRef.current.animationID = requestAnimationFrame(this.animation.bind(this));
        this.sliderdiv.current.classList.add("grabbing");
    }
    //* set the translation direction for the swiping
    onTouchMove(event) {
        if (this.valueRef.current.isDragging) {
            const currentPosition = this.getPositionX(event);
            this.valueRef.current.currentTranslate = this.valueRef.current.prevTranslate + currentPosition - this.valueRef.current.startPosition;
        }
    }
    //* end the touch and mouse movement
    onTouchEnd() {
        cancelAnimationFrame(this.valueRef.current.animationID);
        this.valueRef.current.isDragging = false;
        this.valueRef.current.prevTranslate = this.valueRef.current.currentTranslate;
        this.sliderdiv.current.classList.remove("grabbing");
    }
    //* return the event position
    getPositionX(event) {
        return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
    }
    //* run the animation
    animation() {
        this.setSliderPosition();
        if (this.valueRef.current.isDragging) {
            requestAnimationFrame(this.animation.bind(this));
        }

    }
    //! set the style of the swiper and move to  the directi
    setSliderPosition() {
        if (this.valueRef.current.currentTranslate > this.valueRef.current.maxTranslate) { this.valueRef.current.currentTranslate = this.valueRef.current.maxTranslate; }
        else if (this.valueRef.current.currentTranslate < this.valueRef.current.minTranslate) { this.valueRef.current.currentTranslate = this.valueRef.current.minTranslate; }
        this.sliderdiv.current.style.transform = `translateX(${this.valueRef.current.currentTranslate}px)`;
    }
}
export default IconSlider