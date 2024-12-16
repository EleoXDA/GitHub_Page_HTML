// Function to handle click events on content elements
function handleClick(e, contentId) {
  e.preventDefault(); // This prevents the default action, i.e., navigating to "#"
  showContent(contentId);
}

// Function to show a specific content element and hide others
function showContent(contentId) {
  const contentElements = document.getElementsByClassName("content");
  for (var i = 0; i < contentElements.length; i++) {
    if (contentElements[i].id === contentId) {
      contentElements[i].style.display = "block";
    } else {
      contentElements[i].style.display = "none";
    }
  }
  localStorage.setItem("contentId", contentId);
}

// Function to adjust column width based on viewport size
function adjustColumnWidth() {
  const viewportWidth = window.innerWidth;
  const columnElements = document.querySelectorAll(".column");
  const modalContent = document.querySelector(".modal-content");

  columnElements.forEach(function (column) {
    if (viewportWidth >= 1000) {
      column.style.flex = "0 0 850px";
      column.style.maxWidth = "850px";
      modalContent.style.flex = "0 0 750px";
      modalContent.style.maxWidth = "750px";
    } else if (viewportWidth <= 768) {
      column.style.flex = "0 0 100%";
      column.style.maxWidth = "720px";
      modalContent.style.flex = "0 0 90%";
      modalContent.style.maxWidth = "620px";
    } else {
      const width =
        720 /*width below 768px*/ +
        ((viewportWidth - 768) * 130) /*900-720*/ / 232; /*1000-768*/
      column.style.flex = "0 0 " + width + "px";
      column.style.maxWidth = width + "px";
      modalContent.style.flex = "0 0 " + width - 100 + "px";
      modalContent.style.maxWidth = width - 100 + "px";
    }
  });
}

// Function to handle scroll event and show/hide the "back to top" button
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

// Function to scroll to the top of the page smoothly
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Event listener for click on theme toggle image
document
  .getElementById("theme-toggle-img")
  .addEventListener("click", function () {
    // Get necessary elements by ID
    let root = document.documentElement;
    let themeToggleImage = document.getElementById("theme-toggle-img");
    let profile = document.getElementById("profpic");
    let xdaicon = document.getElementById("xda");
    let codewarsicon = document.getElementById("codewars");
    let googledevicon = document.getElementById("googledev");
    // Get the computed background color
    let bgColor = getComputedStyle(root).getPropertyValue("--color-background");
    // Check the current background color and toggle the theme accordingly
    if (bgColor.trim() == "#F2F2F2") {
      // Apply dark theme
      root.style.setProperty("--color", "#FFFFFF");
      root.style.setProperty("--color-background", "#121212");
      root.style.setProperty("--color-text", "#F2F2F2");
      root.style.setProperty("--color-button", "#a9a9a9");
      root.style.setProperty("--color-transparent", "rgba(256,256,256,0.3)");
      root.style.setProperty(
        "--color-button-text-transparent",
        "rgba(0,0,0,0.7)"
      );
      themeToggleImage.src = "images/lamp_on.png";
      profile.src = "images/profpicd.png";
      xdaicon.src = "images/xda-muted.png";
      codewarsicon.src = "images/codewars-muted.png";
      googledevicon.src = "images/google-developers-muted.png";
      // Set a timeout to change the theme toggle image back to off after 500ms
      setTimeout(function () {
        themeToggleImage.src = "images/lamp_off.png";
      }, 500);
      // Store the current theme in localStorage
      localStorage.setItem("theme", "dark");
    } else {
      // Set a timeout to change the theme toggle image back to on after 500ms
      setTimeout(function () {
        root.style.setProperty("--color", "#121212");
        root.style.setProperty("--color-background", "#F2F2F2");
        root.style.setProperty("--color-text", "#121212");
        root.style.setProperty("--color-button", "#888888");
        root.style.setProperty("--color-transparent", "rgba(0,0,0,0.3)");
        root.style.setProperty(
          "--color-button-text-transparent",
          "rgba(256,256,256,0.7)"
        );
        themeToggleImage.src = "images/lamp_on2.png";
        profile.src = "images/profpicb.png";
        xdaicon.src = "images/xda-muted-light.png";
        codewarsicon.src = "images/codewars-muted-light.png";
        googledevicon.src = "images/google-developers-muted-light.png";
      }, 500);
      themeToggleImage.src = "images/lamp_on.png";
      // Store the current theme in localStorage
      localStorage.setItem("theme", "light");
    }
  });

