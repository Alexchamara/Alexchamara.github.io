//this is for next and prevoius button
const prevBtns = document.querySelectorAll(".btn_prev");
const nextBtns = document.querySelectorAll(".btn_next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progressbar_step");

let formStepsNum = 0;

nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgress();
        window.scrollTo(0, 0);
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgress();
    });
});

function updateFormSteps() {

    formSteps.forEach(formStep => {
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgress() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("progressbar_step_active");
        } else {
            progressStep.classList.remove("progressbar_step_active");
        }
    });

    const progressActive = document.querySelectorAll(".progressbar_step_active");

    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";

}

//this is for accomodation page, room type and number of rooms
const roomTypeInput = document.getElementsByName("room_type");

const singleRooms = document.getElementById("single_room_num");
const doubleRooms = document.getElementById("double_room_num");
const tripleRooms = document.getElementById("triple_room_num");

let doubleRoomsNum;
let singleRoomsNum;
let tripleRoomsNum;

function checkRoomType() {
    if (this.value == 'single') {
        if (!(this.checked)) {
            singleRooms.value = 0;
            singleRoomsNum = parseInt(singleRooms.value);
            calculateCost();
        } else {
            singleRooms.value = 1;
            singleRoomsNum = parseInt(singleRooms.value);
            calculateCost();
        }

    } else if (this.value == 'double') {
        if (!(this.checked)) {
            doubleRooms.value = 0;
            doubleRoomsNum = parseInt(doubleRooms.value);
            calculateCost();
        } else {
            doubleRooms.value = 1;
            doubleRoomsNum = parseInt(doubleRooms.value);
            calculateCost();
        }

    } else if (this.value == 'triple') {
        if (!(this.checked)) {
            tripleRooms.value = 0;
            tripleRoomsNum = parseInt(tripleRooms.value);
            calculateCost();
        } else {
            tripleRooms.value = 1;
            tripleRoomsNum = parseInt(tripleRooms.value);
            calculateCost();
        }
    }
}

//this is for adventure page, participants local and foreign

document.addEventListener("DOMContentLoaded", function () {
    // Run this code when the document is fully loaded
    toggleParticipants('Local');
});

function toggleParticipants(nationality) {
    const localParticipants = document.getElementById('localParticipants');
    const foreignParticipants = document.getElementById('foreignParticipants');
    const localCheckbox = document.getElementById('Local');
    const foreignCheckbox = document.getElementById('Foreign');

    if (nationality === 'Local') {
        localParticipants.style.display = localCheckbox.checked ? 'flex' : 'none';
        foreignParticipants.style.display = 'none';
    } else if (nationality === 'Foreign') {
        localParticipants.style.display = 'none';
        foreignParticipants.style.display = foreignCheckbox.checked ? 'flex' : 'none';
    } else if (nationality === 'Both') {
        localParticipants.style.display = localCheckbox.checked ? 'flex' : 'none';
        foreignParticipants.style.display = foreignCheckbox.checked ? 'flex' : 'none';
    }
}


// This is for favorite popup window
const background = document.getElementById("blurBackGround");
const popup = document.getElementById("popup");
const fav = document.getElementById("addFav");
const close = document.getElementById("closeBtn");

fav.addEventListener("click", () => {
    background.classList.replace("hideblur", "showBackGround");
    popup.classList.replace("hidePopupWindow", "showPopupWindow");
});

close.addEventListener("click", () => {
    background.classList.replace("showBackGround", "hideblur");
    popup.classList.replace("showPopupWindow", "hidePopupWindow");
});
