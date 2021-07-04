let backgroundGradient0 = getComputedStyle(document.documentElement)
    .getPropertyValue('--header-background-0')
let backgroundGradient100 = getComputedStyle(document.documentElement)
    .getPropertyValue('--header-background-100');
let animatePersonalInfo = false;
let animateFinalTalk = false;
let aboutMeInFocus = false;
let hideArrow = true;
let shownNavigatorHelp = false;
let animateTiles = true;


let mousePointer = document.getElementById("mousePointer")
mousePointer.classList.add("cursorLight")






document.body.style.overflow = "hidden";
let scrollPositions = [0, 680, 1480, 2280, 3080, 3885, 4680, 5480, 6274, 7070]
let currentScrollPosition = 0;
let scrollMoving = false;
document.documentElement.scrollTop = scrollPositions[0];



// Code related to  Mouse POintor - aplogies for cursor functionname instead of mousepointer :-(
function cursorExpand() {
    mousePointer.style.height = "60px"
    mousePointer.style.width = "60px"
    mousePointer.style.borderRadius = "30px"
    console.log("CursorExpand");


}

function cursorShrink() {
    mousePointer.style.height = "20px"
    mousePointer.style.width = "20px"
    mousePointer.style.borderRadius = "10px"
        // we call this function on mouseout of tiles, so we again start animation
    animateTiles = true;
}

function cursorExpandLarge() {
    mousePointer.style.height = "60px"
    mousePointer.style.width = "60px"
    mousePointer.style.borderRadius = "10px"

}

function cursorHide() {
    mousePointer.style.borderWidth = "0px"
        // mousePointer.style.height = "2px";
        // mousePointer.style.width = "2px";


}

function cursorShow() {
    mousePointer.style.borderWidth = "2px"
        // cursorExpand()
}

function customCursor(height, width, radius) {
    mousePointer.style.height = height + "px";
    mousePointer.style.width = width + "px";
    mousePointer.style.borderRadius = radius + "px";
    // as we use call this function when hovering over tiles, so its best place to stop animation.
    animateTiles = false;
}

// code related to navigator
function navigatorPosition(scrP) {
    if (!scrollMoving) {
        console.log("Executing");
        currentScrollPosition = scrP;
        document.documentElement.scrollTop = scrollPositions[scrP];
        setTimeout(() => {
            scrollMoving = false;
        }, 1000);
    }
}

function shrinkNavigator() {
    // console.log("navigatoshrink");
    el = document.getElementById("navigator")

    el.style.display = "none"
    cursorShow()

    // navigator help will not be shown now

}

function expandNavigator() {
    // console.log("navigatorexpand")
    el = document.getElementById("navigator")
    el.style.display = "flex"
    el.style.animation = "navigatorExpandAnimation 1s"
    el.style.animationFillMode = "forwards"
    shownNavigatorHelp = true;


}


// attaching mouse move event to update gradient angle
document.querySelector('html').addEventListener('mousemove', updateGradient);

