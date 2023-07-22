var bigslider = document.getElementById('bigslider'),
    bigsliderItems = document.getElementById('items');
bigslide(bigslider, bigsliderItems);
console.log(bigsliderItems)
function bigslide(wrapper, items) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      bigslides = items.getElementsByClassName('bigslide'),
      bigslidesLength = bigslides.length,
      bigslideSize = items.getElementsByClassName('bigslide')[0].offsetWidth,
      firstbigslide = bigslides[0],
      lastbigslide = bigslides[bigslidesLength - 1],
      cloneFirst = firstbigslide.cloneNode(true),
      cloneLast = lastbigslide.cloneNode(true),
      index = 0,
      allowShift = true;
  
  // Clone first and last bigslide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstbigslide);
  wrapper.classList.add('loaded');
  
  // Mouse and Touch events
  items.onmousedown = dragStart;
  
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);
  
  function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }
  function dragAction (e) {
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
  
  function dragEnd (e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftbigslide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftbigslide(-1, 'drag');
    } else {
      items.style.left = (posInitial) + "px";
    }
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftbigslide(dir, action) {
    items.classList.add('transition-[left]','ease-out','duration-200');
    console.log('shift')
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }
      if (dir == 1) {
        console.log('left')
        console.log(posInitial - bigslideSize)
        items.style.left = (posInitial - bigslideSize) + "px";
        index++;      
      } else if (dir == -1) {
        console.log('right')
        console.log(posInitial + bigslideSize)
        items.style.left = (posInitial + bigslideSize) + "px";
        index--;      
      }
    };
    
    allowShift = false;
  }
    
  function checkIndex (){
    // items.classList.remove('transition-left-200','ease-out');
    items.classList.remove('transition-[left]','ease-out','duration-200');
    console.log('check')
    if (index == -1) {
      console.log(-(bigslidesLength * bigslideSize))
      items.style.left = -(bigslidesLength * bigslideSize) + "px";
      index = bigslidesLength - 1;
    }
    if (index == bigslidesLength) {
      console.log(-(1 * bigslideSize))
      items.style.left = -(1 * bigslideSize) + "px";
      index = 0;
    }
    
    allowShift = true;
  }
}