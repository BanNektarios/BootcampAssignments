
let trainerValidate = function () {
    let firstName = document.getElementsByTagName("input")[0].value.toString();
    let lastName = document.getElementsByTagName("input")[1];
    let subject = document.getElementsByTagName("input")[2];
    let message = document.querySelectorAll("p");

    if (firstName == !isNaN && lastName == !isNaN) {
        return message.innerText = "Cannot Contain Numbers";
    } 
}
