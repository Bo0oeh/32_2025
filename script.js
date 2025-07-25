function startGame() {
  const nameInput = document.getElementById("username");
  const name = nameInput.value.trim();
  const warning = document.getElementById("warning");

  // 1. 빈 문자열 검사
  if (name === "") {
    alert("이름을 입력해 주세요.");
    return;
  }

  // 2. 유효성 검사: 한글/영어만 허용
  const validRegex = /^[가-힣a-zA-Z]{1,10}$/;
  if (!validRegex.test(name)) {
    alert("한글 또는 영문 10자 이내로 입력 \n 숫자와 특수문자는 사용 불가");
    return;
  }

  // 3. 정상 입력일 경우
  warning.textContent = "";
  document.getElementById("player-name").innerText = name;
  document.getElementById("signup-popup").style.display = "flex";
}

function goToMission() {
  alert("다음 페이지 이동");
}

