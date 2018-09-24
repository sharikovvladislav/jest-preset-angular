'use strict';

require('core-js/es6/reflect');
require('core-js/es7/reflect');
require('zone.js/dist/zone.js');
require('zone.js/dist/proxy.js');
require('zone.js/dist/sync-test');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('jest-zone-patch');

const AngularSnapshotSerializer = require('./AngularSnapshotSerializer');

const MySerializer = {
  test: AngularSnapshotSerializer.test,
  print: (...rest) => {
    const theResult = AngularSnapshotSerializer.print.call(this, ...rest);

    const transformedResult = theResult.split('\n')
        .map(removeExtraAttribute('_ngcontent'))
        .map(removeExtraAttribute('_nghost'))
        .map(removeExtraAttribute('ng-reflect-'))
        .filter(val => !!val)
        .join('\n');

    return transformedResult;

    function removeExtraAttribute (textToReplace) {
        return val => {
            if (val.includes(textToReplace)) {
                return val.replace(new RegExp(`${textToReplace}.*?$`), '').trim();
            } else {
                return val;
            }
        }
    }
  }
};
const getTestBed = require('@angular/core/testing').getTestBed;
const BrowserDynamicTestingModule = require('@angular/platform-browser-dynamic/testing').BrowserDynamicTestingModule;
const platformBrowserDynamicTesting = require('@angular/platform-browser-dynamic/testing').platformBrowserDynamicTesting;

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

expect.addSnapshotSerializer(AngularSnapshotSerializer);
expect.addSnapshotSerializer(MySerializer);
