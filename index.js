function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
    const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = (parseInt(list[i].innerHTML) + n);
      }
}

function deepestChild(){
  
  var node = document.getElementById('#grand-node');

     while(node.haschildNodes ){
        if(!node.hasChildNodes)
        //    return node;
        //else
            node = node.childNodes;
     }
}