// Get necessary elements by ID
let tooltip = document.getElementById("tooltip");
let themeToggleImage = document.getElementById("theme-toggle-img");

// Add event listener to the theme toggle image when mouse enters
themeToggleImage.addEventListener("mouseenter", function () {
  // Show tooltip with animation
  tooltip.style.visibility = "visible";
  tooltip.style.opacity = "1";
  tooltip.style.transition = "all 0.25s ease-in";
  // Set a timeout to hide the tooltip after 2500ms
  setTimeout(function () {
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
    tooltip.style.transition = "all 0.4s ease";
  }, 2500);
});

// Add event listener to the theme toggle image when mouse leaves
themeToggleImage.addEventListener("mouseleave", function () {
  // Set a timeout to hide the tooltip after 500ms
  setTimeout(function () {
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
  }, 500);
});

// Add event listener when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the stored theme from localStorage
  let theme = localStorage.getItem("theme");
  let root = document.documentElement;
  let themeToggleImage = document.getElementById("theme-toggle-img");
  let profile = document.getElementById("profpic");
  let xdaicon = document.getElementById("xda");
  let codewarsicon = document.getElementById("codewars");
  let googledevicon = document.getElementById("googledev");
  let contentId = localStorage.getItem("contentId");
  if (theme === "dark") {
    // Apply dark theme
    root.style.setProperty("--color", "#F2F2F2");
    root.style.setProperty("--color-background", "#121212");
    root.style.setProperty("--color-text", "#F2F2F2");
    root.style.setProperty("--color-button", "#a9a9a9");
    root.style.setProperty("--color-transparent", "rgba(256,256,256,0.3)");
    root.style.setProperty(
      "--color-button-text-transparent",
      "rgba(0,0,0,0.7)"
    );
    themeToggleImage.src = "images/lamp_off.png";
    profile.src = "images/profpicd.png";
    xdaicon.src = "images/xda-muted.png";
    codewarsicon.src = "images/codewars-muted.png";
    googledevicon.src = "images/google-developers-muted.png";
  } else {
    // Apply light theme (or default theme)
    root.style.setProperty("--color", "#121212");
    root.style.setProperty("--color-background", "#F2F2F2");
    root.style.setProperty("--color-text", "#121212");
    root.style.setProperty("--color-button", "#888888");
    root.style.setProperty("--color-transparent", "rgba(0,0,0,0.3)");
    root.style.setProperty(
      "--color-button-text-transparent",
      "rgba(256,256,256,0.7)"
    );
    themeToggleImage.src = "images/lamp_on2.png";
    profile.src = "images/profpicb.png";
    xdaicon.src = "images/xda-muted-light.png";
    codewarsicon.src = "images/codewars-muted-light.png";
    googledevicon.src = "images/google-developers-muted-light.png";
  }
  // Call the showContent function with the stored contentId
  if (contentId) {
    showContent(contentId);
  } else {
    showContent("home");
  }
});

// Create an IntersectionObserver to handle fading in of sections
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
      } else {
        entry.target.style.opacity = "0";
      }
    });
  },
  { threshold: 0 }
);

// Apply the observer to all elements with class 'column'
document.querySelectorAll(".column").forEach((section) => {
  section.style.opacity = "0";
  section.style.transition = "opacity 0.73s ease";
  observer.observe(section);
});

const googledevicon = document.getElementById("googledev");
const xdaicon = document.getElementById("xda");
const codewarsicon = document.getElementById("codewars");

// Add event listener when mouse is over the googledev icon
googledevicon.addEventListener("mouseover", function () {
  googledevicon.src = "images/google-developers.png";
});

// Add event listener when mouse leaves the googledev icon
googledevicon.addEventListener("mouseout", function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    googledevicon.src = "images/google-developers-muted.png";
  } else {
    googledevicon.src = "images/google-developers-muted-light.png";
  }
});

