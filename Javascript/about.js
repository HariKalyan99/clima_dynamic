let navigation = document.getElementsByClassName("navigationBar")[0];
let abtHeroSection = document.querySelector(".abt-hero");
let missionSection = document.querySelector(".mission-main");
let ourTeamSection = document.querySelector(".team-main-container");
let ourTeamSectionSm = document.querySelector(".team-main-container-sm");
let impactSection = document.querySelector(".impact-main");
let legacySection = document.querySelector(".legacy-main");

function navIcon() {
  let nav = document.querySelector("#nav-toggle");
  if (nav.className === "d-none") {
    nav.className = "nav-about";
  } else {
    nav.className = "d-none";
  }
}

function whenAboutLoads() {
  let navBarContainer = document.createElement("div");
  navBarContainer.setAttribute("class", "navbar");
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
        <button class="donate-btn" onclick="donatePage()"><span>Donate Today</span></button>
      `;

  navigation.append(navBarContainer);

  // creating about-hero section

  let abtHeroMain = document.createElement("div");
  abtHeroMain.setAttribute("class", "abt-hero-main");
  abtHeroMain.innerHTML = `
    <div class="hero-container">
          <div class="hero-div2">
            <h1>#STOP CLIMATE CHANGE</h1>
          </div>

          <div class="hero-div-cover">
            <div class="hero-issue">
              <div class="issue-box">THE ISSUE</div>
              <div class="hero-quote">
                <h1>
                  We are an environmental organization that empowers
                  communities, particularly women, to conserve the environment
                  and improve livelihoods.
                </h1>
              </div>
            </div>
          </div>

          <!-- tab view -->
          <div class="hero-container-abt-md">
            <div class="issue-box">
              THE ISSUE
            </div>
            <div class="hero-container-main-abt-sm">
              <div class="hero-quote">
                <h1>
                  We are an environmental organization that empowers
                  communities, particularly women, to conserve the environment
                  and improve livelihoods.
                </h1>
              </div>
            </div>
          </div>
        </div>

    `;

  abtHeroSection.append(abtHeroMain);

  // creating the misson section

  let missionContainer = document.createElement("div");

  missionContainer.setAttribute("class", "mission");
  let missionStr = `<div class="mission-box">
          <p>MISSION & VALUES</p>
        </div>

        <div class="mission-heading">
          <h1>
            We strive for better environmental management, community
            empowerment, and livelihood improvement using tree-planting as an
            entry point.
          </h1>
        </div>`;
  missionContainer.innerHTML = missionStr;
  let missionGridContainer = document.createElement("div");
  missionGridContainer.setAttribute("class", "mission-grid");
  let missionArray = [
    {
      photo: "./assets/about-us/Icon person@2x.png",
      heading: "Stay open-minded",
    },
    {
      photo: "./assets/about-us/Icon earth@2x.png",
      heading: "Protect the Earth",
    },
    {
      photo: "./assets/about-us/Icon sun@2x.png",
      heading: "Stay optimistic",
    },
    {
      photo: "./assets/about-us/Icon heart@2x.png",
      heading: "Work from love",
    },
    {
      photo: "./assets/about-us/Icon hand@2x.png",
      heading: "Lend a hand",
    },
    {
      photo: "./assets/about-us/Icon flower@2x.png",
      heading: "Plant new seeds",
    },
    {
      photo: "./assets/about-us/Icon people@2x.png",
      heading: "Work together",
    },
    {
      photo: "./assets/about-us/Icon book@2x.png",
      heading: "Be an open book",
    },
  ];

  for (let i = 0; i < missionArray.length; i++) {
    const { photo, heading } = missionArray[i];
    let missionDiv = document.createElement("div");
    missionDiv.setAttribute("class", "grid-div");
    missionDiv.innerHTML = `
            <div>
              <img
                src="${photo}"
                alt="mission_icon"
                height="60"
              />
              <h1>${heading}</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, molestiae.
            </p>
        
        `;
    missionGridContainer.append(missionDiv);
  }

  missionContainer.append(missionGridContainer);
  missionSection.append(missionContainer);

  // Creating Our team section.

  let teamContainer = document.createElement("div");
  teamContainer.setAttribute("class", "team-container");

  let ourTeamContent = `
        <div class="our-team-box">
          <p>OUR TEAM</p>
        </div>

        <div class="about-team-main">
          <div>
            <h1>Meet the team of people making it happen.</h1>
          </div>
          <div>
            <p>
              Our leaders set our global direction, goals and strategies, and
              support nearly 500 team members working in more than 20 countries
              around the world.
            </p>
          </div>
        </div>
         <div class="meet-our-people">
         </div>
    `;
  teamContainer.innerHTML = ourTeamContent;
  ourTeamSection.append(teamContainer);

  let ourPeople = document.querySelector(".meet-our-people");
  let teamInfoArr = [
    {
      personPhoto:
        "./assets/about-us/Screen-Shot-2018-10-04-at-9.35.07-PM@2x.png",
    },
    {
      personPhoto:
        "./assets/about-us/Screen-Shot-2018-10-04-at-9.35.17-PM@2x.png",
    },
    {
      personPhoto:
        "./assets/about-us/Screen-Shot-2018-10-04-at-9.35.37-PM@2x.png",
    },
    {
      personPhoto:
        "./assets/about-us/Screen-Shot-2018-10-04-at-9.36.04-PM@2x.png",
    },
    {
      personPhoto:
        "./assets/about-us/Screen-Shot-2018-10-04-at-9.36.19-PM@2x.png",
    },
    {
      personPhoto:
        "./assets/about-us/Screen-Shot-2018-10-04-at-9.37.13-PM@2x.png",
    },
  ];

  for (let i = 0; i < teamInfoArr.length; i++) {
    const { personPhoto } = teamInfoArr[i];
    let meetMain = document.createElement("div");
    meetMain.setAttribute("class", "meet-main");
    meetMain.innerHTML = `
         <div class="name-tag">Persons Name, Title Goes Here</div>
            <div class="meet-img-div">
              <img
                src="${personPhoto}"
                alt="person_img"
                class="meet-img"
              />
            </div>
        `;
    ourPeople.append(meetMain);
  }

  teamContainer.append(ourPeople);
  ourTeamSection.append(teamContainer);

  // our team section for sm devices

  let teamContainerSm = document.createElement("div");
  teamContainerSm.setAttribute("class", "team-container-sm");
  teamContainerSm.innerHTML = `
        <div class="our-team-box-sm">
          <span>OUR TEAM</span>
        </div>
        <h1 class="our-team-heading">Meet the team of people making it happen</h1>

        <p>Our leaders set our global direction, goals, and startergies, and support nearly 500 team members working in more that 20 countries around the world</p>

        <div class="team-grid-sm">
          <div class="team-main-sm">
            <div class="team-person-img-sm">
              <img src="./assets/about-us/Screen-Shot-2018-10-04-at-9.35.07-PM@2x.png" alt="person-img" class="person-team-img-sm">
            </div>
            <div class="team-main-tag-sm">
              <span>Person Name,</span>
              <span>Title goes here</span>
            </div>
            
          </div>
          <div class="team-main-sm">
            <div class="team-person-img-sm">
              <img src="./assets/about-us/Screen-Shot-2018-10-04-at-9.35.17-PM@2x.png" alt="person-img" class="person-team-img-sm">
            </div>
            <div class="team-main-tag-sm">
              <span>Person Name,</span>
              <span>Title goes here</span>
            </div>
            
          </div>
          <div class="team-main-sm">
            <div class="team-person-img-sm">
              <img src="./assets/about-us/Screen-Shot-2018-10-04-at-9.35.37-PM@2x.png" alt="person-img" class="person-team-img-sm">
            </div>
            <div class="team-main-tag-sm">
              <span>Person Name,</span>
              <span>Title goes here</span>
            </div>
            
          </div>
          <div class="team-main-sm">
            <div class="team-person-img-sm">
              <img src="./assets/about-us/Screen-Shot-2018-10-04-at-9.36.04-PM@2x.png" alt="person-img" class="person-team-img-sm">
            </div>
            <div class="team-main-tag-sm">
              <span>Person Name,</span>
              <span>Title goes here</span>
            </div>
            
          </div>
          <div class="team-main-sm">
            <div class="team-person-img-sm">
              <img src="./assets/about-us/Screen-Shot-2018-10-04-at-9.36.19-PM@2x.png" alt="person-img" class="person-team-img-sm">
            </div>
            <div class="team-main-tag-sm">
              <span>Person Name,</span>
              <span>Title goes here</span>
            </div>
            
          </div>
          <div class="team-main-sm">
            <div class="team-person-img-sm">
              <img src="./assets/about-us/Screen-Shot-2018-10-04-at-9.37.13-PM@2x.png" alt="person-img" class="person-team-img-sm">
            </div>
            <div class="team-main-tag-sm">
              <span>Person Name,</span>
              <span>Title goes here</span>
            </div>
            
          </div>
      
            
          </div>
        </div>
    `;

  ourTeamSectionSm.append(teamContainerSm);

  // creating our impact section

  let impactMain = document.createElement("div");
  impactMain.setAttribute("class", "impact");
  impactMain.innerHTML = `
        <div class="impact-box">
          <p>OUR IMPACT</p>
        </div>

        <h1>
          We invest in a better tomorrow for the planet and all its people.
        </h1>

        <div class="impacts">

        </div>
    `;
  impactSection.append(impactMain);

  let impactDetail = [
    {
      head: "50",
      heading: "million trees planted in deforested areas",
    },
    {
      head: "200",
      heading: "women employed in communities",
    },
    {
      head: "25,000",
      heading: "volunteers have been mobilized",
    },
    {
      head: 50,
      heading: "different chapters internationally",
    },
  ];

  let impactsContainer = document.querySelector(".impacts");

  for (let i = 0; i < impactDetail.length; i++) {
    const { head, heading } = impactDetail[i];
    let impactsDiv = document.createElement("div");
    impactsDiv.setAttribute("class", "impacts-div");
    impactsDiv.innerHTML = `
            <h1>${head}</h1>
            <h1>${heading}</h1>
        `;
    impactsContainer.append(impactsDiv);
  }

  impactMain.appendChild(impactsContainer);
  impactSection.append(impactMain);

  // creating leagcy section

  let leagcyContainer = document.createElement("div");
  leagcyContainer.setAttribute("class", "legacy");
  leagcyContainer.innerHTML = `
    <h1>TAKE A LOOK BACK AT WHERE WE'VE BEEN</h1>
        <div class="legacy-header">
          <h1>TAKE A LOOK BACK AT WHERE WE'VE BEEN</h1>
          <div class="right-arrow">
            <span>&rarr;</span>
          </div>
        </div>
        
        <div class="year-contributions">
        </div>

        
    `;

  legacySection.append(leagcyContainer);

  let i = 0;
  let yearContributionsContainer = document.querySelector(
    ".year-contributions"
  );
  while (i < 3) {
    let yearCardMain = document.createElement("div");
    yearCardMain.setAttribute("class", "year-contributions-card-main");
    yearCardMain.innerHTML = `
            <div class="year-box">2018</div>
            <div class="right-arrow">
              <span>&rarr;</span>
            </div>
            <div class="year-contributions-card">
              <div class="year-img-box">
                <img src="./assets/about-us/Image@2x.png" alt="women_image" class="year-card-image" />
              </div>

              <div class="inner-year-card">
                <h1>Training to rural women and community-based organizations</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt harum iure earum quaerat quam quisquam neque, quos eos
                id nisi!
              </p>

              <button class="read-more">Read more</button>
              </div>
            </div>
        `;
    yearContributionsContainer.append(yearCardMain);
    i++;
  }

  let sliderSwitches = document.createElement("div");
  sliderSwitches.setAttribute("class", "legacy-slide-btn");
  sliderSwitches.innerHTML = `
      <div class="box" style="background-color: #afafaf"></div>
        <div class="box" style="background-color: #030303"></div>
    `;

  leagcyContainer.appendChild(yearContributionsContainer);
  leagcyContainer.appendChild(sliderSwitches);
  legacySection.append(leagcyContainer);
}

whenAboutLoads();
