const LoadJson = async () => {
  const response = await fetch('./src/language.json');
  const data = await JSON.parse(await response.text());
  return data;
} 
LoadJson().then(data => {

  // ------------------------------ set language ------------------------------
  // set document language
  SetNewLang = (CurrLang) => {
    if (! document.documentElement.lang) {
      document.documentElement.lang = `${CurrLang}`;
      return CurrLang.toUpperCase().slice(0 , 2);
    }
    return document.documentElement.lang.toUpperCase().slice(0 , 2);
  }
  // strip language for json
  var CurrLang = SetNewLang(navigator.language);

  // --------------------------- change doc language --------------------------
  const spans = document.getElementsByTagName('span');

  // loop through spans
  for (let i = 0; i < spans.length; i++) {
    // if span has data-txt attribute
    if (spans[i].dataset.txt) {
      // split data-txt into array
      let words = spans[i].dataset.txt.split(' ');
      // loop through array
      var newLine = '';

      for (let j = 0; j < words.length; j++) {
        // Get right phrase from json
        var request = CurrLang + '.' + words[j];
        var EvalFunc= new Function('data', 'return data.'+request);

        if (newLine != '') {
          newLine += ' ';
        
        }
        newLine += EvalFunc(data);
      }

      // Set innerHTML to right phrase
      spans[i].innerHTML = newLine;
    }
  }
});


