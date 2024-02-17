//pseudo API stuff

import { QUOTE_URL } from "../config";

const myQuotes = {
  getQuotes: async () => {
    let response = await fetch(QUOTE_URL);
    let responseJson = await response.json();
    return responseJson;
  },
};

export default myQuotes;