function updateGradient(e) {

    try {

        // mouse pointer movement
        mousePointer.style.left = e.pageX + "px";
        mousePointer.style.top = e.pageY + "px";


        // for navigation arrow
        let mouseScreenXposition = e.screenX;
        let mouseScreenYposition = e.screenY;

        let arrowSel = document.getElementById("navigationArrow")
        if (mouseScreenXposition > 700 && mouseScreenYposition > 400) {
            // console.log("not hidden");
            arrowSel.style.display = "flex";
            arrowSel.style.animation = "rotateArrowShow 500ms ease-out"
            arrowSel.style.animationFillMode = "forwards"
        } else {
            // console.log("hidden");
            if (shownNavigatorHelp) {
                arrowSel.style.animation = "rotateArrowHide 1s"
                arrowSel.style.animationFillMode = "forwards"
            }

        }
    } catch (TypeError) {}






    let xMousePos;
    let xMouseRatio
    if (e == null) {
        xMousePos = 0
        xMouseRatio = 0
    } else {
        xMousePos = e.screenX;
        xMouseRatio = xMousePos / 1360;
    }

    let backgroundGradientAngle = 159 + (xMouseRatio * 180);
    backgroundGradientAngle = Math.floor(backgroundGradientAngle);
    let profileBorderGradientAngle = 326 + (xMouseRatio * 180);



    document.querySelector("header").style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + backgroundGradient0 + " 0%, " + backgroundGradient100 + " 100%)";
    console.log(backgroundGradient0);
    document.querySelector(".profileImageContainer").style.background = "linear-gradient(" + profileBorderGradientAngle + "deg, " + backgroundGradient0 + " 0%, " + backgroundGradient100 + " 100%)";

    document.querySelector(".anotherSection").style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + backgroundGradient0 + " 0%, " + backgroundGradient100 + " 100%)";

    document.querySelector(".aiDataScienceSection").style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + backgroundGradient0 + " 0%, " + backgroundGradient100 + " 100%)";


    document.querySelector(".webSection").style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + backgroundGradient0 + " 0%, " + backgroundGradient100 + " 100%)";

    document.querySelector(".educationSection").style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + backgroundGradient0 + " 0%, " + backgroundGradient100 + " 100%)";

    document.querySelector(".skillSection").style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + backgroundGradient0 + " 0%, " + backgroundGradient100 + " 100%)";




    document.querySelectorAll(".skillSection .skillContainer .skillTiles").forEach(element => {

        element.style.background = document.querySelector(".profileImageContainer").style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + backgroundGradient0 + " 50%, " + backgroundGradient100 + " 100%)";

    });
    document.querySelectorAll(".certificateSection .certificateContainer .certificateSelector .certiTiles").forEach(element => {

        element.style.background = document.querySelector(".profileImageContainer").style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + backgroundGradient0 + " 50%, " + backgroundGradient100 + " 100%)";

    });
    document.querySelectorAll(".contactContainer .socialIconContainer").forEach(element => {

        element.style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + "white" + " 0%, " + backgroundGradient100 + " 100%)";

    });

    document.querySelector(".certificateSection").style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + backgroundGradient0 + " 0%, " + backgroundGradient100 + " 100%)";

    document.querySelector(".contactSection").style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + backgroundGradient0 + " 0%, " + backgroundGradient100 + " 100%)";


}



