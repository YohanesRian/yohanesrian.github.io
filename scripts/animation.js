/*
====================================
        Preload Animation
====================================
*/

function removePreload(){
    gsap.to(".loading", {
        duration: 0.3,
        delay: 0,
        height: "0",
    });
    gsap.to(".mq-loading-items", {
        duration: 0,
        delay: 0.3,
        color: getComputedStyle(document.documentElement).getPropertyValue('--yellow'),
    });
    gsap.from(".loading", {
        delay: 0.3,
        duration: 0,
        height: "0",
    });
    gsap.to(".preload", {
        duration: 1,
        delay: 0.6,
        bottom: "100vh"
    });
}


/*
====================================
           Home Animation
====================================
*/

function homeAnimation(){
    gsap.from(".image-me", {
        delay: .5,
        duration: 3.5,
        right: "100vw",
        ease: Power4.easeInOut
    });
    gsap.from(".marquee-occup", {
        delay: 2.5,
        duration: 1.5,
        height: "0",
        ease: Power4.easeInOut
    });
    gsap.from(".marquee-ability", {
        delay: 2.3,
        duration: 1.5,
        top: "-20vh",
        ease: Power4.easeInOut
    });
    gsap.from("#top .marquee-name", {
        delay: 1.5,
        duration: 2,
        top: "70vh",
        ease: Power4.easeInOut
    });
    gsap.from("#bottom .marquee-name", {
        delay: 1.5,
        duration: 2,
        paddingBottom: "80vh",
        ease: Power4.easeInOut
    });
    gsap.from("#home .text-group", {
        delay: 2.5,
        duration: 3,
        top: "100vh",
        ease: Power4.easeOut
    });
    gsap.from("header", {
        delay: 4,
        duration: 2,
        top: "-18vh",
        ease: Power4.easeOut
    });
}


/*
====================================
          Home to About Me
====================================
*/

var hotome = gsap.timeline({scrollTrigger:{
    trigger: "#home",
    start: "50% 50%",
    end: "150% 50%",
    scrub: .5,
    pin: true
}});
hotome.to("#aboutme",{height: "100vh",},'t1')
.to("#top",{top: "-50%",},'t1')
.to("#bottom",{bottom: "-50%",},'t1')
.to("#top .image-me",{bottom: "-105vh",},'t1')
.to("#bottom .image-me",{bottom: "45vh",},'t1')
.to(".navbar-1",{
    "--navbar-bg": getComputedStyle(document.documentElement).getPropertyValue('--black'),
    "--navbar-text": getComputedStyle(document.documentElement).getPropertyValue('--white'),
    "--navbar-bar": getComputedStyle(document.documentElement).getPropertyValue('--yellow')
},'t1')
.to("#home .text-group",{top: "16vh",},'t1')
.from("#aboutme .text-group-2 .text-1",{height: "0vh", color: getComputedStyle(document.documentElement).getPropertyValue('--black')},'t2')
.from("#aboutme .text-group-2 .text-3",{color: getComputedStyle(document.documentElement).getPropertyValue('--black')},'t2');


/*
====================================
           Achieveement
====================================
*/

