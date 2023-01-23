let x = document.getElementById("x");
x.onclick = function(){
  let  img = document.querySelector('#img');
  setTimeout(function(){
   if (img.style.display == 'block') {
      img.style.display = 'none';
      x.innerText = '显示';
   } else {
     img.style.display = 'block';
     x.innerText = '隐藏';
   }
  },50);
}
let bq = document.querySelector('#qb');
img.onclick = function(){
  setTimeout(function() {
    bq.style.display = 'block';
  }, 200);
}
let b = document.querySelector('#an');
b.onclick = function(){
  setTimeout(function(){
    bq.style.display = 'none';
  },200);
}
