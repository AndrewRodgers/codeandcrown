// set empty fact object
var factObj = {};

// new request
const xhr = new XMLHttpRequest();

// on load parse JSON
xhr.onload = function(){
    if (this.status === 200) {
        try {
            factObj = JSON.parse(this.responseText);
            // console.log(factObj);

        } catch (e) {
            console.warn("There was an error in the JSON!");
        }
    } else {
        console.warn("Did not load JSON!");
    }
    // load a random fact on script first run
    // randomFact();
};
// JSON path
xhr.open("get", "./assets/scripts/facts.json");
xhr.send();

// random fact function
function randomFact() {
    let randomFactText = factObj.facts[Math.floor(Math.random() * factObj.facts.length)];
    // console.log(factObj);
    // console.log(randomFactText);

    // set content based on above
    document.querySelector(".callout_facts-content").innerText = randomFactText.fact
}

// click event for fact control
document.querySelector(".callout_facts-control").addEventListener("click", function(){
    randomFact();
});
