document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("name") || "익명";
  const department = localStorage.getItem("department") || "미입력";
  const team = localStorage.getItem("team") || "unknown";
  const score = parseInt(localStorage.getItem("score") || "0");

  const progress = Math.min(Math.floor((score / 3) * 100), 100);
  const reward = progress * 100;

  document.getElementById("resultName").textContent = name;
  document.getElementById("resultDepartment").textContent = department;
  document.getElementById("resultTeam").textContent = team === "black" ? "블랙 해커" : "화이트 해커";
  document.getElementById("resultProgress").textContent = progress;
  document.getElementById("finalMoney").textContent = reward.toLocaleString();

  // 자동 테마 적용
  document.body.classList.add(team === "black" ? "black-theme" : "white-theme");

  // (추후 DB 연결 시 여기에 랭킹 데이터를 fetch하여 표시)
});
