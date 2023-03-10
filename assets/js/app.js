let d = document.querySelectorAll(".dice");
const ans = document.getElementById("answer");
const btn = document.getElementById("submit");
let sDisplay = document.getElementById("score");
let n = null;
let score = 0;
let rNum;
let s;
let times;
let c = 0;
let a = 0;
let CW = document.querySelector(".times");
CW.innerText = (`${c} / ${a}`);
sDisplay.innerText = `Điểm: ${score}`;
console.log(n);
ans.onchange = function() {
    if (ans.value < 3) {
        ans.value = 3;
    } else if (ans.value > 18) {
        ans.value = 18;
    }
    n = ans.value;
}

btn.onclick = function() {
    if (n) {
        a++;
        s = 0;
        d.forEach(item, index) = function() {
            rNum = Math.floor(Math.random() * 6) + 1;
            item.innerHTML = (`<img src="./assets/img/${rNum}.png" alt="">`);
            s += rNum;
        }
        if (n == s) {
            score += 10;
            c++;
        }
        sDisplay.innerHTML = (`Điểm: ${score}`);
        CW.innerText = (`${c} / ${a}`);
        console.log(s);
    } else {
        alert("Vui lòng nhập giá trị dự đoán!")
    }
}