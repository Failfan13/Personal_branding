const LoadJson = async () => {
  const response = await fetch('../language/language.json');
  const data = await JSON.parse(await response.text());
  return data;
} 
LoadJson().then(data => {

  // ------------------------------ set language ------------------------------
  // set document language
  SetNewLang = (CurrLang) => { // if first time loaded
    if (! document.documentElement.lang && ! localStorage.getItem('personalisedLanguage')) {
      document.documentElement.lang = `${CurrLang}`;
      return CurrLang.toUpperCase().slice(0 , 2);
    }
    else if (! localStorage.getItem('personalisedLanguage')) { // If not set language before use browser language
      return document.documentElement.lang.toLowerCase().slice(0 , 2);
    }
    else { // If user set language before
      document.documentElement.lang = localStorage.getItem('personalisedLanguage').toLowerCase();
      return localStorage.getItem('personalisedLanguage').toUpperCase().slice(0 , 2);
    }
  }
  // strip language for json
  var CurrLang = SetNewLang(navigator.language);

  // --------------------------- change doc language --------------------------
  const spans = document.getElementsByTagName('span');

  setTimeout(() => {
  // loop through spans
    for (let i = 0; i < spans.length; i++) {
      // if span has data-txt attribute
      if (spans[i].dataset.txt) {
        // split data-txt into array
        let words = spans[i].dataset.txt.split(' ');
        
        var newLine = '';
        // loop through array
        for (let j = 0; j < words.length; j++) {
          // Get right phrase from json
          var request = CurrLang + '.' + words[j];
          var EvalFunc = null;
          EvalFunc = new Function('data', 'return data.'+request);
          

          if (newLine != '') {
            newLine += ' ';
          
          }
          newLine += EvalFunc(data);
        }

        // Set innerHTML to right phrase
        spans[i].innerHTML = newLine;
      }
    }
  }, 1000);
});


