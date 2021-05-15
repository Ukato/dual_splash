// grabbing page elements
const proSplash = document.querySelector('#professional-splash');
const perSplash = document.querySelector('#personal-splash');

// listening for user click and then displaying the appropriate profile
const showProfessionalProfile = document.querySelector('#open-pro').addEventListener('click', e => {
  //displaying the professional profile full screen
  proSplash.style.height = "100vh";
  proSplash.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  //removing button
  e.target.style.display = "none";

  //hiding the personal profile
  perSplash.style.display = "none";
});

const showPersonalProfile = document.querySelector('#open-per').addEventListener('click', e => {
  //displaying the professional profile full screen
  perSplash.style.height = "100vh";
  perSplash.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  //removing button
  e.target.style.display = "none";

  //hiding the personal profile
  proSplash.style.display = "none";
});