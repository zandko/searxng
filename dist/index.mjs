import axios from 'axios';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class SearxngService {
  /**
   * Creates an instance of SearxngService.
   *
   * @constructor
   * @param {SearxngService} config - The configuration object for SearxngService.
   */
  constructor({
    baseURL,
    defaultSearchParams,
    defaultRequestHeaders
  }) {
    __publicField(this, "baseURL");
    __publicField(this, "defaultSearchParams", {
      format: "json",
      lang: "auto"
    });
    __publicField(this, "defaultRequestHeaders");
    this.baseURL = baseURL;
    this.defaultSearchParams = { format: "json", ...defaultSearchParams };
    this.defaultRequestHeaders = {
      "Content-Type": "application/json",
      ...defaultRequestHeaders
    };
  }
  /**
   * Perform a search with the given input query and optional parameters.
   *
   * @method
   * @async
   * @param {string} input - The search query string.
   * @param {Partial<SearxngSearchParameters>} [params] - Optional additional query parameters.
   * @returns {Promise<SearxngSearchResults | []>} The search results or an empty array if no results are found.
   * @throws {Error} Throws an error if the fetch request fails or returns a non-OK response.
   */
  async search(input, params) {
    const queryParams = {
      q: input,
      ...this.defaultSearchParams,
      ...params
    };
    const url = this.buildUrl("search", queryParams, this.baseURL);
    try {
      const response = await axios.get(url, {
        headers: this.defaultRequestHeaders,
        signal: AbortSignal.timeout(5e3)
      });
      return this.isEmptyResults(response.data) ? {
        query: input,
        number_of_results: 0,
        results: [],
        answers: [],
        corrections: [],
        infoboxes: [],
        suggestions: [],
        unresponsive_engines: []
      } : response.data;
    } catch (error) {
      throw new Error(
        `Failed to fetch search results: ${error.message.toString()}`
      );
    }
  }
  /**
   * Build the search URL with given parameters.
   *
   * @method
   * @private
   * @param {string} endpoint - The API endpoint path.
   * @param {Partial<SearxngSearchParameters>} parameters - The query parameters.
   * @param {string} baseURL - The base URL for the API.
   * @returns {string} The constructed URL.
   */
  buildUrl(endpoint, parameters, baseURL) {
    const searchParams = new URLSearchParams(
      Object.entries(parameters).filter(([, value]) => value !== void 0).map(([key, value]) => {
        if (["categories", "engines"].includes(key) && Array.isArray(value)) {
          return [key, value.join(",")];
        }
        return [key, value.toString()];
      })
    );
    return `${baseURL}/${endpoint}?${searchParams}`;
  }
  /**
   * Checks if the search results are empty.
   *
   * @method
   * @private
   * @param {SearxngSearchResults} results - The search results from SearXNG.
   * @returns {boolean} True if no meaningful results were found, otherwise false.
   */
  isEmptyResults(results) {
    return !results.results.length && !results.answers.length && !results.infoboxes.length && !results.suggestions.length;
  }
}

export { SearxngService };