function addAchievementAnimationSlider(){
    var achievement = gsap.timeline({scrollTrigger:{
        trigger: "#achievement",
        start: "0% 100%",
        end: "100% 100%",
        scrub: .5
    }});
    
    achievement.to("#aboutme .text-group-2",{top: "60%"},'a1')
    .to("#aboutme .image-wrapper .image-me",{bottom: ".5vmin" },'a1')
    .to("#aboutme .image-wrapper .image-me-bg",{bottom: "0"},'a1')
    .to("#aboutme .image-wrapper .image-cropper",{bottom: "0"},'a1')
    .from("#achievement .marquee-achievement",{marginTop: "0vh", height: "0"},'a2')
    .from(".certificate-container #track",{marginLeft: "100%", left: "100%"},'a3')
    .from(".certificate-container #track .certificate",{width: "0"},'a3');

    /*
    -------------------------------
        Smooth image slider       
    -------------------------------
    */

    const slider = document.querySelector('.certificate-container #track');
    const sliderImg = document.querySelectorAll('.certificate-container #track .certificate');
    const sliderArea = document.querySelector('#achievement');
    let mouseDown = false;
    let startX = 0, lastX = 0, newX = 0;

    sliderImg.forEach(image => {
        image.animate({width: 'auto'}, 
                      {duration: 500, fill: "forwards"});
    });

    // /*~~~~~~ Mobile ~~~~~~*/
    slider.addEventListener("scroll", function(){
        let scrollPos = Math.round(slider.scrollLeft);
        let scrollWidth = Math.round(slider.scrollWidth - slider.clientWidth);
        var result = 100 - Math.round(scrollPos * 100 / scrollWidth);
        sliderImg.forEach(image => {
            image.animate({
                objectPosition: result + '%'
                }, {duration: 500, fill: "forwards"});
        });
    });


    /*~~~~~~ Desktop ~~~~~~*/
    let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX;
    };
    let stopDragging = function (event) {
        mouseDown = false;
        lastX = newX;
    };

    sliderArea.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if(!mouseDown) { return; }
        const mouseDelta = parseFloat(startX) - e.pageX,
                maxDelta = window.innerWidth / 2;
        const result = mouseDelta * 100 / maxDelta * -1;
        newX = Math.max(Math.min((result + lastX), 0), -100);

        slider.animate({transform: 'translateX(' + newX + '%)'}, {duration: 1200, fill: "forwards"});

        sliderImg.forEach(image => {
            image.animate({objectPosition: (100 + newX) + '%'}, 
                          {duration: 1200, fill: "forwards"});
        });
    });

    // Add the event listeners
    sliderArea.addEventListener('mousedown', startDragging);
    sliderArea.addEventListener('mouseup', stopDragging);
}


/*
====================================
              Project
====================================
*/

function addProjectAnimation(){
    var project = gsap.timeline({scrollTrigger:{
        trigger: "#project",
        start: "10% 100%",
        end: "100% 100%",
        scrub: .5
    }});

    project.to(".certificate-container",{marginTop: "40vh", marginBottom: "0vh"},'p1')
    .to("#achievement .marquee-achievement",{top: "15vh"},'p1')
    .from("#project .marquee-project",{marginTop: "0vh", height: "0"},'p1')
    .from(".project-container",{marginLeft: "100%"});


    let sections = gsap.utils.toArray(".project");
    gsap.to(sections, {
    xPercent: -100 * (sections.length + 1) ,
    ease: "none",
    scrollTrigger: {
        trigger: "#project",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector("#project").offsetWidth
    }
    });


    let image_onclick = document.querySelectorAll('.project-container #track .project .front');
    image_onclick.forEach(image => {
        image.addEventListener('click', e => {
            if(image.classList.contains('project-active')){
                image.classList.remove('project-active');
            }
            else{
                image.classList.add('project-active');
            }
        });
    });
    
}


/*
====================================
              Contact
====================================
*/

if(!checkMobile()){
    let calibrate_scroll_after_horizontal = Math.round(((window.innerWidth / window.innerHeight) * -100) + 100);
    var contact = gsap.timeline({scrollTrigger:{
        trigger: "#contact",
        start: "0% " + calibrate_scroll_after_horizontal +"%",
        end: "70% " + calibrate_scroll_after_horizontal +"%",
        scrub: .5
    }});
    
    contact.to(".project-container",{marginRight: "150vw"}, 'c1')
    .to("#project .marquee-project",{marginTop: "20vh"},'c2')
    .to("#project .marquee-project",{marginTop: "30vh", height: "0"},'c3')
    .from("#contact .marquee-contact",{marginTop: "0vh", height: "0"},'c3')
    .from(".contact-info .text-group",{marginTop: "50vh"},'c4');
}


/*
====================================
            Marquee Area
====================================
*/

function copyMarquee(className){
    var copy = document.querySelector(".mq-".concat(className.concat("-items"))).cloneNode(true);
    document.querySelector(".mq-content-".concat(className)).appendChild(copy);
};



/*
================================================
            Check Browser Device
================================================
*/
function checkMobile(){
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}