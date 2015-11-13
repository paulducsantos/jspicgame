var click = 0;
nostart = true;

function add_clicks(id) {
  if (nostart) {
    ;
  }
  else if (id === "clicked") {
    alert("Already Clicked!");
  } else {
    click += 1;
    console.log(click);
    document.getElementById(id).id = "clicked";
  };
};

function changeImage(id) {
  console.log(id);
  document.getElementById(id).src = "images/pokeball.jpg";
  
}

function gameStart() {
  click=0;
  nostart = false;
  var pokeballs = document.getElementsByTagName("img");
  var identify = [];
  for (var i = 1; i < pokeballs.length; i++) {
    identify.push(pokeballs[i].id);
  };
  for (var i = 0; i < identify.length; i++) {
    document.getElementById(identify[i]).src = "images/" + identify[i] + ".png";
  };
}

function gameEnd() {
  alert("Game has ended! Your score is " + click)
};