console.log("your index file is loaded");
console.log("Hi this is Us-raa");

const heroBtn = document.querySelector(".heroBtn");
const heroButtonD = document.querySelector(".heroButtonD");
const heroButtonHoverD = document.querySelector(".heroButtonHoverD");
const logo = document.querySelector(".logo");
const logoHover = document.querySelector(".logoHover");

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
  const mainBodySection = document.querySelector(".mainBody");
  mainBodySection.scrollIntoView({ behavior: "smooth" }); 
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
