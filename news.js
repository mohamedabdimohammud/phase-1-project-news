const squadBtn = document.querySelector('#squadBtn');
const historyBtn = document.querySelector('#historyBtn');
const storeBtn = document.querySelector('#storeBtn');
const homeBtn = document.querySelector('#homeBtn');
  
// Define an object with URL properties
const data = {
homeUrl: "https://mohamedabdimohammud.github.io/phase-1-project/",
squadUrl: "https://mohamedabdimohammud.github.io/phase-1-project-squad/",
historyUrl: "https://mohamedabdimohammud.github.io/phase-1-project-history/",
storeUrl: "https://mohamedabdimohammud.github.io/phase-1-project-store/"
};
  
// Add event listeners to buttons, using the URL properties from the data object
homeBtn.addEventListener('click', function() {
window.location.href = data.homeUrl;
});
  
squadBtn.addEventListener('click', function() {
window.location.href = data.squadUrl;
});
  
historyBtn.addEventListener('click', function() {
window.location.href = data.historyUrl;
});
  
storeBtn.addEventListener('click', function() {
window.location.href = data.storeUrl;
});