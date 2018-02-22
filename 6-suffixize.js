$(document).ready(function () {

  var randomWords = "Chillwave keytar kale chips selfies post-ironic wolf moon readymade beard food truck Migas raclette stumptown flexitarian kitsch vice raw denim live-edge retro la croix Blog mustache brooklyn XOXO chillwave vape austin narwhal tousled meh man bun vice mlkshk Before they sold out shabby chic DIY bitters banh mi celiac bicycle rights art party disrupt Palo santo craft beer drinking vinegar neutra viral truffaut vice La croix meggings williamsburg kickstarter four dollar toast forage af hashtag chambray banh mi".split(' ')

  console.log(randomWords.length)

  function getRandomArray(arr, howMany) {
    var outputArr = []
    for (var i=0; i < howMany; i++) {
      outputArr.push(arr[Math.floor(Math.random() * arr.length)])
    }
    return outputArr;
  }
  
  var suffixes = [];

  function suffixize(arr, howMany = 10) {

    // need to clear text input elements and replace them with dynamically generated ones
    if (howMany > 10) {
      $('#theForm').empty()
      for(var i=0; i < howMany; i++) {
        var i_s = i.toString();
        $('#theForm').append("<input type='text' class='arrayInput' id='index" + i_s + "' autocomplete='off'>&nbsp &nbsp<label id='label" + i_s + "'class='arrayOutput'></label><br>")
      }
    }

    $('.arrayInput').each( function(index, element) {
      element.value = arr[index];
    })
    
    // depending on 'howMany'.
    // same goes for the output label elements

    for (var i = 0; i < howMany; i++) {
      lastDigit = i.toString().slice(-1);
      elementToUpdate = '#label' + i.toString()
      switch(lastDigit) {
        case '0':
          $(elementToUpdate).html((i + 1) + 'st choice');
          break
        case '1':
          $(elementToUpdate).html((i + 1) + 'nd choice');
          break
        case '2':
          $(elementToUpdate).html((i + 1) + 'rd choice');
          break
        default:
          $(elementToUpdate).html((i + 1) + 'th choice');
          break
      }
    }

  }

  $('#go').on('click', function() {

    var inputTen = [];

    $('.arrayInput').each( function(index, element) {
      inputTen.push(element.value);
    });

    suffixize(inputTen);

  })

  $('#goRandom').on('click', function() {

    var howMany = Math.floor(Math.random() * 78)

    var randomArray = getRandomArray(randomWords, howMany);

    
    
    suffixize(randomArray, randomArray.length)

  })

})