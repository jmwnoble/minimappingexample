
///<reference path="./typings/index.d.ts"/>
import * as http from "http";
import * as https from "https";


/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
export function getJSON(options: http.RequestOptions, onResult)
{
    console.log("rest::getJSON");

    var reqFunc = res =>
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    }

    var req = options.port == 443 ? https.request(options, reqFunc) : http.request(options, reqFunc);
  

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};

export function getCSV(options: http.RequestOptions, onResult)
{
    console.log("rest::getCSV");

    var reqFunc = res =>
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            //var obj = .parse(output);
            onResult(res.statusCode, output);
        });
    }

    var req = options.port == 443 ? https.request(options, reqFunc) : http.request(options, reqFunc);
  

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};