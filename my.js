function characterCount() {
    var text = document.getElementById("txtarea").value;
    var ccount = text.length;
    document.getElementById("showCharacterCount").innerHTML = ccount;
   }

function wordCount() {
    var text = document.getElementById("txtarea").value;
    var wcount = 0;
    var split = text.split(' ');
    for (var i = 0; i < split.length; i++) {
     if (split[i] != "") {
      wcount ++;
     }
    }
    document.getElementById("showWordCount").innerHTML = wcount;
   }

   function sentenceCount() {
    var text = document.getElementById("txtarea").value;
    var scount = 0;
    var split = text.split(/[!.?]+/);
    for (var i = 0; i < split.length; i++) {
        if (split[i] != ""&&split[i] != " ")
            scount ++; 
    
    }
    document.getElementById("showSentenceCount").innerHTML = scount;
   }

