function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div')
}

function increaseRankBy(){
  var parsed = parseInt(n)
const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
for (let = 0; i < list.length; i ++){
  list[i].innerHTML = (i + parsed);
  }
}


function deepestChild(){
  var grandNode = document.querySelector('#grand-node')
    var deep = grandNode.querySelectorAll('div')
     deep = deep[deep.length - 1]
     return deep
   } 
