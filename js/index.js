console.log("your index file is loaded");
console.log("Hi this is Us-raa");

const heroBtn = document.querySelector(".heroBtn");
const heroButtonD = document.querySelector(".heroButtonD");
const heroButtonHoverD = document.querySelector(".heroButtonHoverD");
const logo = document.querySelector(".logo");
const logoHover = document.querySelector(".logoHover");
const Finalprototype = document.querySelector(".Finalprototype");

const PI1 = document.querySelector(".PI1");
const PI2 = document.querySelector(".PI2");
const PI3 = document.querySelector(".PI3");
const PI4 = document.querySelector(".PI4");
const PI5 = document.querySelector(".PI5");

const aboutItem = document.getElementById("about");
const connectItem = document.getElementById("connect");
const resume = document.getElementById("resume");

const aboutUnderline = document.getElementById("about-underline");
const connectUnderline = document.getElementById("connect-underline");
const resumeUnderline = document.getElementById("resume-underline");


heroBtn.addEventListener("mouseenter", () => {
    heroButtonD.style.display = "none";
    heroButtonHoverD.style.display = "inline-block";
});

heroBtn.addEventListener("mouseleave", () => {
    heroButtonD.style.display = "inline-block";

    heroButtonHoverD.style.display = "none";
});

heroBtn.addEventListener("click", () => {
  const FinalprototypeSection = document.querySelector(".Finalprototype");
  FinalprototypeSection.scrollIntoView({ behavior: "smooth" }); 
});

logo.addEventListener("mouseenter", () => {
    logo.style.display = "none";
    logoHover.style.display = "inline-block";
});

logo.addEventListener("mouseleave", () => {
    logo.style.display = "inline-block";
    logoHover.style.display = "none";
} );

aboutItem.addEventListener("mouseenter", () => {
    aboutUnderline.style.display = "inline-block";
    const aboutText = aboutItem.firstElementChild;
    aboutText.style.fontWeight = "700"

});

aboutItem.addEventListener("mouseleave", () => {
    aboutUnderline.style.display = "none";
    const aboutText = aboutItem.firstElementChild;
    aboutText.style.fontWeight = "600";
} );

connectItem.addEventListener("mouseenter", () => {
    connectUnderline.style.display = "inline-block";
    const connectText = connectItem.firstElementChild;
    connectText.style.fontWeight = "700"
});

connectItem.addEventListener("mouseleave", () => {
    connectUnderline.style.display = "none";
    const connectText = connectItem.firstElementChild;
    connectText.style.fontWeight = "600";
} );

resume.addEventListener("mouseenter", () => {
    resumeUnderline.style.display = "inline-block";
    const resumeText = resume.firstElementChild;
    resumeText.style.fontWeight = "700";
} );

resume.addEventListener("mouseleave", () => {
    resumeUnderline.style.display = "none";
    const resumeText = resume.firstElementChild;
    resumeText.style.fontWeight = "600";

} );
PI1.addEventListener("click", () => {
    const UserInterviewsSection = document.querySelector(".UserInterviews");
    UserInterviewsSection.scrollIntoView({ behavior: "smooth" }); 
  });
  PI2.addEventListener("click", () => {
    const definehead = document.querySelector(".definehead");
    definehead.scrollIntoView({ behavior: "smooth" }); 
  });
  PI3.addEventListener("click", () => {
    const Ideatesec = document.querySelector(".Ideatesec");
    Ideatesec.scrollIntoView({ behavior: "smooth" }); 
  });
  PI4.addEventListener("click", () => {
    const Prototypesec = document.querySelector(".Prototypesec");
    Prototypesec.scrollIntoView({ behavior: "smooth" }); 
  });
  PI5.addEventListener("click", () => {
    const testsec = document.querySelector(".testsec");
    testsec.scrollIntoView({ behavior: "smooth" }); 
  });