$(document).ready(function () {


  $('#go').on('click', function() {

    var arr = [];
    var dupes = [];

    console.log("button clicked")

    $('.arrayInput').each( function(index, element) {
      arr.push(element.value);
    });

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j] && i != j) {
          dupes.push(arr[i]);
          i++;
        }
      }
    }
    console.log(arr);
    console.log(dupes);
    $('#dupes').html("Dupes: " + dupes.join(', '));



  })

})