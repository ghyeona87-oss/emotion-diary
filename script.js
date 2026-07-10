const songs = [
    "illit - Lucky Girl Syndrome",
    "LUCY - 개화",
    "LUCY - 아지랑이",
    "NCT DREAM - HELLO FUTURE",
    "NCT WISH - WISH",
    "NCT 127 - Dreams Come True",
    "NCT 2021 - Beautiful",
    "KickFlip - 언젠가 태양은 폭발해",
    "illit - 가장 빛날 너에게",
    "Stray Kids - 잘 하고 있어",
    "Stray Kids - Mixtape#3",
    "악동뮤지션 - 소문의 낙원",
    "한로로 - 입춘",
    "DAY6 - 꿈의 버스",
    "데이먼스 이어 - EREBIA",
    "유다빈밴드 - 오늘이야",
    "하현상 - 시간과 흔적",
    "LUCY - 발아"
];

// 🎵 노래 추천 페이지
const song = document.getElementById("song");

if (song) {
    const random = Math.floor(Math.random() * songs.length);
    song.textContent = songs[random];
}

// 🗑️ 감정 버리기 페이지
const paper = document.getElementById("paper");
const button = document.getElementById("trashBtn");

if (paper && button) {
    button.addEventListener("click", function () {
        paper.classList.remove("crumple");

        void paper.offsetWidth;

        paper.classList.add("crumple");
    });
}
