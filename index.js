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
  
  var a = [];
  var n;
  
  let c = a;
  let m = [];
   
   while (c || c ===0) {
     
    
      if (n(c)){
        return c
      
      }
      
      if (a.isa(c)) {
        
      }
    
  }
}

