import { search } from './api';
import { generateLoadingDiv, generateResultDiv } from './components';
import { getGoogledSearchTerms } from './utils';

var START_TIME, TIME_TAKEN;
var SEARCH_RESULT_TOP_DIV_CLASSNAME = 'eqAnXb';
var GPT_RESULT_LOADING_DIV_CLASSNAME = 'LOADING_DIV';

const init = () => {
  START_TIME = Date.now();
  const loadingDiv = generateLoadingDiv();
  const googleSearchTopDiv = document.getElementsByClassName(
    SEARCH_RESULT_TOP_DIV_CLASSNAME
  );
  googleSearchTopDiv[0].prepend(loadingDiv);
};

const main = () => {
  const searchTerms = getGoogledSearchTerms();
  // search them on chatGPT API
  search(searchTerms)
    .then((result) => {
      // chatGPT performance
      TIME_TAKEN = Date.now() - START_TIME;
      const resultDiv = generateResultDiv(result, TIME_TAKEN);
      const googleSearchTopDiv = document.getElementsByClassName(
        SEARCH_RESULT_TOP_DIV_CLASSNAME
      );
      googleSearchTopDiv[0].prepend(resultDiv);

      document.getElementById(GPT_RESULT_LOADING_DIV_CLASSNAME).remove();
    })
    .catch((err) => {
      console.error(err);
    });
};

init();
main();
