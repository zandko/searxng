/**
 * Represents the various categories available in SearXNG.
 */
type SearxngCategory = 'general' | 'translate' | 'web' | 'wikimedia' | 'images' | 'videos' | 'news' | 'map' | 'music' | 'lyrics' | 'radio' | 'it' | 'packages' | 'q&a' | 'repos' | 'software_wikis' | 'science' | 'scientific_publications' | 'wikimedia' | 'files' | 'apps' | 'social_media';
/**
 * Represents the various search engines available in SearXNG.
 */
type SearxngEngine = '1337x' | '9gag' | 'ahmia' | 'alpinelinux' | 'annas_archive' | 'apkmirror' | 'apple_app_store' | 'apple_maps' | 'archlinux' | 'artic' | 'arxiv' | 'ask' | 'bandcamp' | 'base' | 'bilibili' | 'bing' | 'bing_images' | 'bing_news' | 'bing_videos' | 'bpb' | 'brave' | 'bt4g' | 'btdigg' | 'ccc_media' | 'chefkoch' | 'command' | 'core' | 'cppreference' | 'crates' | 'crossref' | 'currency_convert' | 'dailymotion' | 'deepl' | 'deezer' | 'demo_offline' | 'demo_online' | 'destatis' | 'deviantart' | 'dictzone' | 'digbt' | 'discourse' | 'docker_hub' | 'doku' | 'duckduckgo' | 'duckduckgo_definitions' | 'duckduckgo_extra' | 'duckduckgo_weather' | 'duden' | 'dummy-offline' | 'dummy' | 'ebay' | 'elasticsearch' | 'emojipedia' | 'fdroid' | 'findthatmeme' | 'flickr' | 'flickr_noapi' | 'freesound' | 'frinkiac' | 'fyyd' | 'genius' | 'gitea' | 'github' | 'goodreads' | 'google' | 'google_images' | 'google_news' | 'google_play' | 'google_scholar' | 'google_videos' | 'hackernews' | 'hex' | 'imdb' | 'imgur' | 'ina' | 'internet_archive_scholar' | 'invidious' | 'jisho' | 'json_engine' | 'kickass' | 'lemmy' | 'lib_rs' | 'libretranslate' | 'lingva' | 'livespace' | 'loc' | 'mastodon' | 'material_icons' | 'mediathekviewweb' | 'mediawiki' | 'meilisearch' | 'metacpan' | 'mixcloud' | 'mojeek' | 'mongodb' | 'moviepilot' | 'mozhi' | 'mrs' | 'mullvad_leta' | 'mwmbl' | 'mysql_server' | 'npm' | 'nyaa' | 'odysee' | 'open_meteo' | 'opensemantic' | 'openstreetmap' | 'openverse' | 'pdbe' | 'peertube' | 'photon' | 'pinterest' | 'piped' | 'piratebay' | 'pixiv' | 'pkg_go_dev' | 'podcastindex' | 'postgresql' | 'presearch' | 'pubmed' | 'pypi' | 'qwant' | 'radio_browser' | 'recoll' | 'reddit' | 'redis_server' | 'rottentomatoes' | 'rumble' | 'scanr_structures' | 'searchcode_code' | 'searx_engine' | 'seekr' | 'semantic_scholar' | 'sepiasearch' | 'seznam' | 'sjp' | 'solidtorrents' | 'solr' | 'soundcloud' | 'spotify' | 'springer' | 'sqlite' | 'stackexchange' | 'startpage' | 'stract' | 'svgrepo' | 'tagesschau' | 'tineye' | 'tokyotoshokan' | 'tootfinder' | 'torznab' | 'translated' | 'unsplash' | 'vimeo' | 'voidlinux' | 'wallhaven' | 'wikicommons' | 'wikidata' | 'wikipedia' | 'wolframalpha_api' | 'wolframalpha_noapi' | 'wordnik' | 'wttr' | 'www1x' | 'xpath' | 'yacy' | 'yahoo' | 'yahoo_news' | 'yandex_music' | 'yep' | 'youtube_api' | 'youtube_noapi' | 'yummly' | 'zlibrary';
/**
 * Type representing the language codes supported by SearXNG.
 */
type SearxngLocale = 'af' | 'ar' | 'bg' | 'bn' | 'bo' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'dv' | 'el-GR' | 'en' | 'eo' | 'es' | 'et' | 'eu' | 'fa-IR' | 'fi' | 'fil' | 'fr' | 'gl' | 'he' | 'hr' | 'hu' | 'ia' | 'id' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'ml' | 'ms' | 'nb-NO' | 'nl' | 'nl-BE' | 'oc' | 'pa' | 'pap' | 'pl' | 'pt' | 'pt-BR' | 'ro' | 'ru' | 'si' | 'sk' | 'sl' | 'sr' | 'sv' | 'szl' | 'ta' | 'te' | 'th' | 'tr' | 'uk' | 'vi' | 'zh-HK' | 'zh-Hans-CN' | 'zh-Hant-TW';
/**
 * Type representing the plugins supported by SearXNG.
 */
type SearxngPlugin = 'Hash_plugin' | 'Self_Information' | 'Tracker_URL_remover' | 'Ahmia_blacklist' | 'Hostnames_plugin' | 'Open_Access_DOI_rewrite' | 'Vim-like_hotkeys' | 'Tor_check_plugin';
/**
 * Interface representing the parameters for SearXNG Search API.
 */
