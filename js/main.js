var click = 0;

function add_clicks(id) {

  if (id === "clicked") {
    alert("Already Clicked!");
  } else {
    click += 1;
    console.log(click);
    document.getElementById(id).id = "clicked";
  };
};