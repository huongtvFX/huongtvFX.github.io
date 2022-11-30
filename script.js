'use strict';

const perSonalEl = document.querySelector('.container-personal');
const formInfoEl = document.querySelector('.container-formInfo');
const btnSubmit = document.querySelector('.btn-primary');
const inputEmail = document.getElementById("exampleFormControlInput1");
const errMail = document.getElementById("err_mail");
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


perSonalEl.classList.add('hidden');

btnSubmit.addEventListener('click', function(){
  if(inputEmail.value == "") {
    errMail.innerHTML = "Vui lòng nhập địa chỉ mail";
    } else if(!regex.test(inputEmail.value)) {
    errMail.innerHTML = "Vui lòng nhập đúng định dạng địa chỉ mail";
    } else {
    perSonalEl.classList.remove('hidden');
    formInfoEl.classList.add('hidden');
    }
})

$(".g-3").submit(function(e) {
e.preventDefault();
});


// view


var info = document.querySelectorAll('.list-info');
var listMore = document.querySelectorAll('.view-more');
var listLess = document.querySelectorAll('.view-less'); 
var hover = document.querySelectorAll('.content-list'); 



for (let i = 0; i < listMore.length; i++) {
  listMore[i].addEventListener("click", function () {
    info[i].classList.remove("hidden");
    listMore[i].classList.add("hidden");
    listLess[i].classList.remove("hidden");
    hover[i].classList.remove("hover");
  });
}

for (let k = 0; k < listLess.length; k++) {
  listLess[k].addEventListener("click", function () {
    info[k].classList.add("hidden");
    listMore[k].classList.remove("hidden");
    listLess[k].classList.add("hidden");
    hover[k].classList.add("hover");
  });
}







