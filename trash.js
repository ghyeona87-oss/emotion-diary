const paper = document.getElementById("paper");
const button = document.getElementById("trashBtn");

button.addEventListener("click", function () {

    paper.classList.remove("crumple");

    void paper.offsetWidth;

    paper.classList.add("crumple");

    // 애니메이션이 끝나면 다시 나타나기
    setTimeout(function () {

        paper.classList.remove("crumple");
        paper.value = "";   // 입력 내용 지우기
        paper.focus();      // 다시 바로 입력 가능

    }, 1500);

});
