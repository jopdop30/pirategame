$(document).ready(function () {
  var options = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "E1", "E2", "E3", "E4", "E5", "E6", "E7", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "G1", "G2", "G3", "G4", "G5", "G6", "G7"];
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  $("#random").click(function () {
    var space = getRandomInt(options.length);
    $("#recent").html(options[space]);
    var spaceid = "#" + options[space]
    $(spaceid).css("background-color", "green");
    options.splice(space, 1);
  });
  
  $("#pick").click(function () {
    var space = prompt("Pick a space").toUpperCase();
    if (options.includes(space) == true) {
      $("#recent").html(space);
      var spaceid = "#" + space
      $(spaceid).css("background-color", "green");
      options.splice(options.indexOf(space), 1);
    }
    else {
      $("#recent").html("Error");
    }
  });

});