function onScrollEventFunction() {
    // if (this.scrollY > 650) {
    console.log(this.scrollY);
    if (this.scrollY < 650) {
        let elementsToChange = document.getElementsByClassName("change_color_on_scroll");

        // changin background --------------
        backgroundGradient0 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-0');
        backgroundGradient100 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-100');

        updateGradient(null);
        // --------------------------------

        let clrLight = getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color-light')
        elementsToChange[0].style.color = clrLight;
        elementsToChange[1].style.color = clrLight;
        elementsToChange[2].style.color = clrLight;
        elementsToChange[3].style.color = clrLight;

        animatePersonalInfo = false;
        mousePointer.classList.remove("cursorDark");
        mousePointer.classList.add("cursorLight");

        arr = document.getElementById("navigationArrow")
        arr.style.color = clrLight;




    } else if (this.scrollY > 650 && this.scrollY < 1440) {


        let elementsToChange = document.getElementsByClassName("change_color_on_scroll");
        let clrDrk = getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color-dark');
        elementsToChange[0].style.color = clrDrk;
        elementsToChange[1].style.color = clrDrk;
        elementsToChange[2].style.color = clrDrk;
        elementsToChange[3].style.color = clrDrk;
        animatePersonalInfo = true;

        mousePointer.classList.remove("cursorLight");
        mousePointer.classList.add("cursorDark");


        arr = document.getElementById("navigationArrow")
        arr.style.color = clrDrk;


        // navigation help popup in about me sectoin on bottom right corner
        if (!shownNavigatorHelp) {
            arrowSel = document.getElementById("navigationArrow")
            arrowSel.style.display = "flex";
            arrowSel.style.animation = "rotateArrowShow 500ms ease-out"
            arrowSel.style.animationFillMode = "forwards"
            document.querySelector(".navigatorHelp span").style.display = "block"
            setTimeout(() => {
                document.querySelector(".navigatorHelp span").style.display = "none";
                arrowSel.style.animation = "rotateArrowHide 1s"
                arrowSel.style.animationFillMode = "forwards"
                shownNavigatorHelp = true;
            }, 10000);
        }






        // if (this.scrollY > 670 || this.scrollY < 690) {
        //     document.body.style.overflow = "hidden";
        //     console.log("hidden");
        // }






    } else if (this.scrollY > 1440 && this.scrollY < 2170) {
        // console.log("1400");
        let elementsToChange = document.getElementsByClassName("change_color_on_scroll");



        // changing background --------------
        backgroundGradient0 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-0-2');
        backgroundGradient100 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-100-2');
        animatePersonalInfo = false;


        updateGradient(null);
        // --------------------------------


        let clrLight = getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color-light');
        elementsToChange[0].style.color = clrLight;
        elementsToChange[1].style.color = clrLight;
        elementsToChange[2].style.color = clrLight;
        elementsToChange[3].style.color = clrLight;

        mousePointer.classList.remove("cursorDark");
        mousePointer.classList.add("cursorLight");


        arr = document.getElementById("navigationArrow")
        arr.style.color = clrLight;


    } else if (this.scrollY > 2170 & this.scrollY < 3050) {
        backgroundGradient0 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-0-3');
        backgroundGradient100 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-100-3');
        updateGradient(null);

        let elementsToChange = document.getElementsByClassName("change_color_on_scroll");
        let clrLight = getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color-light');
        elementsToChange[0].style.color = clrLight;
        elementsToChange[1].style.color = clrLight;
        elementsToChange[2].style.color = clrLight;
        elementsToChange[3].style.color = clrLight;

        mousePointer.classList.remove("cursorDark");
        mousePointer.classList.add("cursorLight");


        arr = document.getElementById("navigationArrow")
        arr.style.color = clrLight;

    } else if (this.scrollY >= 3050 & this.scrollY < 3720) {
        // console.log("LST");
        backgroundGradient0 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-0-4');
        backgroundGradient100 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-100-4');
        updateGradient(null);


        let elementsToChange = document.getElementsByClassName("change_color_on_scroll");
        let clrLight = getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color-light');
        elementsToChange[0].style.color = clrLight;
        elementsToChange[1].style.color = clrLight;
        elementsToChange[2].style.color = clrLight;
        elementsToChange[3].style.color = clrLight;

        mousePointer.classList.remove("cursorDark");
        mousePointer.classList.add("cursorLight");


        arr = document.getElementById("navigationArrow")
        arr.style.color = clrLight;
    } else if (this.scrollY >= 3720 & this.scrollY < 4545) {
        // console.log("NMNM");
        let elementsToChange = document.getElementsByClassName("change_color_on_scroll");
        backgroundGradient0 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-0-5');
        backgroundGradient100 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-100-5');
        updateGradient(null);
        let clrLight = getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color-light');
        elementsToChange[0].style.color = clrLight;
        elementsToChange[1].style.color = clrLight;
        elementsToChange[2].style.color = clrLight;
        elementsToChange[3].style.color = clrLight;

        mousePointer.classList.remove("cursorDark");
        mousePointer.classList.add("cursorLight");
        arr = document.getElementById("navigationArrow")
        arr.style.color = clrLight;
    } else if (this.scrollY >= 4545 & this.scrollY < 5200) {
        let elementsToChange = document.getElementsByClassName("change_color_on_scroll");
        backgroundGradient0 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-0-6');
        backgroundGradient100 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-100-6');
        updateGradient(null);




        let clrLight = getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color-light');
        elementsToChange[0].style.color = clrLight;
        elementsToChange[1].style.color = clrLight;
        elementsToChange[2].style.color = clrLight;
        elementsToChange[3].style.color = clrLight;

        mousePointer.classList.remove("cursorDark");
        mousePointer.classList.add("cursorLight");

        arr = document.getElementById("navigationArrow")
        arr.style.color = clrLight;
    } else if (this.scrollY >= 5200 & this.scrollY < 6000) {
        let elementsToChange = document.getElementsByClassName("change_color_on_scroll");
        backgroundGradient0 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-0-7');
        backgroundGradient100 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-100-7');
        updateGradient(null);




        let clrLight = getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color-light');
        elementsToChange[0].style.color = clrLight;
        elementsToChange[1].style.color = clrLight;
        elementsToChange[2].style.color = clrLight;
        elementsToChange[3].style.color = clrLight;

        mousePointer.classList.remove("cursorDark");
        mousePointer.classList.add("cursorLight");
        animateFinalTalk = false;


        arr = document.getElementById("navigationArrow")
        arr.style.color = clrLight;
    } else if (this.scrollY >= 6000 & this.scrollY < 6900) {
        let elementsToChange = document.getElementsByClassName("change_color_on_scroll");
        let clrDrk = getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color-dark');
        elementsToChange[0].style.color = clrDrk;
        elementsToChange[1].style.color = clrDrk;
        elementsToChange[2].style.color = clrDrk;
        elementsToChange[3].style.color = clrDrk;
        animateFinalTalk = true;

        mousePointer.classList.remove("cursorLight");
        mousePointer.classList.add("cursorDark");


        arr = document.getElementById("navigationArrow")
        arr.style.color = clrDrk;
    } else if (this.scrollY > 6900) {
        let elementsToChange = document.getElementsByClassName("change_color_on_scroll");
        backgroundGradient0 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-0-8');
        backgroundGradient100 = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-background-100-8');
        updateGradient(null);




        let clrLight = getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color-light');
        elementsToChange[0].style.color = clrLight;
        elementsToChange[1].style.color = clrLight;
        elementsToChange[2].style.color = clrLight;
        elementsToChange[3].style.color = clrLight;

        mousePointer.classList.remove("cursorDark");
        mousePointer.classList.add("cursorLight");

        animateFinalTalk = false;

        arr = document.getElementById("navigationArrow")
        arr.style.color = clrLight;

    } else {
        // let elementsToChange = document.getElementsByClassName("change_color_on_scroll");

        // // changin background --------------
        // backgroundGradient0 = getComputedStyle(document.documentElement)
        //     .getPropertyValue('--header-background-0');
        // backgroundGradient100 = getComputedStyle(document.documentElement)
        //     .getPropertyValue('--header-background-100');

        // updateGradient(null);
        // // --------------------------------

        // let clrLight = getComputedStyle(document.documentElement)
        //     .getPropertyValue('--text-color-light')
        // elementsToChange[0].style.color = clrLight;
        // elementsToChange[1].style.color = clrLight;
        // elementsToChange[2].style.color = clrLight;
        // elementsToChange[3].style.color = clrLight;

        // animatePersonalInfo = false;

    }
}
// ----------------------------- HEADER ANIMATION-----------------------

