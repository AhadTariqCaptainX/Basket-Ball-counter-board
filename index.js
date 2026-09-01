
function getHomeScore(){
    return parseInt(document.getElementById("home-score").innerText)
}

function setHomeScore(value){
    document.getElementById("home-score").innerText = value
}


function add1() {
    const currentScore = getHomeScore();
    const newScore = currentScore + 1;
    setHomeScore(newScore);
  }

function add2(){
    const currentScore = getHomeScore();
    const newScore = currentScore + 2;
    setHomeScore(newScore);
}

function add3(){
    const currentScore = getHomeScore();
    const newScore = currentScore + 3;
    setHomeScore(newScore);
}


function getGuestScore(){
    return parseInt(document.getElementById("guest-score").innerText)
}

function setGuestScore(value){
    document.getElementById("guest-score").innerText = value
}


function add1G() {
    const currentScore = getGuestScore();
    const newScore = currentScore + 1;
    setGuestScore(newScore);
  }

function add2G(){
    const currentScore = getGuestScore();
    const newScore = currentScore + 2;
    setGuestScore(newScore);
}

function add3G(){
    const currentScore = getGuestScore();
    const newScore = currentScore + 3;
    setGuestScore(newScore);
}

function newGame() {
    setHomeScore(0);
    setGuestScore(0);
}