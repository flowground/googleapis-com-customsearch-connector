/**
 * Auto-generated action file for "CustomSearch" API.
 *
 * Generated at: 2019-05-07T14:41:29.611Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-customsearch-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'search.cse.siterestrict.list'
 * Endpoint Path: '/v1/siterestrict'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "c2coff",
    "cr",
    "cx",
    "dateRestrict",
    "exactTerms",
    "excludeTerms",
    "fileType",
    "filter",
    "gl",
    "googlehost",
    "highRange",
    "hl",
    "hq",
    "imgColorType",
    "imgDominantColor",
    "imgSize",
    "imgType",
    "linkSite",
    "lowRange",
    "lr",
    "num",
    "orTerms",
    "q",
    "relatedSite",
    "rights",
    "safe",
    "searchType",
    "siteSearch",
    "siteSearchFilter",
    "sort",
    "start"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "c2coff": "c2coff",
    "cr": "cr",
    "cx": "cx",
    "dateRestrict": "dateRestrict",
    "exactTerms": "exactTerms",
    "excludeTerms": "excludeTerms",
    "fileType": "fileType",
    "filter": "filter",
    "gl": "gl",
    "googlehost": "googlehost",
    "highRange": "highRange",
    "hl": "hl",
    "hq": "hq",
    "imgColorType": "imgColorType",
    "imgDominantColor": "imgDominantColor",
    "imgSize": "imgSize",
    "imgType": "imgType",
    "linkSite": "linkSite",
    "lowRange": "lowRange",
    "lr": "lr",
    "num": "num",
    "orTerms": "orTerms",
    "q": "q",
    "relatedSite": "relatedSite",
    "rights": "rights",
    "safe": "safe",
    "searchType": "searchType",
    "siteSearch": "siteSearch",
    "siteSearchFilter": "siteSearchFilter",
    "sort": "sort",
    "start": "start"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'search.cse.siterestrict.list',
        pathName: '/v1/siterestrict',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}