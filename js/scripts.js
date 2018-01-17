$ (document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("#count").val());
    var multiple = parseInt($("#multi").val());
//    alert(countTo, multiple);
    var errMsg = "";
    if (countTo <= 0) {
      errMsg = errMsg + "* Count cannot be a negative integer\n";
    }
    if (multiple <= 0) {
      errMsg = errMsg + "* Multiple cannot be a negative integer\n";        //used isNaN to arrive at the error message after the alert message
    }
    if (isNaN (countTo)) {
      errMsg = errMsg + "* Count must be a numeric value\n";
    }
    if (isNaN (multiple)) {
      errMsg = errMsg + "* Multiple must be a numeric value\n";
    }
    if (multiple > countTo) {
      errMsg = errMsg + "* Multiple cannot be larger than count to\n";
    }

    if (errMsg != "") {
      alert(errMsg);
    }
    if (errMsg = "") {
      var numberSteps = Math.floor(countTo/multiple);
      var counter = 0;
      var outputMsg = "";
      for (var i = 0; i < numberSteps; i++) {
        var counter = counter + multiple;
        outputMsg = outputMsg + counter + ",";
      }
      outputMsg = outputMsg.slice(0,-1);
      alert(outputMsg);
    }
  });
});



/* Create a program that takes two numbers - one to count to and
another to determine what multiple to use to get there.*/