// Add event listener when mouse is over the xda icon
xdaicon.addEventListener("mouseover", function () {
  xdaicon.src = "images/xda.png";
});

// Add event listener when mouse leaves the xda icon
xdaicon.addEventListener("mouseout", function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    xdaicon.src = "images/xda-muted.png";
  } else {
    xdaicon.src = "images/xda-muted-light.png";
  }
});

// Add event listener when mouse is over the codewars icon
codewarsicon.addEventListener("mouseover", function () {
  codewarsicon.src = "images/codewars.png";
});

// Add event listener when mouse leaves the codewars icon
codewarsicon.addEventListener("mouseout", function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    codewarsicon.src = "images/codewars-muted.png";
  } else {
    codewarsicon.src = "images/codewars-muted-light.png";
  }
});

// Add event listener to window resize event
window.addEventListener("resize", adjustColumnWidth);

// Add event listener to all anchor elements with href starting with '#' but not exactly '#'
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = this.getAttribute("href");
    if (target.length > 1) { // Ensure it's not just '#'
      const targetElement = document.querySelector(target);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        console.warn(`No element found for selector: ${target}`);
      }
    }
  });
});

// Get the modal element and other related elements
let modal = document.getElementById("myModal");
let btns = document.querySelectorAll(".project.button");
let span = document.getElementsByClassName("close")[0];
let projectLinkBtn = document.getElementById("project-link-btn");
let repoLinkBtn = document.getElementById("repo-link-btn"); // New line
let readmeContent = document.getElementById("readme-content");

// Add event listener to the document body to handle project button clicks
document.body.addEventListener("click", function (e) {
  // Find the closest ancestor element with class 'project.button'
  const btn = e.target.closest(".project.button");
  if (btn) {
    modal.style.display = "block";
    projectLinkBtn.href = btn.dataset.projectLink;
    repoLinkBtn.href = btn.dataset.repoLink;
    // Extract the project name from the link
    let parts = btn.dataset.projectLink.split("/");
    let projectName = parts[parts.length - 2];
    // Generate the repository URL based on the project name
    let repoUrl = `https://github.com/EleoXDA/${projectName}`;
    repoLinkBtn.href = repoUrl;

    // Fetch and display the README content for the project
    fetchReadme(btn.dataset.projectLink);

    // Open the project link in a new window/tab when clicked
    projectLinkBtn.onclick = function () {
      window.open(this.href);
    };
    // Open the repository link in a new window/tab when clicked
    repoLinkBtn.onclick = function () {
      window.open(this.href);
    };
  }
});

// Add event listener to the close button in the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Add event listener to the window when clicked outside the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let converter = new showdown.Converter();

// Function to fetch and display the README content for a project
function fetchReadme(projectLink) {
  let parts = projectLink.split("/");
  let projectName = parts[parts.length - 2];
  let branch = projectName === "portfolio" ? "gh-pages" : "master";
  let url = `https://raw.githubusercontent.com/EleoXDA/${projectName}/${branch}/README.md`;

  // Fetch the README content using the provided URL
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      let html = converter.makeHtml(data); // This line converts markdown to HTML
      // Render the README content in the modal
      readmeContent.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error:", error);
      // Display an error message if the README content cannot be fetched
      readmeContent.innerHTML = "Error loading README";
    });
}

window.onscroll = function () {
  scrollFunction();
};

adjustColumnWidth();

/*
After this line the code is for injection of the content to HTML
*/

let homeContent = `<h2>About Me</h2>
    <p>I am a skilled frontend developer with over 4.5 years of experience in designing and building scalable, maintainable web applications. My expertise lies in modern frameworks like Vue.js, React, and Angular, combined with a strong foundation in JavaScript, TypeScript, and CSS frameworks such as Tailwind.CSS and SCSS.
    </p><hr><p>My professional journey has been shaped by delivering impactful solutions, such as reusable component libraries, optimized workflows, and high-performance applications. I specialize in state management using Pinia and Redux, responsive design, and ensuring seamless user experiences through rigorous testing with tools like Cypress and Vitest.
    </p><hr><p>Collaboration and mentorship have been integral to my career. I have successfully guided junior developers, improved team productivity, and enhanced project outcomes by promoting best practices in code quality and maintainability. My experience with CI/CD pipelines, GitHub Actions, and version control systems ensures efficient and streamlined deployments.
    </p><hr><p>Transitioning from a scientific background, I bring strong analytical skills, problem-solving abilities, and attention to detail to every project. I am passionate about leveraging my technical expertise to create innovative, user-centric solutions that exceed expectations and drive measurable impact.
    </p>`;