let stringList = ["Learner", "Developer", "Python Programmer", "Freelancer", "Full Stack Developer"];
let stringListLength = stringList.length;
let selectedString = 0

let currentString = stringList[0];
let currentLength = currentString.length;
let printedCharacters = 0;
let typing = true
    // let cursor = "|"

function update() {
    if ((printedCharacters <= currentLength) && (typing)) {
        document.getElementById("typingTextHeading").innerHTML = currentString.substring(0, printedCharacters)
        printedCharacters += 1;
    } else if ((printedCharacters > currentLength) && (typing)) {
        typing = false;
    } else if ((printedCharacters >= 0) && (!typing)) {
        document.getElementById("typingTextHeading").innerHTML = currentString.substring(0, printedCharacters)
        printedCharacters -= 1;

    } else {
        selectedString = (selectedString + 1) % stringListLength;
        currentString = stringList[selectedString];
        currentLength = currentString.length;
        printedCharacters = 0;
        typing = true;
    }
}

setInterval(update, 150);




// CODE RELATED TO SCROLLING -------------------------------
function scrollDown() {
    if ((currentScrollPosition < (scrollPositions.length - 1)) && (!scrollMoving)) {

        currentScrollPosition += 1;
        currentScrollPosition = currentScrollPosition % scrollPositions.length;
        document.documentElement.scrollTop = scrollPositions[currentScrollPosition];
    }

}

function scrollUp() {
    if ((currentScrollPosition > 0) && (!scrollMoving)) {

        currentScrollPosition -= 1;
        document.documentElement.scrollTop = scrollPositions[currentScrollPosition];
    }

}

function detectMouseWheelDirection(e) {
    console.log(currentScrollPosition);
    if (!scrollMoving) {
        var delta = null,
            direction = false;
        if (!e) { // if the event is not provided, we get it from the window object
            e = window.event;
        }
        if (e.wheelDelta) { // will work in most cases
            delta = e.wheelDelta / 60;
        } else if (e.detail) { // fallback for Firefox
            delta = -e.detail / 2;
        }
        if (delta !== null) {
            direction = delta > 0 ? 'up' : 'down';

            if (delta > 0) {
                // console.log("mousaeUp");
                scrollUp()
                scrollMoving = true;
            } else {
                // console.log("mouseDown");
                scrollDown();
                scrollMoving = true;
            }
        }
        setTimeout(() => {
            scrollMoving = false;

        }, 1000);
    }

}

document.onmousewheel = function(e) {

    detectMouseWheelDirection(e)
};
if (window.addEventListener) {
    document.addEventListener('DOMMouseScroll', function(e) {
        // detect direction logic
        detectMouseWheelDirection(e)
    });
}