interface SearxngSearchParameters {
    /**
     * An array of active search categories.
     * Comma-separated list.
     * @example ['general', 'web', 'images']
     */
    categories?: SearxngCategory[];
    /**
     * An array of active search engines.
     * Comma-separated list.
     * @example ['google', 'bing']
     */
    engines?: SearxngEngine[];
    /**
     * The language code for the search.
     * Defaults to the configuration setting.
     * @example "auto"
     */
    lang?: 'auto' | SearxngLocale;
    /**
     * The page number for search results.
     * Defaults to 1.
     * @default 1
     */
    pageno?: number;
    /**
     * The time range for search results.
     * Supported values are "day", "month", and "year".
     * @example "day" | "month" | "year"
     */
    time_range?: 'day' | 'month' | 'year';
    /**
     * The output format of the search results.
     * Supported values are "json", "csv", and "rss".
     * @example "json" | "csv" | "rss"
     */
    format?: 'json' | 'csv' | 'rss';
    /**
     * Indicates whether search results should open in a new tab.
     * Supported values are 0 (false) and 1 (true).
     * @default 0
     */
    results_on_new_tab?: 0 | 1;
    /**
     * Indicates whether to proxy image results through SearXNG.
     * Defaults to the configuration setting.
     * @default true
     */
    image_proxy?: boolean;
    /**
     * The autocomplete service for search suggestions.
     * Supported values include "google", "dbpedia", "duckduckgo", and others.
     * @example "google" | "dbpedia" | "duckduckgo" | "mwmbl" | "startpage" | "wikipedia" | "stract" | "swisscows" | "qwant"
     */
    autocomplete?: 'google' | 'dbpedia' | 'duckduckgo' | 'mwmbl' | 'startpage' | 'wikipedia' | 'stract' | 'swisscows' | 'qwant';
    /**
     * The safe search filter level.
     * Supported values are 0, 1, and 2.
     * @default 0
     */
    safesearch?: 0 | 1 | 2;
    /**
     * The theme of the search interface.
     * Defaults to 'simple'.
     * @default 'simple'
     */
    theme?: 'simple';
    /**
     * A list of enabled plugins.
     * @default ['Hash_plugin', 'Self_Information', 'Tracker_URL_remover', 'Ahmia_blacklist']
     * @example ['Hash_plugin', 'Self_Information']
     */
    enabled_plugins?: SearxngPlugin[];
    /**
     * A list of disabled plugins.
     * @default ['Hostnames_plugin', 'Open_Access_DOI_rewrite', 'Vim-like_hotkeys', 'Tor_check_plugin']
     * @example ['Tracker_URL_remover', 'Tor_check_plugin']
     */
    disabled_plugins?: SearxngPlugin[];
    /**
     * A list of enabled search engines.
     * @example ['google', 'bing']
     */
    enabled_engines?: SearxngEngine[];
    /**
     * A list of disabled search engines.
     * @example ['duckduckgo', 'yahoo']
     */
    disabled_engines?: SearxngEngine[];
}
/**
 * Represents a single search result from the SearXNG API.
 */
interface SearxngSearchResult {
    url: string;
    title: string;
    content?: string;
    engine: SearxngEngine;
    parsed_url: string[];
    template: 'default.html' | 'videos.html' | 'images.html';
    engines: SearxngEngine[];
    positions: number[];
    publishedDate?: Date | null;
    thumbnail?: null | string;
    is_onion?: boolean;
    score: number;
    category: SearxngCategory;
    length?: null | string;
    duration?: null | string;
    iframe_src?: string;
    source?: string;
    metadata?: string;
    resolution?: null | string;
    img_src?: string;
    thumbnail_src?: string;
    img_format?: 'jpeg' | 'Culture Snaxx' | 'png';
}
/**
 * Represents the full set of search results returned by the SearXNG API.
 */
interface SearxngSearchResults {
    query: string;
    number_of_results: number;
    results: SearxngSearchResult[];
    answers: string[];
    corrections: string[];
    infoboxes: Array<{
        infobox: string;
        content: string;
        engine: string;
        engines: string[];
    }>;
    suggestions: string[];
    unresponsive_engines: string[];
}

/**
 * Configuration interface for SearxngService.
 *
 * @interface SearxngServiceConfig
 * @property {string} baseURL - The base URL for the SearXNG API.
 * @property {Partial<SearxngSearchParameters>} [defaultSearchParams] - Default query parameters for the search.
 * @property {Record<string, string>} [defaultRequestHeaders] - Default defaultRequestHeaders for the search requests.
 */
interface SearxngServiceConfig {
    baseURL: string;
    defaultSearchParams?: Partial<SearxngSearchParameters>;
    defaultRequestHeaders?: Record<string, string>;
}
/**
 * SearxngService class to interact with the SearXNG search engine API.
 *
 * @class SearxngService
 */
declare class SearxngService {
    protected baseURL: string;
    protected defaultSearchParams?: Partial<SearxngSearchParameters>;
    protected defaultRequestHeaders?: Record<string, string>;
    /**
     * Creates an instance of SearxngService.
     *
     * @constructor
     * @param {SearxngService} config - The configuration object for SearxngService.
     */
    constructor({ baseURL, defaultSearchParams, defaultRequestHeaders, }: SearxngServiceConfig);
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
    search(input: string, params?: Partial<SearxngSearchParameters>): Promise<SearxngSearchResults>;
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
    protected buildUrl(endpoint: string, parameters: Partial<SearxngSearchParameters>, baseURL: string): string;
    /**
     * Checks if the search results are empty.
     *
     * @method
     * @private
     * @param {SearxngSearchResults} results - The search results from SearXNG.
     * @returns {boolean} True if no meaningful results were found, otherwise false.
     */
    private isEmptyResults;
}

export { type SearxngCategory, type SearxngEngine, type SearxngLocale, type SearxngPlugin, type SearxngSearchParameters, type SearxngSearchResult, type SearxngSearchResults, SearxngService, type SearxngServiceConfig };
