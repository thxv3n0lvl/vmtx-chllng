import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './test/tsconfig.json',
            transpileOnly: true
        }
    },
    
    port: 4723,
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554', // NOTE: Update according your device
        'appium:platformVersion': '14',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './challenge/uamp.apk', // Path to your native app
        'appium:appPackage': 'com.example.android.uamp.next', // Package name of your app
        'appium:appActivity': 'com.example.android.uamp.MainActivity', // App activity of the app
        'appium:autoGrantPermissions': true,
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
