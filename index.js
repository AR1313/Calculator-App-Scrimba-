const screen_p = document.getElementById("screen_p")
const numberBtn = document.getElementsByClassName("numberBtn")
const clearBtn = document.getElementById("clear")
const enterBtn = document.getElementById("enter")
const backBtn = document.getElementById("back")

for (var i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener("click", function () {
        let buttonText = this.textContent;
        screen_p.innerHTML += buttonText;
    });
}

enterBtn.addEventListener("click", function () {
    let calcText = screen_p.innerHTML;
    let newCalcText = calcText.split("^").join("**");
    //Add code here to do the translation
    let result = eval(newCalcText)
    screen_p.innerHTML = result;
}
)
clearBtn.addEventListener("click", function () {
    screen_p.innerHTML = '';
}
)

backBtn.addEventListener("click", function () {
    screen_p.innerHTML = screen_p.innerHTML.slice(0, -1);
})

