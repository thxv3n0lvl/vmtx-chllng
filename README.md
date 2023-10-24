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

## FAQ
- Why you used webdriverio?
	- A driver's client is needed in order to use Appium, I chose WDIO because it has a good CLI tool that helps on the setup.

- Why that small amount of tests?
	- Because the apk used doesn't have much functionality, also this sort of tests are brittle and flaky.

- What's the rationale behind the structure used?
	- My idea here is to show that I know what a Page Object is and that I don't like to use it as it's an unecessary abstraction. I prefer pure functions.
There are other "patterns" like *step fragments* or *steps definitions*, but I don't think is necessary to showcase that in here as this is not gonna scale up and I really want to finish the challenge so it can be seen by the reviewer.

- How long it took?
	- For this one specifically around 5 hours setting up the env and creating the page objects and finding the elements through `uiautomator-viewer` and finally hooking up `allure`.

	## Report preview

	![Preview](https://github.com/thxv3n0lvl/vmtx-chllng/blob/main/assets/test-report.png)
