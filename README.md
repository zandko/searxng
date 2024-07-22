# SearXNG Service

A TypeScript service to interact with the SearXNG search engine API. This service allows you to perform searches and retrieve results in various formats with customizable parameters.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Types](#types)
  - [SearxngCategory](#searxngcategory)
  - [SearxngEngine](#searxngengine)
  - [SearxngLocale](#searxnglocale)
  - [SearxngPlugin](#searxngplugin)
  - [SearxngSearchParameters](#searxngsearchparameters)
  - [SearxngSearchResult](#searxngsearchresult)
  - [SearxngSearchResults](#searxngsearchresults)
- [Configuration](#configuration)
- [Methods](#methods)
  - [search](#search)
- [Examples](#examples)

## Installation

```bash
npm install searxng
```

## Usage

First, import and instantiate the `SearxngService` with your configuration:

```typescript
import { SearxngService, type SearxngServiceConfig } from 'searxng';

const config: SearxngServiceConfig = {
  baseURL: 'https://your-searxng-instance.com',
  defaultSearchParams: {
    format: 'json',
    lang: 'auto',
  },
  defaultRequestHeaders: {
    'Content-Type': 'application/json',
  },
};

const searxngService = new SearxngService(config);
```

## Types

### SearxngCategory

```typescript
export type SearxngCategory =
  | 'general'
  | 'translate'
  | 'web'
  | 'wikimedia'
  | 'images'
  | 'videos'
  | 'news'
  | 'map'
  | 'music'
  | 'lyrics'
  | 'radio'
  | 'it'
  | 'packages'
  | 'q&a'
  | 'repos'
  | 'software_wikis'
  | 'science'
  | 'scientific_publications'
  | 'wikimedia'
  | 'files'
  | 'apps'
  | 'social_media';
```

### SearxngEngine

```typescript
export type SearxngEngine =
  | '1337x'
  | '9gag'
  // Add all other engines here
  | 'zlibrary';
```

### SearxngLocale

```typescript
export type SearxngLocale =
  | 'af'
  | 'ar'
  | 'bg'
  // Add all other locales here
  | 'zh-Hant-TW';
```

### SearxngPlugin

```typescript
export type SearxngPlugin =
  | 'Hash_plugin'
  | 'Self_Information'
  // Add all other plugins here
  | 'Tor_check_plugin';
```

### SearxngSearchParameters

```typescript
export interface SearxngSearchParameters {
  categories?: SearxngCategory[];
  engines?: SearxngEngine[];
  lang?: 'auto' | SearxngLocale;
  pageno?: number;
  time_range?: 'day' | 'month' | 'year';
  format?: 'json' | 'csv' | 'rss';
  results_on_new_tab?: 0 | 1;
  image_proxy?: boolean;
  autocomplete?: 'google' | 'dbpedia' | 'duckduckgo' | 'mwmbl' | 'startpage' | 'wikipedia' | 'stract' | 'swisscows' | 'qwant';
  safesearch?: 0 | 1 | 2;
  theme?: 'simple';
  enabled_plugins?: SearxngPlugin[];
  disabled_plugins?: SearxngPlugin[];
  enabled_engines?: SearxngEngine[];
  disabled_engines?: SearxngEngine[];
}
```

### SearxngSearchResult

```typescript
export interface SearxngSearchResult {
  url: string;
  title: string;
  content: string;
  img_src: string;
  engine: string;
  parsed_url: string[];
  template: string;
  engines: string[];
  positions: number[];
  score: number;
  category: string;
  pretty_url: string;
  open_group?: boolean;
  close_group?: boolean;
}
```

### SearxngSearchResults

```typescript
export interface SearxngSearchResults {
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
```

## Configuration

```typescript
export interface SearxngServiceConfig {
  baseURL: string;
  defaultSearchParams?: Partial<SearxngSearchParameters>;
  defaultRequestHeaders?: Record<string, string>;
}
```

## Methods

### search

Perform a search with the given input query and optional parameters.

```typescript
async search(
  input: string,
  params?: Partial<SearxngSearchParameters>,
): Promise<SearxngSearchResults>
```

- `input` (string): The search query string.
- `params` (Partial<SearxngSearchParameters>, optional): Optional additional query parameters.

Returns a promise that resolves to `SearxngSearchResults`.

## Examples

### Basic Search

```typescript
import { SearxngService, type SearxngServiceConfig } from 'searxng';

const config: SearxngServiceConfig = {
  baseURL: 'https://your-searxng-instance.com',
  defaultSearchParams: {
    format: 'json',
    lang: 'auto',
  },
  defaultRequestHeaders: {
    'Content-Type': 'application/json',
  },
};

const searxngService = new SearxngService(config);

async function performSearch() {
  try {
    const results = await searxngService.search('example query');
    console.log(results);
  } catch (error) {
    console.error('Search failed:', error);
  }
}

performSearch();
```

### Search with Parameters

```typescript
import { SearxngService, type SearxngServiceConfig } from 'searxng';

const config: SearxngServiceConfig = {
  baseURL: 'https://your-searxng-instance.com'
};

const searxngService = new SearxngService(config);

async function performSearchWithParams() {
  const searchParams = {
    categories: ['general', 'web'],
    engines: ['google', 'bing'],
    lang: 'en',
    pageno: 2,
    time_range: 'month',
    format: 'json',
  };

  try {
    const results = await searxngService.search('example query', searchParams);
    console.log(results);
  } catch (error) {
    console.error('Search failed:', error);
  }
}

performSearchWithParams();
```
