# ![LOGO](logo.png) CustomSearch **flow**ground Connector

## Description

A generated **flow**ground connector for the CustomSearch API (version v1).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/customsearch/v1/swagger.json<br/>
Generated at: 2019-05-07T17:41:29+03:00

## API Description

Searches over a website or collection of websites

## Authorization

This API does not require authorization.

## Actions

### Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results.

*Tags:* `cse`

#### Input Parameters
* `c2coff` - _optional_ - Turns off the translation between zh-CN and zh-TW.
* `cr` - _optional_ - Country restrict(s).
* `cx` - _optional_ - The custom search engine ID to scope this search query
* `dateRestrict` - _optional_ - Specifies all search results are from a time period
* `exactTerms` - _optional_ - Identifies a phrase that all documents in the search results must contain
* `excludeTerms` - _optional_ - Identifies a word or phrase that should not appear in any documents in the search results
* `fileType` - _optional_ - Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
* `filter` - _optional_ - Controls turning on or off the duplicate content filter.
    Possible values: 0, 1.
* `gl` - _optional_ - Geolocation of end user.
* `googlehost` - _optional_ - The local Google domain to use to perform the search.
* `highRange` - _optional_ - Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
* `hl` - _optional_ - Sets the user interface language.
* `hq` - _optional_ - Appends the extra query terms to the query.
* `imgColorType` - _optional_ - Returns black and white, grayscale, or color images: mono, gray, and color.
    Possible values: color, gray, mono.
* `imgDominantColor` - _optional_ - Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown.
    Possible values: black, blue, brown, gray, green, orange, pink, purple, red, teal, white, yellow.
* `imgSize` - _optional_ - Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
    Possible values: huge, icon, large, medium, small, xlarge, xxlarge.
* `imgType` - _optional_ - Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
    Possible values: clipart, face, lineart, news, photo.
* `linkSite` - _optional_ - Specifies that all search results should contain a link to a particular URL
* `lowRange` - _optional_ - Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
* `lr` - _optional_ - The language restriction for the search results
    Possible values: lang_ar, lang_bg, lang_ca, lang_cs, lang_da, lang_de, lang_el, lang_en, lang_es, lang_et, lang_fi, lang_fr, lang_hr, lang_hu, lang_id, lang_is, lang_it, lang_iw, lang_ja, lang_ko, lang_lt, lang_lv, lang_nl, lang_no, lang_pl, lang_pt, lang_ro, lang_ru, lang_sk, lang_sl, lang_sr, lang_sv, lang_tr, lang_zh-CN, lang_zh-TW.
* `num` - _optional_ - Number of search results to return
* `orTerms` - _optional_ - Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
* `q` - _required_ - Query
* `relatedSite` - _optional_ - Specifies that all search results should be pages that are related to the specified URL
* `rights` - _optional_ - Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
* `safe` - _optional_ - Search safety level
    Possible values: active, high, medium, off.
* `searchType` - _optional_ - Specifies the search type: image.
    Possible values: image.
* `siteSearch` - _optional_ - Specifies all search results should be pages from a given site
* `siteSearchFilter` - _optional_ - Controls whether to include or exclude results from the site named in the as_sitesearch parameter
    Possible values: e, i.
* `sort` - _optional_ - The sort expression to apply to the results
* `start` - _optional_ - The index of the first result to return

### Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results. Uses a small set of url patterns.

*Tags:* `cse`

#### Input Parameters
* `c2coff` - _optional_ - Turns off the translation between zh-CN and zh-TW.
* `cr` - _optional_ - Country restrict(s).
* `cx` - _optional_ - The custom search engine ID to scope this search query
* `dateRestrict` - _optional_ - Specifies all search results are from a time period
* `exactTerms` - _optional_ - Identifies a phrase that all documents in the search results must contain
* `excludeTerms` - _optional_ - Identifies a word or phrase that should not appear in any documents in the search results
* `fileType` - _optional_ - Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
* `filter` - _optional_ - Controls turning on or off the duplicate content filter.
    Possible values: 0, 1.
* `gl` - _optional_ - Geolocation of end user.
* `googlehost` - _optional_ - The local Google domain to use to perform the search.
* `highRange` - _optional_ - Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
* `hl` - _optional_ - Sets the user interface language.
* `hq` - _optional_ - Appends the extra query terms to the query.
* `imgColorType` - _optional_ - Returns black and white, grayscale, or color images: mono, gray, and color.
    Possible values: color, gray, mono.
* `imgDominantColor` - _optional_ - Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown.
    Possible values: black, blue, brown, gray, green, orange, pink, purple, red, teal, white, yellow.
* `imgSize` - _optional_ - Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
    Possible values: huge, icon, large, medium, small, xlarge, xxlarge.
* `imgType` - _optional_ - Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
    Possible values: clipart, face, lineart, news, photo.
* `linkSite` - _optional_ - Specifies that all search results should contain a link to a particular URL
* `lowRange` - _optional_ - Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
* `lr` - _optional_ - The language restriction for the search results
    Possible values: lang_ar, lang_bg, lang_ca, lang_cs, lang_da, lang_de, lang_el, lang_en, lang_es, lang_et, lang_fi, lang_fr, lang_hr, lang_hu, lang_id, lang_is, lang_it, lang_iw, lang_ja, lang_ko, lang_lt, lang_lv, lang_nl, lang_no, lang_pl, lang_pt, lang_ro, lang_ru, lang_sk, lang_sl, lang_sr, lang_sv, lang_tr, lang_zh-CN, lang_zh-TW.
* `num` - _optional_ - Number of search results to return
* `orTerms` - _optional_ - Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
* `q` - _required_ - Query
* `relatedSite` - _optional_ - Specifies that all search results should be pages that are related to the specified URL
* `rights` - _optional_ - Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
* `safe` - _optional_ - Search safety level
    Possible values: high, medium, off.
* `searchType` - _optional_ - Specifies the search type: image.
    Possible values: image.
* `siteSearch` - _optional_ - Specifies all search results should be pages from a given site
* `siteSearchFilter` - _optional_ - Controls whether to include or exclude results from the site named in the as_sitesearch parameter
    Possible values: e, i.
* `sort` - _optional_ - The sort expression to apply to the results
* `start` - _optional_ - The index of the first result to return

## License

**flow**ground :- Telekom iPaaS / googleapis-com-customsearch-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
