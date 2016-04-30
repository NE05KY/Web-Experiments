exports.config = {
    specs: ['**/*spec.js'],
    baseUrl: 'http://localhost:8080',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    }
};