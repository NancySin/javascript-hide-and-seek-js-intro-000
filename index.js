function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div')
}

function increaseRankBy(){
  var parsed = parseInt(n)
const list = document.getElementById('app').querySelectorAll('ul.ranked-list')
for (let = 0; i < list.length; i ++){
  list[i].innerHTML = (i + parsed);
  }
}


function deepestChild(){
  return document.getElementById('grand-node').querySelector('div div div div div');
}
