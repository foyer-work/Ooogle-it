export const asString = (element) => {
  return `${element}`;
};

export const millisToSecs = (timeInMillis) => {
  return (timeInMillis / 1000).toFixed(2);
};

export const reverseString = (str) => {
  return str.split('').reverse().join('');
};

export const getGoogledSearchTerms = () => {
  /*
    Strategy : When a google search takes place, title of the page contains the search terms.
    page title string = <SEARCH-TERMS> - Google Search
    so we are removing the last bit ("- Google Search") from the string
  */
  const pageTitle = document.title;
  const LAST_BIT = '- Google Search';
  // reversing the string before removing last bit because replace funciton acts on the first substr it encounters.
  // this will make sure only last bit is removed not parts of user's search.
  const pageTitleWithLastBitRemoved = reverseString(pageTitle).replace(
    reverseString(LAST_BIT),
    ''
  );

  console.log(pageTitleWithLastBitRemoved);

  const searchTerms = reverseString(pageTitleWithLastBitRemoved);
  return searchTerms;
};
