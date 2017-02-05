"use strict"
////<reference path="./typings/index.d.ts"/>
import { myContainer } from './common/inversify.config'
import { injectable, inject } from "inversify";
import "reflect-metadata";
import * as map from "./MapClient";
import * as http from "http";
import {LondonTransportData} from "./londonTransportData";
import { TYPES } from "./common/types";

console.log(myContainer)
// let MapboxClient = require('mapbox');
// let client = new MapboxClient('pk.eyJ1IjoiamVyZW15bm9ibGUiLCJhIjoiY2l5YTV3bWJ4MDA0aDMzcGY1aGJ0YmFnMyJ9.C-qwkF2HySGqTjV_9pRgGw');
// let geo = () => client.geocodeForward('Pitfield Street North,Hoxton, London, UK', function(err, res) {
//   //console.log(res);
//       console.log("farthaus");
//       return res;
// });
export class Start {
    /**
     *
     */
    constructor() {
        console.log(myContainer)
        
    }
}

export class Main {
    geoData;
    /**
     *
     */
    constructor(@inject(TYPES.LondonTransportData) ltd: LondonTransportData, @inject(TYPES.MapClient) private mapper: map.mapClient) {
        //console.log(TYPES);
        //console.log(myContainer)
        //this.run();
        //console.log('Server running')
    }

    getGeoData = () => {
        return this.mapper.geo().then(data => { 
            this.geoData = data;
        })
    }

    run = () => http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        //var geo = new tester.mapClient();
        //this.ltd.getCycleData(res);
        this.mapper.geo().then(data => { 
            this.geoData = data;
            res.end("Hello world flunky" + "\n" + JSON.stringify(data, null, 3)); 
        })

    }).listen(1442, "127.0.0.1");


}

//var main = myContainer.get<Main>(TYPES.Main);
//main.run();
var s = new Start();
