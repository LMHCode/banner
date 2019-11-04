(function(){
  var contanier = document.getElementsByClassName('contanier')[0];
  var contanierWidth = contanier.offsetWidth;
  var contanierHeight = contanier.offsetHeight;
  var timer = null;
  var times = 2500;
  var currentIndex = 0;

  var ul = document.getElementsByTagName('ul')[0]
  var li =  document.getElementsByTagName('li')
  contanier.style.position = 'relative'
  contanier.style.overflow = 'hidden'
  contanier.style.whiteSpace = "nowrap"
  ul.style.position = 'absolute'
  ul.style.height = contanierHeight + 'px'
  ul.appendChild(li[0].cloneNode(true))
  ul.style.width = li.length * contanierWidth + 'px'
  ul.style.transition = 'all 1s'

  for (var i = 0; i < li.length; i++) {
    li[i].style.width = contanierWidth + 'px'
    li[i].style.height = contanierHeight + 'px'
    li[i].firstElementChild.style.width = contanierWidth + 'px'
    li[i].firstElementChild.style.height = contanierHeight + 'px'
    li[i].style.float = 'left'
  }

  start(timer, currentIndex)
  function start (timer, currentIndex) {
    timer = setInterval (function () {
      if (currentIndex >= li.length - 1) {
        currentIndex = -1
        ul.style.transition = 'none'
      } else {
        ul.style.transition = 'all 1s'
      }
      currentIndex ++
      ul.style.left = -(currentIndex*contanierWidth) + 'px'
    }, times)
  }
})()