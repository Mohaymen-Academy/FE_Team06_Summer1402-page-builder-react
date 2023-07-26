class BitSliderclass {
    valueRef;
    items;
    constructor(valueRef, items, mainbody) {
        this.valueRef = valueRef
        this.items = items
        this.valueRef.current.bigsliderItems = this.items.current;
        this.valueRef.current.bigslides = this.items.current.getElementsByClassName('bigslide')
        this.valueRef.current.bigslidesLength = this.valueRef.current.bigslides.length;
        this.valueRef.current.biassize = parseInt(window.getComputedStyle(this.valueRef.current.bigsliderItems).gap)
        this.valueRef.current.bigslideSize = parseFloat(window.getComputedStyle(mainbody.current).width);
        this.valueRef.current.firstbigslide = this.valueRef.current.bigslides[0];
        this.valueRef.current.lastbigslide = this.valueRef.current.bigslides[valueRef.current.bigslidesLength - 1];
        this.valueRef.current.cloneFirst = this.valueRef.current.firstbigslide.cloneNode(true),
            this.valueRef.current.cloneLast = this.valueRef.current.lastbigslide.cloneNode(true),
            this.valueRef.current.bigsliderItems.appendChild(this.valueRef.current.cloneFirst);
        this.valueRef.current.bigsliderItems.insertBefore(this.valueRef.current.cloneLast, this.valueRef.current.firstbigslide);
        this.items.current.style.left = -this.valueRef.current.bigslideSize + this.valueRef.current.biassize / 4 + 'px';
    }
    setEventListeners() {
        this.valueRef.current.bigsliderItems.addEventListener('touchstart', this.dragStart.bind(this));
        this.valueRef.current.bigsliderItems.addEventListener('mousedown', this.dragStart.bind(this));
        this.valueRef.current.bigsliderItems.addEventListener('touchend', this.dragEnd.bind(this));
        this.valueRef.current.bigsliderItems.addEventListener('mouseup', this.dragEnd.bind(this));
        this.valueRef.current.bigsliderItems.addEventListener('touchmove', this.dragAction.bind(this));
        this.valueRef.current.bigsliderItems.addEventListener('transitionend', this.checkIndex.bind(this));
    }
    removeEventListeners() {
        this.valueRef.current.bigsliderItems.removeEventListener('touchstart', this.dragStart.bind(this));
        this.valueRef.current.bigsliderItems.removeEventListener('touchend', this.dragEnd.bind(this));
        this.valueRef.current.bigsliderItems.removeEventListener('touchmove', this.dragAction.bind(this));
        this.valueRef.current.bigsliderItems.removeEventListener('transitionend', this.checkIndex.bind(this));
    }
    dragStart(e) {

        e = e || window.event;
        e.preventDefault();
        this.valueRef.current.posInitial = this.valueRef.current.bigsliderItems.offsetLeft;
        if (e.type == 'touchstart') {
            this.valueRef.current.posX1 = e.touches[0].clientX;
        } else {
            this.valueRef.current.posX1 = e.clientX;
            document.onmouseup = this.dragEnd.bind(this);
            document.onmousemove = this.dragAction.bind(this);
        }
    }
    dragAction(e) {
        e = e || window.event;

        if (e.type == 'touchmove') {
            this.valueRef.current.posX2 = this.valueRef.current.posX1 - e.touches[0].clientX;
            this.valueRef.current.posX1 = e.touches[0].clientX;
        } else {
            this.valueRef.current.posX2 = this.valueRef.current.posX1 - e.clientX;
            this.valueRef.current.posX1 = e.clientX;
        }

        this.valueRef.current.bigsliderItems.style.left = (this.items.current.offsetLeft - this.valueRef.current.posX2) + "px";
    }

    dragEnd(e) {
        this.valueRef.current.posFinal = this.valueRef.current.bigsliderItems.offsetLeft;
        if (this.valueRef.current.posFinal - this.valueRef.current.posInitial < -this.valueRef.current.threshold) {
            this.shiftbigslide(1, 'drag');
        } else if (this.valueRef.current.posFinal - this.valueRef.current.posInitial > this.valueRef.current.threshold) {
            this.shiftbigslide(-1, 'drag');
        } else {
            this.items.current.style.left = (this.valueRef.current.posInitial) + "px";
        }
        document.onmouseup = null;
        document.onmousemove = null;
    }
    //* this function will move the slider to left or fight depends on the choosen direction;
    shiftbigslide(dir, action) {
        this.items.current.classList.add('transition-[left]', 'ease-out', 'duration-200');
        if (this.valueRef.current.allowShift) {
            if (!action) { this.valueRef.current.posInitial = this.items.current.offsetLeft; }
            if (dir == 1) {
                this.items.current.style.left = (this.valueRef.current.posInitial - this.valueRef.current.bigslideSize - Math.ceil(this.valueRef.current.biassize / 3))
                    + "px";
                this.valueRef.current.index++;
            } else if (dir == -1) {
                this.items.current.style.left = (this.valueRef.current.posInitial + this.valueRef.current.bigslideSize)
                    + Math.floor(this.valueRef.current.biassize / 3)
                    + "px";
                this.valueRef.current.index--;
            }
        };

        this.valueRef.current.allowShift = false;
    }
    //* check if the carousel should restart from the start or the end
    checkIndex() {
        this.items.current.classList.remove('transition-[left]', 'ease-out', 'duration-200');
        if (this.valueRef.current.index == -1) {
            this.items.current.style.left = (-(this.valueRef.current.bigslidesLength * this.valueRef.current.bigslideSize))
                - this.valueRef.current.biassize / 3
                + "px";
            this.valueRef.current.index = this.valueRef.current.bigslidesLength - 1;
        }
        if (this.valueRef.current.index == this.valueRef.current.bigslidesLength) {
            this.items.current.style.left = (-(1 * this.valueRef.current.bigslideSize))
                + Math.floor(this.valueRef.current.biassize / 3)
                + "px";
            this.valueRef.current.index = 0;
        }
        this.valueRef.current.allowShift = true;
    }
}

export default BitSliderclass;