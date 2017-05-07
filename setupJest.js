require('core-js/es6/reflect');
require('core-js/es7/reflect');
require('zone.js');
require('zone.js/dist/proxy.js');
require('zone.js/dist/sync-test');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('jest-zone-patch');
const AngularSnapshotSerializer = require('./AngularSnapshotSerializer');
const HTMLCommentSerializer = require('./HTMLCommentSerializer');
const { getTestBed } = require('@angular/core/testing');
const {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} = require('@angular/platform-browser-dynamic/testing');

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

expect.addSnapshotSerializer(HTMLCommentSerializer);
expect.addSnapshotSerializer(AngularSnapshotSerializer);
