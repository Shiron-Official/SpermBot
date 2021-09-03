"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import logging to console
const axios = require("axios");
const fs_extra_1 = require("fs-extra");
//Hide cursor
//cli_cursor_1.default.hide();
//Show loading log

//Uptime for project
var botData = JSON.parse(fs_extra_1.readFileSync('./data.json', { encoding: 'utf-8' }));
if (botData.uptime.length > 1){
botData.uptime.forEach(i => {
setInterval(async () => {
        await new Promise(resolve => setTimeout(resolve, 5000));
        try {await axios.get(i)}
        catch(e){};
      }, 15000);
})
};