let experienceContent = `<h2>Experience</h2>
  <div>
    <h3>Frontend Developer at stagedates GmbH</h3>
    <p>• Designed and implemented a reusable Vue-Quasar component library, reducing development time for features.</p>
    <p>• Reengineered critical workflows, including authorization and a revamped guest checkout flow, increasing signup rates and boosting sales conversions by 25% (reported after release of feature in production flow)</p>
    <p>• Optimized Vue-Router & added responsive design, improving page load speed and securing role-based routes.</p>
    <p>• Leveraged state management (Pinia) for admin and user workflows, ensuring seamless page transitions (e.g. agent-side checkout, authentication) with 0 data loss incidents reported thus far.</p>
    <p>• Mentored 2 junior frontend developers, improving their technical skills and reducing code review turnaround.</p>
    <p>• Utilized 20 unit tests (vitest) for release workflow in GitHub, with 32 more robust integration tests (Cypress).</p>
    <p>• Developed messaging functionality for promoters to contact ticket owners, reducing customer support inquires.</p>
    <p>• Improved repository structure and optimized Git workflows with caching, reducing deployment time by 30%.</p></div>
  <hr>
  <div>
    <h3>Frontend Developer (Volunteer) at Digital Dignity - Am I in Porn?</h3>
    <p>• Created a responsive web app using Vue.js and Nuxt.js to enhance online safety and usability on both mobile and desktop platforms.</p>
    <p>• Optimized frontend to securely handle live image submissions while preventing misuse in workflows.</p>
    <p>• Cooperated with backend team to integrate real-time face detection services, aiding accurate face identification.</p>
    <p>• Worked closely with UI designers and backend engineers to deliver a secure and user-friendly platform.</p>
  </div>
<hr>
<div>
  <h3>Frontend Developer at koviko GmbH</h3>
  <p>• Implemented a usage statistics page to help managers track staff language proficiency progression in real-time.</p>
  <p>• Designed and integrated a greeting page with user-focused signup/sign-in flows and terms acceptance using Hive database.</p>
  <p>• Fixed over 30 app bugs within 6 months, improving overall app stability and increasing user satisfaction ratings by 15%.</p>
  <p>• Developed a notification system to inform users about app updates, increasing engagement with new features.</p>
</div>
<hr>
<div>
  <h3>Web Developer (Frontend) at Friedrich Schiller University of Jena</h3>
  <p>• Designed and developed interactive frontend components for web apps using HTML, CSS, and vanilla JavaScript.</p>
  <p>• Migrated static web pages to dynamic content using JavaScript, reducing maintenance overhead by 30%.</p>
  <p>• Developed a student portal for managing course enrollments and grades, integrating with a MySQL database.</p>
  <p>• Worked with academic staff to design a knowledge-sharing platform with dynamic updates using JavaScript.</p>
  <p>• Enhanced website performance through image optimization/compression & improved SEO keyword targeting.</p>
  <p>• Collaborated with academic stakeholders to identify key application needs and adjust the app appropriately.</p>
  <p>• Created reusable HTML templates for university departments, standardizing design & reducing duplication.</p></div>`;

let educationContent = `<h2>Education</h2>
<div>
  <h3>Le Wagon Coding Bootcamp - Web Development</h3>
  <p>9-week intensive program covering HTML, CSS, Bootstrap, JavaScript ES6, Git, and Ruby on Rails.</p>
  <p>Focused on building modern, responsive web applications.</p>
</div>
<hr>
<div>
  <h3>Master of Science: Micro and Nanotechnology</h3>
  <p>Developed expertise in project management, data analysis, and problem-solving through interdisciplinary research, skills now applied to debugging and optimization in web development.</p>
</div>
<hr>
<div>
  <h3>Bachelor of Science: Biology</h3>
  <p>Gained a foundation in scientific research, result evaluation, and statistical analysis, forming the analytical skills crucial to software development.</p>
</div>`;

