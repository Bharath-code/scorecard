let homeScoreEl = document.getElementById("homeScore")
let awayScoreEl = document.getElementById("awayScore")

let homeScore = 0
let awayScore = 0

function homePoint(point){
    homeScore += point
    homeScoreEl.textContent = homeScore
}

function awayPoint(point){
    awayScore += point
    awayScoreEl.textContent = awayScore
}
