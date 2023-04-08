function calculateAge(event) {
    event.preventDefault(); // 기본 이벤트(페이지 새로고침) 막기

    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    var today = new Date();
    var birthday = new Date(year, month - 1, day);

    var age = today.getFullYear() - birthday.getFullYear();
    if (today.getMonth() < birthday.getMonth() || (today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate())) {
      age--;
    }

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "당신의 만 나이는 " + age + "세입니다.";
    resultElement.style.display = "block";
}