let softContent = `<h2 id='softh2'>Software Proficiency</h2>
<hr id='softhr'>
<div class="category">
<div class="section">
  <h3>Frontend Development</h3>
  <ul>
    <li><u>Core Technologies:</u><ul>HTML, CSS (Sass, SCSS, Tailwind.CSS), JavaScript (ES6+), TypeScript</ul></li>
    <li><u>Frontend Frameworks and Libraries:</u><ul>Vue.js (Nuxt.js, Pinia), React.js (Next.js), Quasar</ul></li>
    <li><u>State Management:</u><ul>Pinia, Redux</ul></li>
    <li><u>Build Tools and Package Managers:</u><ul>npm, Yarn, Vite, Webpack</ul></li>
    <li><u>Testing:</u><ul>Vitest, Cypress</ul></li>
    <li><u>Design and Prototyping Tools:</u><ul>Figma</ul></li>
  </ul>
  <hr>
</div>

<div class="section">
  <h3>Backend Communication and API Testing</h3>
  <ul>
    <li><u>RESTful APIs:</u><ul>Design, integration, and testing with Postman</ul></li>
    <li><u>GraphQL:</u><ul>Querying and integration</ul></li>
    <li><u>Authentication:</u><ul>JWT, OAuth2</ul></li>
  </ul>
  <hr>
</div>

<div class="section">
  <h3>Version Control and Agile Development</h3>
  <ul>
    <li><u>Version Control Systems:</u><ul>Git (Platforms: GitHub, GitLab)</ul></li>
    <li><u>Agile Methodologies:</u><ul>Kanban, Scrum, Jira</ul></li>
  </ul>
  <hr>
</div>

<div class="section">
  <h3>Testing and Automation</h3>
  <ul>
    <li><u>Frontend Testing Tools:</u><ul>Vitest, Cypress</ul></li>
    <li><u>API Testing:</u><ul>Postman</ul></li>
    <li><u>Continuous Integration/Continuous Deployment (CI/CD):</u><ul>GitHub Actions</ul></li>
  </ul>
  <hr>
</div>

<div class="section">
  <h3>Containerization and Hosting</h3>
  <ul>
    <li><u>Containerization Tools:</u><ul>Docker</ul></li>
    <li><u>Hosting Platforms:</u><ul>Vercel, Netlify</ul></li>
  </ul>
</div></div>
</div>`;

let langContent = `<h2>Language Proficiency</h2>
<p> - English
  <br> - German
  <br> - Turkish
  <br> - Azerbaijani
  <br> - Russian
</p>`;

let projects = `<h2 style="margin-bottom: 0px;">Projects</h2>
<div>
<p>In the following list you will find some of the open source projects that I built. Unfortunately I cannot share the source of private projects that I worked on during my employment, or the projects that were presented during my freelance work time.</p>
</div>
<h6 style="font-weight: 500; margin-top: 0px; margin-bottom: 20px;"><br>For more information on code, documentation and execution of each project, please <span style="text-decoration:underline;">click the button on the left side</span> to open the ReadMe of the Github projects.</h6>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Ace_Hunter_JS/"><h3 class="project-name">Ace Hunter</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A card game to find the Ace of Spades card among four cards.
      <a target="_blank" href="https://github.com/EleoXDA/Ace_Hunter_JS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
      <br>Tech Stack: HTML, CSS, Javascript, GitHub Actions, GitHub Pages</h6>
      </div>
</div>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Quiz_TS/"><h3 class="project-name">Quiz</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A  Quiz app that asks 5 random questions.
    <a target="_blank" href="https://github.com/EleoXDA/Quiz_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
  </div>
</div>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Countdown_Timer_TS/"><h3 class="project-name">Timer</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A countdown timer app.
    <a target="_blank" href="https://github.com/EleoXDA/Countdown_Timer_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Calculator_TS/"><h3 class="project-name">Calculator</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A calculator app.
    <a target="_blank" href="https://github.com/EleoXDA/Calculator_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Expense_Tracker_TS/"><h3 class="project-name">Expense Tracker</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A budget tracker to count your expenses.
    <a target="_blank" href="https://github.com/EleoXDA/Socialize_RB" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Tip_Calculator_TS/"><h3 class="project-name">Tip Calculator</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A tip calculator for extreme cases.
    <a target="_blank" href="https://github.com/EleoXDA/Tip_Calculator_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>
<hr>
<div class="project-container">
<button class="project button" data-project-link="https://eleoxda.github.io/portfolio/"><h3 class="project-name">My Portfolio</h3></button>
<div class="project-description">
<h6 style="font-weight: 500; margin: 1pt;">The source code to this beautiful and responsive wesbite.
    <a target="_blank" href="https://github.com/EleoXDA/portfolio" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Javascript, GitHub Actions, GitHub Pages, Web Hosting</h6>
    </div>
</div>`;

