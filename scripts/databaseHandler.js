function loadData(){
    /*
    ====================================
               Load loading 
    ====================================
    */
    for(var i = 0; i < 10; i++){
        let newSpan = document.createElement('span');
        newSpan.innerHTML = "Loading";
        document.querySelector(".mq-loading-items").appendChild(newSpan);
    }
    copyMarquee("loading");


    /*
    ====================================
               Load Occupation
    ====================================
    */
    // Fetch Occupation
    fetch("https://yohanesrian.github.io/portofolio_data/occup.json")
    .then(response => response.json())
    .then(data => getOccup(data));

    function getOccup(data) {
        for(var i = 0; i < 6; i++){
            for(let item of data.occup){
                let newSpan = document.createElement('span');
                newSpan.innerHTML = item.occup;
                document.querySelector(".mq-occup-items").appendChild(newSpan);
            }
        }
        copyMarquee("occup");
    }


    /*
    ====================================
                Load Ability
    ====================================
    */
    // Fetch Ability
    fetch("https://yohanesrian.github.io/portofolio_data/ability.json")
    .then(response => response.json())
    .then(data => getAbility(data));

    function getAbility(data) {
        for(var i = 0; i < 6; i++){
            for(let item of data.ability){
                let newSpan = document.createElement('span');
                newSpan.innerHTML = item.ability;
                document.querySelector(".mq-ability-items").appendChild(newSpan);
            }
        }
        copyMarquee("ability");
    }


    /*
    ====================================
               Load Name 
    ====================================
    */
    for(var i = 0; i < 5; i++){
        let newSpan = document.createElement('span');
        newSpan.innerHTML = "Febriant Yapson";
        document.querySelector("#top .mq-name-items").appendChild(newSpan);
    }
    for(var i = 0; i < 5; i++){
        let newSpan = document.createElement('span');
        newSpan.innerHTML = "Febriant Yapson";
        document.querySelector("#bottom .mq-name-items").appendChild(newSpan);
    }
    var copy1 = document.querySelector("#top .mq-name-items").cloneNode(true);
    document.querySelector("#top .mq-content-name").appendChild(copy1);
    var copy2 = document.querySelector("#bottom .mq-name-items").cloneNode(true);
    document.querySelector("#bottom .mq-content-name").appendChild(copy2);


    /*
    ====================================
              Load Achievement 
    ====================================
    */
    for(var i = 0; i < 7; i++){
        let newSpan = document.createElement('span');
        newSpan.innerHTML = "My Achievement";
        document.querySelector(".mq-achievement-items").appendChild(newSpan);
    }
    copyMarquee("achievement");

    // Fetch achievement
    fetch("https://yohanesrian.github.io/portofolio_data/achievement.json")
    .then(response => response.json())
    .then(data => getAchievement(data));

    function getAchievement(data) {
        for(let item of data.achievement){
            let picture = document.createElement('img');
            picture.src = item.picture;
            picture.loading = "eager";
            picture.classList.add("certificate");
            document.querySelector(".certificate-container #track").appendChild(picture);
        }
        addAchievementAnimationSlider();
    }


    /*
    ====================================
                Load Project 
    ====================================
    */
    for(var i = 0; i < 10; i++){
        let newSpan = document.createElement('span');
        newSpan.innerHTML = "My Project";
        document.querySelector(".mq-project-items").appendChild(newSpan);
    }
    copyMarquee("project");

    // Fetch Project
    fetch("https://yohanesrian.github.io/portofolio_data/project.json")
    .then(response => response.json())
    .then(data => getProject(data));

    function getProject(data) {
        for(let item of data.project){
            let newProject = document.createElement('div');
            newProject.className = "project";
            newProject.innerHTML = `
            <div class="front">
                <img src="` + item.picture + `">
            </div>
            <div class="back">
                <div class="project-info">
                    <div class="text-group">
                        <span class="text-2 yellowTxt">` + item.name + `</span>
                        <p class="text-5 altYellowTxt">
                            <span>` + item.year + `</span>
                            <span>&nbsp&nbsp|&nbsp&nbsp</span>
                            <span>` + item.as + `</span>
                        </p>
                    </div>
                    <div class="description">
                        <p class="text-4 whiteTxt">`
                            + item.description +
                        `</p>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="` + item.link + `">
                        <button class="project-btn">Check It Out</button>
                    </a>
                </div>
            </div>
            `;

            document.querySelector(".project-container #track").appendChild(newProject);
        }
        addProjectAnimation();
    }


    /*
    ====================================
              Load Contact 
    ====================================
    */
    for(var i = 0; i < 8; i++){
        let newSpan = document.createElement('span');
        newSpan.innerHTML = "Contact Me";
        document.querySelector(".mq-contact-items").appendChild(newSpan);
    }
    copyMarquee("contact");



    
    // When the page is fully loaded
    document.addEventListener('DOMContentLoaded', function(){ 
        setTimeout(() => {
            removePreload();
            setTimeout(() => {removeElementsByClass("preload");}, 2000);
            setTimeout(() => {document.body.classList.remove("lockScroll");}, 5000);
            homeAnimation();
        }, 1500);
   });
}
