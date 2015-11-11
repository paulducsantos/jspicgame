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

function changeImage(src) {
  console.log(src)
}

function gameStart() {
  click=0;
  nostart = false;
}

function gameEnd() {
  alert("Game has ended! Your score is " + click)
};