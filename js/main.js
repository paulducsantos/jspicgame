var click = 0;



function gameEnd() {
  function add_clicks(id) {
  if (id === "clicked") {
    alert("Already Clicked!");
  } else {
    click += 1;
    console.log(click);
    document.getElementById(id).id = "clicked";
  };
};
  alert("Game has ended! Your score is " + click)
}