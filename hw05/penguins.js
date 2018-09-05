window.onload = function(){
  var body = document.getElementsByTagName("body");
  var form = document.getElementById("menu");
  for(var i = 2; i < 65; i++){
    var count = i.toString();
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    form.appendChild(option);
  }
  displayPenguins(2);
};
function displayPenguins(value){
  var numPenguins = value;
  var yetiIndex = Math.floor(Math.random() * (numPenguins)) + 1;
  var gameHolder = document.getElementById("gameholder");
  while(gameHolder.firstChild){
    gameHolder.removeChild(gameHolder.firstChild);
  }
  for(var p = 1; p <= numPenguins; p++){
    var counter;
    if(p != 8){
      counter = p % 8;
    }else{
      counter = 8;
    }
    var snowPile = document.createElement('div');
    if(p == yetiIndex){
      snowPile.setAttribute("class", "yeti");
      snowPile.setAttribute("onclick", "changeImage(this, 9)");
    }else{
      var newClass = "penguin" + counter;
      snowPile.setAttribute("class", newClass);
      var functionCall = "changeImage(this, " + counter + ")";
      snowPile.setAttribute("onclick", functionCall);
    }
    document.getElementById("gameholder").appendChild(snowPile);
  }
}
function changeImage(pile, index){
  if(index == 9){
    window.alert("Yaaaarrrr!");
    pile.setAttribute("class", "yetiClick");
  }else{
    var newClass = "peng" + index;
    pile.setAttribute("class", newClass);
  }
}
