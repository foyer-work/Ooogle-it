const API_URL = `API_ENDPOINT`;

export const search = async (searchQuery) => {
  let result = await fetch(`${API_URL}/?q=${searchQuery}`);
  result = await result.json();

  return result.response;
};
