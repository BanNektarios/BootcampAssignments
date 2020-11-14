
let trainerValidate = function () {
    let firstName = document.getElementById("trainerFirstName").value;
    let lastName = document.getElementById("trainerLastName").value;
    let subject = document.getElementById("trainerSubject").value;
    let isNotLetters = new RegExp(/[\d\W]/)

    if (isNotLetters.test(firstName)) {
        console.log("not a letter");
    }
}

