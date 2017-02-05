///<reference path="./typings/index.d.ts"/>
import * as rest from "./requester"
import * as http from "http";
import * as parse from 'csv-parse';
import { injectable, inject } from "inversify";
import "reflect-metadata";
@injectable() 
    export class LondonTransportData {

        /**
         *
         */
        constructor() {

        }

        getCycleData = (res: http.ServerResponse) => {

            var options = {
                host: 'cycling.data.tfl.gov.uk',
                //port: 443,
                path: '/usage-stats/01aJourneyDataExtract10Jan16-23Jan16.csv',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/csv'
                }
            };
            rest.getCSV(options,
                function (statusCode, result) {
                    // I could work with the result html/json here.  I could also just return it
                    //console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
                    res.statusCode = statusCode;
                    res.write(result);
                });
        }
    }

