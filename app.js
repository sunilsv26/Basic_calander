





const startEl = document.getElementById('init-date');
const startDay = parseInt(startEl.textContent.toString());

let prevDate = startDay;
let currDate;

const nextEl = document.querySelectorAll('#date');
console.log(nextEl);


function nextDateCalulater() {
    currDate = startDay + 1;
    for (const x of nextEl){
        x.textContent = (currDate ++).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }

}
nextDateCalulater()