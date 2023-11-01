## Install

Install everything

`$ npm i`

## Android configuration

In order to setup your environment you can either follow Android development setup from the official page or through a cli tool called appium-doctor

`$ npx appium-doctor --android`

## Test framework configuration
The only need you need to modify is the `wdio.conf.ts` file.
For the Android capabilities modifies these two items with the info you got on your system:

	capabilities: [{
	  ... // zip zip 
	  'appium:deviceName': 'emulator-5554', 
	  'appium:platformVersion': '14',
	}]

## Usage
To see a report, you need to run tests first:

`$ npm run wdio`

NOTE: I left a failing test so you can see it on the reporting tool.

To see the report

`$ npm run allure`

This is going to prompt a local setup for Allure and use the already generated report.
Go to URL indicated in the CLI to access the report if your browser doesn't open automatically.
Regulary it opens on: http://localhost:43351 


## Report preview

![Preview](https://github.com/thxv3n0lvl/vmtx-chllng/blob/main/assets/test-report.png)
