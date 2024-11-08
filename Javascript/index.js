
let navigation = document.getElementsByClassName("navigationBar")[0];
let heroSection = document.querySelector(".hero-section-main");
let charactersticsSection = document.querySelector(".characterstics-main");
let contributionsSection = document.querySelector('.contributions-main');
let factsSection = document.querySelector(".facts-main");
let factsInnerSection = document.querySelector(".facts");

function onLoading(){

    // ---------------------HOME PAGE----------------
    // creating a navigation bar:

    let navBarContainer = document.createElement('div');
    navBarContainer.setAttribute('class', 'navbar');
    navBarContainer.innerHTML = `  <a href="index.html" style="text-decoration: none;">
          <div class="logo-txt">
            <h2>The Green</h2>
            <h2>Trees Initiative</h2>
          </div>
        </a>
        <div class="about">
          <ul style="list-style: none">
            <li><a href="./about.html" >About us</a></li>
            <li><a href="./stories.html" >Our stories</a></li>
            <li><a href="./eventsandnews.html" >Events and news</a></li>
          </ul>
        </div>
        <i class="fa fa-navicon nav-icon" onclick="navIcon()"></i>
        <button class="donate-btn"><span>Donate Today</span></button>
      `;

      navigation.append(navBarContainer);



    //   creating the hero section.

    heroSection.innerHTML = `<div class="action-box">
        <p>TAKE ACTION</p>
      </div>
      <div class="hero-img"></div>
      <div class="hero-section">
        <div class="hero-div1">
          <div class="hero-sub-div1">
            <div class="issue-box">
              <h4>THE ISSUE</h4>
            </div>

            <div class="content">
              <h1 class="hero-heading-text">
                Climate change poses the biggest threat to women in developing
                nations
              </h1>

              <a href="#" target="_blank"
                >Read more about environmental and social cause</a
              >
            </div>
          </div>
        </div>
        <div class="hero-div2">
          <h1>#STOP CLIMATE CHANGE</h1>
        </div>
      </div>`;


    // Creating the characterstics section

    charactersticsSection.innerHTML = `<article class="characterstics">
        <div>
          <h1>Learn</h1>
          <p>Get the facts about this issue</p>
        </div>
        <div>
          <h1>Volunteer</h1>
          <p>Find out about upcoming events that need your help</p>
        </div>
        <div>
          <h1>Share</h1>
          <p>Let your social media networks know about this important cause.</p>
        </div>
        <div>
          <h1>Donate</h1>
          <p>Help us raise money to make a big difference with the issue</p>
        </div>
      </article>`;


    //   creating the contricutions sections

    let contributions = document.createElement('div');
    contributions.setAttribute('class', 'contributions');
    
    let contributionsStr = `<div class="what-we-do">
          <p>WHAT WE DO</p>
    </div>
    <div class="contributions-heading">
          <h1>
            Our mission is to create sustainable work for women in developing
            nations while helping to slow climate change.
          </h1>
        </div>
    `;

    contributions.innerHTML = contributionsStr;

    let contributionsData = [{
        img: "./assets/home/tree-planting@3x.png",
        title: "Tree Planting Initiatives",
        

    }, {
        img: "./assets/home/education-training@3x.png",
        title: "Education and Training",
    }, {
        img: "./assets/home/advocacy@3x.png",
        title: "Advocacy and Campaigning",
    }]

    let contributionsCard = ''
    for(let i = 0; i<contributionsData.length; i++){
        const {img, title} = contributionsData[i];
        contributionsCard+=`<div class="contributions-card">
            <div class="contributions-card-div">
              <img
                src=${img}
                alt="${title}_photo"
                class="contributions-card-img"
              />
              <div class="card-content">
                <div style="display: flex; flex-direction: column;">
                  <h1>Tree Planting Initiatives</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero repellendus possimus, incidunt earum ab adipisci. Omnis ducimus nostrum vitae consequuntur saepe veniam ea totam recusandae nam expedita. Expedita, blanditiis maxime?</p>
                </div>
                <div>
                  <button class="read-more">Read More</button>
                </div>
              </div>
            </div>
          </div>`

    }



    let contributionCardContainer = document.createElement('div');contributionCardContainer.setAttribute('class', "contributions-card-main");
    contributionCardContainer.innerHTML = `
    ${contributionsCard} 
    `

    contributions.appendChild(contributionCardContainer);

    if(contributionsSection){
        contributionsSection.append(contributions);
    }


    // creating a facts section
    
    let factsMain = document.createElement('div');
    factsMain.setAttribute('class','facts-main')



    const factData = [{
        heading: "3 out of 4",
        description: "People living in poverty depend on agriculture for survival"
    },
    {
        heading: "100 million+",
        description: "Number of people living in poverty due to climate change by 2030"
    },
    {
        heading: "30%",
        description: "How high crop yield losses could go by the year 2080"
    },{
        heading: "200 million +",
        description: "Number of refugees dealing with food shortages by the year 2050"
    }]



    let dyk = `<div class="did-you-know">
          <p>DID YOU KNOW?</p>
          </div>`;
          
    for(let j = 0; j<factData.length; j++){
        let factsStr = "";

        const {heading, description} = factData[j];

        if(j == 0){
            let facts = document.createElement('div');
            facts.setAttribute('class', 'fact-main');
            factsStr+=`${dyk}
             <div class="fact">
                  <div class="fact-sub">
                    <h1>${heading}</h1>
                    <div class="fact-icon">
                      <img
                        src="./assets/home/iconmonstr-twitter-1@2x.png"
                        alt="twitter_icon"
                        class="fact-img-icon"
                      />
                    </div>
                  </div>
                  <div class="fact-sub">
                    <p>
                      ${description}
                    </p>
                    <div class="fact-icon">
                      <img
                        src="./assets/home/iconmonstr-facebook-1@2x.png"
                        alt="fb_icon"
                        class="fact-img-icon"
                      />
                    </div>
                  </div>
                </div>
    
                <div class="fact-sm">
                  <div class="fact-sub-sm">
                    <h1>${heading}</h1>
                    <p>
                    ${description}
                    </p>
                  </div>
                  <div class="fact-sub-sm2">
                    <div class="fact-icon-sm">
                      <img
                        src="./assets/home/iconmonstr-twitter-1@2x.png"
                        alt="twitter_icon"
                        class="fact-img-icon-sm"
                      />
                    </div>
                    <div class="fact-icon-sm">
                      <img
                        src="./assets/home/iconmonstr-facebook-1@2x.png"
                        alt="fb_icon"
                        class="fact-img-icon-sm"
                      />
                    </div>
                  </div>
            </div>`;

            facts.innerHTML = factsStr;
            factsInnerSection.append(facts);
            factsStr = "";
        }else {
            let facts = document.createElement('div');
            facts.setAttribute('class','fact-main');
            factsStr+=`
             <div class="fact">
                  <div class="fact-sub">
                    <h1>${heading}</h1>
                    <div class="fact-icon">
                      <img
                        src="./assets/home/iconmonstr-twitter-1@2x.png"
                        alt="twitter_icon"
                        class="fact-img-icon"
                      />
                    </div>
                  </div>
                  <div class="fact-sub">
                    <p>
                      ${description}
                    </p>
                    <div class="fact-icon">
                      <img
                        src="./assets/home/iconmonstr-facebook-1@2x.png"
                        alt="fb_icon"
                        class="fact-img-icon"
                      />
                    </div>
                  </div>
                </div>
    
                <div class="fact-sm">
                  <div class="fact-sub-sm">
                    <h1>${heading}</h1>
                    <p>
                    ${description}
                    </p>
                  </div>
                  <div class="fact-sub-sm2">
                    <div class="fact-icon-sm">
                      <img
                        src="./assets/home/iconmonstr-twitter-1@2x.png"
                        alt="twitter_icon"
                        class="fact-img-icon-sm"
                      />
                    </div>
                    <div class="fact-icon-sm">
                      <img
                        src="./assets/home/iconmonstr-facebook-1@2x.png"
                        alt="fb_icon"
                        class="fact-img-icon-sm"
                      />
                    </div>
                  </div>
            </div>`;

            facts.innerHTML = factsStr;
            factsInnerSection.appendChild(facts);
            factsStr = "";
        }

        factsSection.append(factsInnerSection);





    }

    


    





}


document.addEventListener('DOMContentLoaded', () => {
    onLoading();
})





// navbar functionality

function navIcon() {
    let nav = document.querySelector("#nav-toggle");
    if(nav.className === "d-none"){
      nav.className = "nav-about"
    }else {
      nav.className = "d-none"
    }
}





