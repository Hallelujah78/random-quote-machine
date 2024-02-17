import { QUOTE_URL } from "../config";

const myQuotes = {
  getQuotes: async (signal) => {
    try {
      let response = await fetch(QUOTE_URL, {
        signal,
      });
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  },
};

export default myQuotes;
