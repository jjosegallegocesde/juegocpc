let doctor1 = document.getElementById("doctor1");
let fotodoctor1 = document.getElementById("fotodoctor1");
let doctor2 = document.getElementById("doctor2");
let fotodoctor2 = document.getElementById("fotodoctor2");


doctor1.addEventListener("click", activardoctor1);
doctor2.addEventListener("click", activardoctor2);

function activardoctor1() {

    console.log("hice clic en el doctor1");
    doctor1.classList.remove("bg-dark");
    fotodoctor1.classList.remove("invisible");

    setTimeout(function () {

        doctor1.classList.add("bg-dark");
        fotodoctor1.classList.add("invisible");

    }, 3000)

}

function activardoctor2() {

    console.log("hice clic en el doctor2");
    doctor2.classList.remove("bg-dark");
    fotodoctor2.classList.remove("invisible");

    setTimeout(function () {

        doctor2.classList.add("bg-dark");
        fotodoctor2.classList.add("invisible");

    }, 3000)

}