import { injectable, inject } from "inversify";
import "reflect-metadata";
@injectable()
export class mapClient {
    /**
     *
     */
    client;//: typeof MapBoxClient;

    constructor() {
        let MapboxClient = require('mapbox');
        this.client = new MapboxClient('pk.eyJ1IjoiamVyZW15bm9ibGUiLCJhIjoiY2l5YTV3bWJ4MDA0aDMzcGY1aGJ0YmFnMyJ9.C-qwkF2HySGqTjV_9pRgGw');
      
        var msg = "Hello world";
        console.log(msg);

    }

    geo = (): PromiseLike<any> => this.client.geocodeForward('Pitfield Street North,Hoxton, London, UK', function (err, res) {
            //console.log(res);
            console.log("farthaus");
            return res;
        });
}