document.body.addEventListener("keydown", e => {
    if (e.code == "ArrowDown") {
        scrollDown();
    } else if (e.code == "ArrowUp") {
        scrollUp();
    }
    scrollMoving = true;
    setTimeout(() => {
        scrollMoving = false;
    }, 1000);

});
// ---------------- functions to animate perfornal in formation
let stringListAbout = ["Hi                 ", "I am Jimmy      ", "A Pythonist     ", "A Coder    ", "Web Developer     ", "looking for opportunities to improve skills.               ", "Interested in learning new technologies and try them.           ", "here is some of my work     "]
let stringListLengthAbout = stringListAbout.length;
let selectedStringAbout = 0

let currentStringAbout = stringListAbout[0];
let currentLengthAbout = currentStringAbout.length;
let printedCharactersAbout = 0;
let typingAbout = true


function updatePersonalInfoAnimation() {
    if (animatePersonalInfo) {
        if ((printedCharactersAbout <= currentLengthAbout) && (typingAbout)) {
            document.getElementById("typingAboutMe").innerHTML = currentStringAbout.substring(0, printedCharactersAbout)
            printedCharactersAbout += 1;

        } else if ((printedCharactersAbout > currentLengthAbout) && (typingAbout)) {
            typingAbout = false;

        } else {
            selectedStringAbout = (selectedStringAbout + 1) % stringListLengthAbout;
            currentStringAbout = stringListAbout[selectedStringAbout];
            currentLengthAbout = currentStringAbout.length;
            printedCharactersAbout = 0;
            typingAbout = true;

        }
    }
}

setInterval(updatePersonalInfoAnimation, 70);

// Python Project information  box javascript


function expandPythonInfo() {
    el = document.querySelector(".anotherSection .ProjectInfoDetail")
    el.style.display = "flex"
    el.style.animation = "ExpandProjectInformation 1s"
    el.style.animationFillMode = "forwards"

    ar = document.querySelector(".anotherSection .ProjectInfoArrow i");
    ar.style.animation = "infoArrowRotateBack 1s"
    ar.style.animationFillMode = "forwards"

}

function shrinkPythonInfo() {
    el = document.querySelector(".anotherSection .ProjectInfoDetail")
    el.style.animation = "ShrinkProjectInformation 500ms"
    el.style.animationFillMode = "forwards"
    setTimeout(() => {
        el.style.display = "none"
    }, 500);
    ar = document.querySelector(".anotherSection .ProjectInfoArrow i");
    ar.style.animation = "infoArrowRotateFront 1s"
    ar.style.animationFillMode = "forwards"
    document.querySelector(".anotherSection .ProjectInfoArrow").style.animation = "none";
}

// Ai and data science section information box

function expandAiInfo() {
    el = document.querySelector(".aiDataScienceSection .ProjectInfoDetail")
    el.style.display = "flex"
    el.style.animation = "ExpandProjectInformation 1s"
    el.style.animationFillMode = "forwards"

    ar = document.querySelector(".aiDataScienceSection .ProjectInfoArrow i");
    ar.style.animation = "infoArrowRotateBack 1s"
    ar.style.animationFillMode = "forwards"
}

function shrinkAiInfo() {
    el = document.querySelector(".aiDataScienceSection .ProjectInfoDetail")
    el.style.animation = "ShrinkProjectInformation 500ms"
    el.style.animationFillMode = "forwards"
    setTimeout(() => {
        el.style.display = "none"
    }, 500);
    ar = document.querySelector(".aiDataScienceSection .ProjectInfoArrow i");
    ar.style.animation = "infoArrowRotateFront 1s"
    ar.style.animationFillMode = "forwards"
    document.querySelector(".aiDataScienceSection .ProjectInfoArrow").style.animation = "none";
}


// Websection

function expandWebInfo() {
    el = document.querySelector(".webSection .ProjectInfoDetail")
    el.style.display = "flex"
    el.style.animation = "ExpandProjectInformation 1s"
    el.style.animationFillMode = "forwards"

    ar = document.querySelector(".webSection .ProjectInfoArrow i");
    ar.style.animation = "infoArrowRotateBack 1s"
    ar.style.animationFillMode = "forwards"
}

function shrinkWebInfo() {
    el = document.querySelector(".webSection .ProjectInfoDetail")
    el.style.animation = "ShrinkProjectInformation 500ms"
    el.style.animationFillMode = "forwards"
    setTimeout(() => {
        el.style.display = "none"
    }, 500);
    ar = document.querySelector(".webSection .ProjectInfoArrow i");
    ar.style.animation = "infoArrowRotateFront 1s"
    ar.style.animationFillMode = "forwards"
    document.querySelector(".webSection .ProjectInfoArrow").style.animation = "none";
}

