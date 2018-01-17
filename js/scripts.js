$ (document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("#count").val());
    var multiple = parseInt($("#multi").val());
    alert(countTo, multiple);
  });
});
