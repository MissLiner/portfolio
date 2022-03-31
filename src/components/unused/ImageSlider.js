function ImageSlider(props) {
    //frame, element, leftBtn, rightBtn, dotHolder, picArray
    // add pics to slider
    let currentIndex = 0;
    let newIndex;
    let currentDot;
    const container = props.frame;
    function dissolve(props.element) {
        props.element.classList.add('fade-out');
        function hide(props.element) {
            props.element.classList.remove('fade-out');
            props.element.classList.add('hidden');
        }
        setTimeout(function() { hide(props.element) }, 1000);
    }
    function appear(props.element) {
        function show(props.element) {
            props.element.classList.remove('hidden');
            currentDot = document.getElementById('nav-dot-' + currentIndex);
            currentDot.checked = 'true';
            setTimeout(() => {
                centerPic(props.element, container);
            }, 250);
            props.element.classList.add('fade-in');
        }
        setTimeout(function() { show(props.element) }, 1000);
    }
    function stopTimer() {
        clearInterval(playShow);
        playShow = null;
        isTimer = false;
        playBtn.textContent = 'PLAY';
    }
    props.picArray.forEach((pic, i) => {
        props.element.append(pic);
        pic.classList.add('hidden');
        pic.classList.add('slider-pic');
        pic.id = 'pic-' + i;
        //CREATE NAV DOTS
        const navDot = document.createElement('input');
        navDot.id = 'nav-dot-' + i;
        // navDot.class = 'nav-dot';
        navDot.type = 'radio';
        navDot.name = 'nav-dot' + picArray;
        props.dotHolder.appendChild(navDot);
        //navigate w. nav dots
        navDot.addEventListener('click', () => {
            stopTimer();
            dissolve(props.picArray[currentIndex]);
            currentIndex = parseInt(pic.id.charAt(pic.id.length - 1));
            appear(pic);
        })
    });
    //display first pic
    props.picArray[currentIndex].classList.remove('hidden');
    const navDot0 = document.getElementById('nav-dot-0');
    navDot0.checked = 'true';

    //CHANGE PIC
    function shiftSlider(direction, arr) {
        if (direction === 'left') {
            newIndex = currentIndex - 1;
        } else {
            newIndex = currentIndex + 1; 
        }
        dissolve(arr[currentIndex]);
        currentIndex = newIndex;
        appear(arr[currentIndex]);
    }
    //USE L/R BUTTONS TO NAVIGATE PICS
    props.lftBtn.addEventListener('click', () => {
        if (currentIndex !== 0) {
            stopTimer();
            shiftSlider('left', props.picArray);
        }
    })
    props.rightBtn.addEventListener('click', () => {
        if (currentIndex !== props.picArray.length - 1) {
            stopTimer();
            shiftSlider('right', props.picArray);
        }
    })
    //ADD SLIDESHOW OPTION
    const playBtn = document.getElementById('play-btn');
    let lastIndex;
    let isTimer = false;
    function advanceShow(arr) {
        isTimer = true;
        dissolve(arr[currentIndex]);
        if (currentIndex !== arr.length - 1) {
            if (lastIndex && lastIndex > currentIndex && currentIndex !== 0) {
                lastIndex = currentIndex;
                currentIndex -= 1;
            }
            else {
                currentIndex += 1;
            }
        } else {
            lastIndex = currentIndex;
            currentIndex -= 1;
        }
        appear(arr[currentIndex]);
    }

    let playShow;
    
    playBtn.addEventListener('click', () => {
        if (isTimer === true) {
            stopTimer();
        } else {
            playBtn.textContent = 'PAUSE';
            playShow = setInterval(advanceShow, 5000, props.picArray);
            isTimer = true;
        }
    })
}

export default ImageSlider;