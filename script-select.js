// script-select.js

// intro.html: 다음 페이지로 이동
function goNext() {
  window.location.href = "select-team.html";
}

// select-team.html: 진영 선택 후 페이지 이동
function chooseTeam(team) {
  if (team === 'black') {
    window.location.href = "black.html";
  } else if (team === 'white') {
    window.location.href = "white.html";
  }
}
