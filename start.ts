"use strict"
////<reference path="./typings/index.d.ts"/>
import { myContainer } from './common/inversify.config'
import { injectable, inject } from "inversify";
import "reflect-metadata";
import * as http from "http";
import { mapClient } from "./MapClient";
import { LondonTransportData } from "./londonTransportData";
import { TYPES } from "./common/types";
import { Main } from "./app"

export class Start{
    /**
     *
     */
    constructor() {
        var mp = myContainer.get<mapClient>(TYPES.MapClient);
        var ltd = myContainer.get<LondonTransportData>(TYPES.LondonTransportData)
        var m = new Main(ltd, mp);
        m.run();
        
    }
}

new Start();