function expandCertificateInfo() {
    el = document.querySelector(".certificateSection .ProjectInfoDetail")
    el.style.display = "flex"
    el.style.animation = "ExpandProjectInformation 1s"
    el.style.animationFillMode = "forwards"

    ar = document.querySelector(".certificateSection .ProjectInfoArrow i");
    ar.style.animation = "infoArrowRotateBack 1s"
    ar.style.animationFillMode = "forwards"
}

function shrinkCertificateInfo() {
    el = document.querySelector(".certificateSection .ProjectInfoDetail")
    el.style.animation = "ShrinkProjectInformation 500ms"
    el.style.animationFillMode = "forwards"
    setTimeout(() => {
        el.style.display = "none"
    }, 500);
    ar = document.querySelector(".certificateSection .ProjectInfoArrow i");
    ar.style.animation = "infoArrowRotateFront 1s"
    ar.style.animationFillMode = "forwards"
    document.querySelector(".certificateSection .ProjectInfoArrow").style.animation = "none";
}


setInterval(() => {
    document.getElementById("ME").style.animation = "BabyRun 10s"
    document.getElementById("ME").style.opacity = "1";
    document.getElementById("ME").src = "data/babyFace.png"
    document.getElementById("ME").style.height = "50px"
    document.getElementById("ME").style.top = "4240px"
    setTimeout(() => {
        document.getElementById("ME").src = "data/teenFace.png"

        setTimeout(() => {
            document.getElementById("ME").src = "data/adultFace.png"
            setTimeout(() => {
                document.getElementById("ME").style.animation = "none";
                document.getElementById("ME").style.opacity = "0";

            }, 2500);



        }, 3000);
    }, 3500);

}, 10000);

function showSchoolinfo() {
    document.querySelector(".schoolInfoPopup").style.display = "block";
}

function hideSchoolinfo() {
    document.querySelector(".schoolInfoPopup").style.display = "none";
}

function showHSchoolinfo() {
    document.querySelector(".hschoolInfoPopup").style.display = "block";
}

function hideHSchoolinfo() {
    document.querySelector(".hschoolInfoPopup").style.display = "none";
}

function showCollageinfo() {
    document.querySelector(".collageInfoPopup").style.display = "block";
}

function hideCollageinfo() {
    document.querySelector(".collageInfoPopup").style.display = "none";
}


function changeImage(number) {
    console.log(document.querySelector("#certiViewer img"));
    document.querySelector("#certiViewer img").src = "data/certificates/" + number + ".png"
}

function certificateOpen() {
    window.open(document.querySelector("#certiViewer img").src);
}



// Animate final talk

ttstringListAbout = ["Oh Hi again          ", "thanks for staying.          ", "Seriously,\t\t\t it means a lot.    ", "One last favor?      ", "Can you please give some feeback to this website?    ", "You can contact me using page below.  ", "Good Day👍 😀   "]
ttstringListLengthAbout = ttstringListAbout.length;
ttselectedStringAbout = 0

ttcurrentStringAbout = ttstringListAbout[0];
ttcurrentLengthAbout = ttcurrentStringAbout.length;
ttprintedCharactersAbout = 0;
tttypingAbout = true


function updateFinalInfoAnimation() {
    if (animateFinalTalk) {
        if ((ttprintedCharactersAbout <= ttcurrentLengthAbout) && (tttypingAbout)) {
            document.getElementById("typingFinalTalk").innerHTML = ttcurrentStringAbout.substring(0, ttprintedCharactersAbout)
            ttprintedCharactersAbout += 1;

        } else if ((ttprintedCharactersAbout > ttcurrentLengthAbout) && (tttypingAbout)) {
            tttypingAbout = false;

        } else {
            ttselectedStringAbout = (ttselectedStringAbout + 1) % ttstringListLengthAbout;
            ttcurrentStringAbout = ttstringListAbout[ttselectedStringAbout];
            ttcurrentLengthAbout = ttcurrentStringAbout.length;
            ttprintedCharactersAbout = 0;
            tttypingAbout = true;

        }
    }
}

setInterval(updateFinalInfoAnimation, 70);

// --------------- WEB PROJECT POSITION -----
positionsWeb = [0, 200];

webSectionPosition = 0;
sign = 1
setInterval(() => {
    if (animateTiles) {
        sec = document.querySelector(".webSection .webTileContainer");

        if (webSectionPosition == 1) {
            sign = -1
        } else if (webSectionPosition == 0) {
            sign = 1
        }
        sec.scrollBy(0, 200 * sign);
        webSectionPosition += sign;
    }
}, 2000);