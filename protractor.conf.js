exports.config = {
    specs: ['**/*.e2e.spec.js'],
    exclude: ['node_modules/**/*'],
    baseUrl: 'http://localhost:8080',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    }
};