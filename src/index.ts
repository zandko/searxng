import type { SearxngSearchParameters, SearxngSearchResults } from './types';
import axios, { AxiosError } from 'axios';

export * from './types';

/**
 * Configuration interface for SearxngService.
 *
 * @interface SearxngServiceConfig
 * @property {string} baseURL - The base URL for the SearXNG API.
 * @property {Partial<SearxngSearchParameters>} [defaultSearchParams] - Default query parameters for the search.
 * @property {Record<string, string>} [defaultRequestHeaders] - Default defaultRequestHeaders for the search requests.
 */
export interface SearxngServiceConfig {
  baseURL: string;
  defaultSearchParams?: Partial<SearxngSearchParameters>;
  defaultRequestHeaders?: Record<string, string>;
}

/**
 * SearxngService class to interact with the SearXNG search engine API.
 *
 * @class SearxngService
 */
export class SearxngService {
  protected baseURL: string;
  protected defaultSearchParams?: Partial<SearxngSearchParameters> = {
    format: 'json',
    lang: 'auto',
  };
  protected defaultRequestHeaders?: Record<string, string>;

  /**
   * Creates an instance of SearxngService.
   *
   * @constructor
   * @param {SearxngService} config - The configuration object for SearxngService.
   */
  constructor({
    baseURL,
    defaultSearchParams,
    defaultRequestHeaders,
  }: SearxngServiceConfig) {
    this.baseURL = baseURL;
    this.defaultSearchParams = { format: 'json', ...defaultSearchParams };
    this.defaultRequestHeaders = {
      'Content-Type': 'application/json',
      ...defaultRequestHeaders,
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
  async search(
    input: string,
    params?: Partial<SearxngSearchParameters>,
  ): Promise<SearxngSearchResults> {
    const queryParams = {
      q: input,
      ...this.defaultSearchParams,
      ...params,
    };

    const url = this.buildUrl('search', queryParams, this.baseURL);

    try {
      const response = await axios.get(url, {
        headers: this.defaultRequestHeaders,
        signal: AbortSignal.timeout(5000),
      });
      return this.isEmptyResults(response.data)
        ? {
            query: input,
            number_of_results: 0,
            results: [],
            answers: [],
            corrections: [],
            infoboxes: [],
            suggestions: [],
            unresponsive_engines: [],
          }
        : response.data;
    } catch (error: unknown) {
      throw new Error(
        `Failed to fetch search results: ${(error as unknown as AxiosError).message.toString()}`,
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
  protected buildUrl(
    endpoint: string,
    parameters: Partial<SearxngSearchParameters>,
    baseURL: string,
  ): string {
    const searchParams = new URLSearchParams(
      Object.entries(parameters)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => {
          if (['categories', 'engines'].includes(key) && Array.isArray(value)) {
            return [key, value.join(',')];
          }
          return [key, value.toString()];
        }) as Array<[string, string]>,
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
  private isEmptyResults(results: SearxngSearchResults): boolean {
    return (
      !results.results.length &&
      !results.answers.length &&
      !results.infoboxes.length &&
      !results.suggestions.length
    );
  }
}
