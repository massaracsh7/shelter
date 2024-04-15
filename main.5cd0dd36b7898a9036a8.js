(()=>{"use strict";const e=JSON.parse('[{"name":"Jennifer","img":"../images/pets/Jennifer.png","type":"Dog","breed":"Labrador","description":"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.","age":"2 months","inoculations":["none"],"diseases":["none"],"parasites":["none"]},{"name":"Sophia","img":"../images/pets/Sophia.png","type":"Dog","breed":"Shih tzu","description":"Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.","age":"1 month","inoculations":["parvovirus"],"diseases":["none"],"parasites":["none"]},{"name":"Woody","img":"../images/pets/Woody.png","type":"Dog","breed":"Golden Retriever","description":"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.","age":"3 years 6 months","inoculations":["adenovirus","distemper"],"diseases":["right back leg mobility reduced"],"parasites":["none"]},{"name":"Scarlett","img":"../images/pets/Scarlett.png","type":"Dog","breed":"Jack Russell Terrier","description":"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.","age":"3 months","inoculations":["parainfluenza"],"diseases":["none"],"parasites":["none"]},{"name":"Katrine","img":"../images/pets/Katrine.png","type":"Cat","breed":"British Shorthair","description":"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.","age":"6 months","inoculations":["panleukopenia"],"diseases":["none"],"parasites":["none"]},{"name":"Timmy","img":"../images/pets/Timmy.png","type":"Cat","breed":"British Shorthair","description":"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.","age":"2 years 3 months","inoculations":["calicivirus","viral rhinotracheitis"],"diseases":["kidney stones"],"parasites":["none"]},{"name":"Freddie","img":"../images/pets/Freddie.png","type":"Cat","breed":"British Shorthair","description":"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.","age":"2 months","inoculations":["rabies"],"diseases":["none"],"parasites":["none"]},{"name":"Charly","img":"../images/pets/Charly.png","type":"Dog","breed":"Jack Russell Terrier","description":"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.","age":"8 years","inoculations":["bordetella bronchiseptica","leptospirosis"],"diseases":["deafness","blindness"],"parasites":["lice","fleas"]}]');function n(){for(var n=[],t=e.length;n.length<t;){var a=Math.floor(8*Math.random());n.includes(a)||n.push(a)}return n}function t(n){!function(){var e=document.createElement("div");e.className="modal",e.innerHTML='\n    <div class="modal__wrapper">\n      <div class="modal__box">\n        <img class="modal__img">\n      </div>\n      <div class="modal__inner">\n        <h3 class="modal__name"></h3>\n        <span class="modal__type"></span>\n        <span class="modal__breed"></span>\n        <p class="modal__description"></p>\n        <ul class="modal__list"></ul>\n      </div>\n      <button class="modal__btn" aria-label="close"></button>\n    </div>\n  ',document.body.appendChild(e),e.querySelector(".modal__btn").addEventListener("click",(function(){return a()})),e.addEventListener("click",(function(e){e.target.closest(".modal__wrapper")||a()}))}();var t=e[n],i=document.querySelector(".modal"),o=i.querySelector(".modal__img"),s=i.querySelector(".modal__name"),r=i.querySelector(".modal__type"),l=i.querySelector(".modal__breed"),d=i.querySelector(".modal__description"),c=i.querySelector(".modal__list");o.src="../images/modal/".concat(t.name,".png"),s.textContent=t.name,r.textContent="".concat(t.type," - "),l.textContent=t.breed,d.textContent=t.description,c.innerHTML='\n    <li class="modal__item"><span class="modal__info-title">Age:</span><span class="modal__info">'.concat(t.age,'</span></li>\n    <li class="modal__item"><span class="modal__info-title">Inoculations:</span><span class="modal__info">').concat(t.inoculations.join(", "),'</span></li>\n    <li class="modal__item"><span class="modal__info-title">Diseases:</span><span class="modal__info">').concat(t.diseases.join(", "),'</span></li>\n    <li class="modal__item"><span class="modal__info-title">Parasites:</span><span class="modal__info">').concat(t.parasites.join(", "),"</span></li>\n  "),i.classList.add("modal--active"),document.body.classList.add("overflow-hidden")}function a(){var e=document.querySelector(".modal");e&&e.remove(),document.body.classList.remove("overflow-hidden")}function i(n,a){n.innerHTML="";var i,o=document.documentElement.offsetWidth;i=o>=1280?3:o>=768?2:1,a.slice(0,i).forEach((function(a){var i,o,s;n.append((o=e[i=a],(s=document.createElement("li")).className="our-friends__item",s.dataset.id=i,s.innerHTML='\n    <img src="'.concat(o.img,'" alt="').concat(o.name,'" class="our-friends__img">\n    <p class="our-friends__name">').concat(o.name,'</p>\n    <button class="our-friends__btn button button--clear">Learn more</button>\n  '),s.addEventListener("click",(function(){t(i)})),s))}))}function o(e){for(var t=document.documentElement.offsetWidth,a=t>=1280?3:t>=768?2:1,i=[],o=n();i.length<a;){var s=o.shift();e.includes(s)||i.includes(s)||i.push(s)}return i}function s(){var e=document.querySelector(".slider__btn--left"),a=document.querySelector(".slider__btn--right"),s=document.querySelector(".slider__container"),r=document.querySelector(".list-active"),l=document.querySelector(".list-left"),d=document.querySelector(".list-right"),c=n(),m=function(e,n){return e>=1280?[n[0],n[1],n[2]]:e>=768?[n[0],n[1]]:[n[0]]}(document.documentElement.offsetWidth,c),u=o(m);function h(e){t(parseInt(e.currentTarget.dataset.id))}function p(n){s.classList.add("left"===n?"transition-left":"transition-right"),e.removeEventListener("click",(function(){return p("left")})),a.removeEventListener("click",(function(){return p("right")})),s.addEventListener("animationend",g)}function f(){e.addEventListener("click",(function(){return p("left")})),a.addEventListener("click",(function(){return p("right")}))}function g(e){e.animationName.startsWith("move-")&&(s.classList.remove("transition-left","transition-right"),function(e){var n="left"===e?l:d;r.innerHTML=n.innerHTML;var t=Array.from(r.querySelectorAll(".our-friends__item"),(function(e){return parseInt(e.dataset.id)}));i("left"===e?d:l,m),u=m,i("left"===e?l:d,o(m=t)),document.querySelectorAll(".our-friends__item").forEach((function(e){e.removeEventListener("click",h),e.addEventListener("click",h)}))}(e.animationName.includes("left")?"left":"right"),s.removeEventListener("animationend",g),f())}i(r,m),i(l,u),i(d,u),f()}document.addEventListener("DOMContentLoaded",(function(){var e,n,t,a,i,o;e=document.querySelector(".burger"),n=document.querySelector(".header__navigation"),t=document.querySelector(".header"),a=document.querySelector("body"),i=document.querySelector(".header__wrapper"),o=function(){e.classList.toggle("burger--open"),t.classList.toggle("header--mobile"),n.classList.toggle("header__navigation--active"),i.classList.toggle("header__wrapper--active"),a.classList.toggle("overflow-hidden")},e.addEventListener("click",(function(e){e.stopPropagation(),o()})),n.addEventListener("click",(function(e){e.target.closest(".menu__item")&&o()})),document.addEventListener("click",(function(n){!t.contains(n.target)&&e.classList.contains("burger--open")&&o()})),s()}))})();