(function () {
  'use strict';

  var langSelector = document.getElementById('lang-selector');

  var lastLang = 'ko';

  langSelector.addEventListener('focus', function (e) {
    lastLang = '/' + e.target.value + '/';

  });

  langSelector.addEventListener('change', function (e) {
      var value = '/' + e.target.value + '/';
      var url = location.href.replace(lastLang, value);

      var splitUrl = url.split('/');
      if (splitUrl[splitUrl.length - 1] == 'ko')
          splitUrl = splitUrl.pop(1)

      location.href = splitUrl.join('/');

  });

})();
