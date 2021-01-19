$(document).ready(function() {
  const clickableArray =[["h1", "This is a header"],["p","This is a paragraph"],["img","This is an image"]];
  clickableArray.forEach(function(clickablePair){
    $(clickablePair[0]).click(function() {
    alert(clickablePair[1]);
    });
  });

  // $("h1").click(function() {
  //   alert("This is a header.");
  // });

  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });

  // $("img").click(function() {
  //   alert("This is an image.");
  // });
});