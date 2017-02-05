'use strict'
///<reference path="./typings/index.d.ts"/>
import { injectable, inject } from "inversify";
import { myContainer } from './../common/inversify.config'
import "reflect-metadata";
import { mapClient } from "./../MapClient";
import { LondonTransportData } from "./../londonTransportData";
import * as http from "http";
import * as trans from "./../londonTransportData";
import { TYPES } from "./../common/types";
import { Main } from "./../app"

//console.log(myContainer)

//console.log("this should be a test xxx")

describe("First test group", () => {

    //@inject(TYPES.MapClient) var mapper;

    xit("Basic DI works", () => {
        var mp = myContainer.get<mapClient>(TYPES.MapClient)
        expect(mp).toBeDefined();
    })

    it("Map Client DI works", (done) => {
        var mp = myContainer.get<mapClient>(TYPES.MapClient);
        var ltd = myContainer.get<LondonTransportData>(TYPES.LondonTransportData)
        var m = new Main(ltd, mp);
        m.getGeoData().then(() => {
            expect(m.geoData).toBeDefined();
            var p = Object.getOwnPropertyNames(m.geoData);
           // console.log(p)
           // console.log(m.geoData.entity)
            done();
        }

        )
        expect(m).toBeDefined();
        console.log(m.geoData)
    })
})