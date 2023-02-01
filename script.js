const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const form = document.getElementById("form");
const userInfo = document.getElementById("user-info");
const dice = document.getElementById("dice");
const coupon = document.getElementById("coupon");
const congrats = document.getElementById("congrats");
const displayName = document.getElementById("display-name");
const displayUsername = document.getElementById("display-username");
const displayCoupon = document.getElementById("display-coupon");
const result = document.getElementById("result");


// let sum = 0;

img1.addEventListener("click", function() {
    //this.style.pointerEvents = 'none';
  form.style.display = "flex";
});

// form.add


let name, username;
  
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  name = document.querySelector('#name').value;
  username = document.querySelector('#username').value;
  
  document.querySelector('#display-name').textContent = name;
  document.querySelector('#display-username').textContent = username;
});



img2.addEventListener('click', function() {
    //this.style.pointerEvents = 'none';
  userInfo.style.display = 'flex';
});




let attempts = 0;
let sum = 0;
  let count = 0;
  
  img3.addEventListener('click', function() {
    dice.style.display = 'block';
  });
  
  dice.addEventListener('click', function() {
    let value = Math.floor(Math.random() * 6) + 1;
    result.textContent += value + ' ';
    sum += value;
    count++;
    
    if (count === 3) {
        attempts++;
      if (sum > 10) {
        document.querySelector('#img4').style.pointerEvents = 'auto';
      } else if(attempts===2){
        result.textContent += 'Bad luck. ';
        attempts=0;
      }else {

        result.textContent += 'Try again. ';
        count = 0;
        sum = 0;
      }


      
    }
  });




img4.addEventListener('click', function() {
    this.style.pointerEvents = 'none';
    let text = '';
    for (let i = 0; i < 12; i++) {
      text += Math.floor(Math.random() * 10);
    }
    displayCoupon.textContent = text;
    coupon.style.display = 'block';

    congrats.style.display = 'block';

  });