let skills = `<h2 id='softh2'>Skills and Tools</h2>
<hr id='softhr'>
<div>
<table>
  <thead>
    <tr>
      <th>Languages and Frameworks</th>
    </tr>
  </thead>
  <tbody>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"/><br>JavaScript</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/><br>TypeScript</td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"/><br>Vue JS</td>
    <td><img src="images/nuxt.svg"/><br>Nuxt JS</td>
    <td><img src="images/react.svg"/><br>React JS</td>
    <td><img src="images/next-js.svg"/><br>Next JS</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/><br>CSS</td>
  </tbody>
</table>
<hr id='softhr'>
<table>
  <thead>
    <tr>
      <th>Tools and Software</th>
    </tr>
  </thead>
  <tbody>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"/><br>WebPack</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"/><br>Heroku</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"/><br>Figma</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/><br>Git</td>
    <td><img src="images/github.svg"/><br>GitHub</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"/><br>GitLab</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"/><br>Android Studio</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"/><br>IntelliJ</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"/><br>VSCode</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"/><br>Visual Studio</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg"/><br>Vim</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"/><br>Google Cloud</td>
    <td><img src="images/codepen.svg"/><br>CodePen</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"/><br>Docker</td>
    <td><img src="images/postman.svg"/><br>Postman</td>
    <td><img src="images/xampp.svg"/><br>XAMPP</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"/><br>ESLint</td>
    <td><img src="images/gradle.svg"/><br>Gradle</td>
    <td><img src="images/jenkins.svg"/><br>Jenkins</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg"/><br>JetBrains</td>
    <td><img src="images/scrum.svg"/><br>Scrum</td>
    <td><img src="https://user-images.githubusercontent.com/27622683/192119213-9a958b20-d3ba-460e-935f-dccb6a3de7e6.png"/><br>Kanban</td>
    <td><img src="images/tdd.png"/><br>T.D.D.</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"/><br>Jira</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"/><br>Yarn</td>
    <td><img src="images/bash.svg"/><br>Bash</td>
    <td><img src="images/markdown.svg"/><br>Markdown</td>
  </tbody>
</table>
<hr id='softhr'>
<table>
  <thead>
    <tr>
      <th>Operating Systems</th>
    </tr>
  </thead>
  <tbody>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"/><br>Windows</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"/><br>Linux</td>
    <td><img src="images/mac.svg"/><br>MacOS</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"/><br>Android</td>
    <td><img src="images/ios.svg"/><br>iOS</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"/><br>Ubuntu</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-plain.svg"/><br>Debian</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-plain.svg"/><br>Fedora</td>
    <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"/><br>ChromeOS</td>
  </tbody>
</table>
<hr id='softhr'>
</div>`;
document.getElementById("projects").innerHTML = projects;
document.getElementById("lang").innerHTML = langContent;
document.getElementById("soft").innerHTML = softContent;
document.getElementById("education").innerHTML = educationContent;
document.getElementById("experience").innerHTML = experienceContent;
document.getElementById("home").innerHTML = homeContent;
document.getElementById("skills").innerHTML = skills;
