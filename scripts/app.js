let displayArea = document.getElementById("displayArea");
let answerArea = document.getElementById("answerArea");
let cat1Btn = document.getElementById("cat1Btn");
let cat2Btn = document.getElementById("cat2Btn");
let cat3Btn = document.getElementById("cat3Btn");


cat1Btn.addEventListener("click", function(){
    getM();
})
cat2Btn.addEventListener("click", function(){
    getSN();
})
cat3Btn.addEventListener("click", function(){
    getCA();
})

// API function for Mathematics
async function getM(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=10&category=19").then(Response => Response.json());
    //console.log(apiResponse);
    displayArea.innerText = apiResponse.results["0"].question;
    answerArea.innerText = "Answer:  " + apiResponse.results["0"].correct_answer;
}

// API function for Science & Nature
async function getSN(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=10&category=17").then(Response => Response.json());
    //console.log(apiResponse);
    displayArea.innerText = apiResponse.results["0"].question;
    answerArea.innerText = "Answer:  " + apiResponse.results["0"].correct_answer;
}

// API function for Cartoons & Animations
async function getCA(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=10&category=32").then(Response => Response.json());
    //console.log(apiResponse);
    displayArea.innerText = apiResponse.results["0"].question;
    answerArea.innerText = "Answer:  " + apiResponse.results["0"].correct_answer;
}