var jsdom = require('jsdom');

const { JSDOM } = jsdom;
// console.log('------------------------------------------')
// console.log(jsdom)
// console.log('------------------------------------------')

// var document = jsdom.jsdom('<!doctype html><html><body></body></html>');
var dom = new JSDOM('<!doctype html><html><body></body></html>');

// var window = document.defaultView;
var window = dom.window;

// global.document = document;
global.document = window.document;
global.HTMLElement = window.HTMLElement;
global.XMLHttpRequest = window.XMLHttpRequest;

require('core-js/es6');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());