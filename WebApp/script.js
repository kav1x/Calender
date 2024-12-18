document.getElementById("prev").innerHTML = "<";
document.getElementById("next").innerHTML = ">";

let datesContainer = document.getElementById("dates");
let header = document.querySelector(".calendar h3");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
    header.innerHTML = `${months[month]} ${year}`;
    datesContainer.innerHTML = "";

    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month + 1, 0).getDate();
    let prevLastDate = new Date(year, month, 0).getDate();


    for (let i = firstDay; i > 0; i--) {
        let li = document.createElement("li");
        li.classList.add("inactive");
        li.textContent = prevLastDate - i + 1;
        datesContainer.appendChild(li);
    }


    for (let i = 1; i <= lastDate; i++) {
        let li = document.createElement("li");
        if (i === date.getDate() && month === date.getMonth() && year === date.getFullYear()) {
            li.classList.add("today");
        }
        li.textContent = i;
        datesContainer.appendChild(li);
    }


    let totalDates = datesContainer.children.length;
    for (let i = 1; totalDates % 7 !== 0; i++) {
        let li = document.createElement("li");
        li.classList.add("inactive");
        li.textContent = i;
        datesContainer.appendChild(li);
        totalDates++;
    }
}

prevButton.addEventListener("click", () => {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    renderCalendar();
});

nextButton.addEventListener("click", () => {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    renderCalendar();
});

renderCalendar();
