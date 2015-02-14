module.exports = {
  root: '.',
  suites: ['app/test'],
    plugins: {
        sauce: {
            browsers: [
                {
                    "browserName": "internet explorer",
                    "platform":    "Windows 8.1",
                    "version":     "11"
                },
                {
                    "browserName": "internet explorer",
                    "platform":    "Windows 7",
                    "version":     "11"
                },
                {
                    "browserName": "internet explorer",
                    "platform":    "Windows 7",
                    "version":     "10"
                },

                {
                    "browserName": "chrome",
                    "platform":    "Windows 8.1",
                    "version":     "beta"
                },
                {
                    "browserName": "chrome",
                    "platform":    "Windows 8.1",
                    "version":     "40"
                },
                {
                    "browserName": "chrome",
                    "platform":    "OS X 10.10",
                    "version":     ""
                },
                {
                    "browserName": "chrome",
                    "platform":    "Linux",
                    "version":     "40"
                },

                {
                    "browserName": "firefox",
                    "platform":    "Windows 8.1",
                    "version":     ""
                },
                {
                    "browserName": "firefox",
                    "platform":    "OS X 10.10",
                    "version":     ""
                },
                {
                    "browserName": "firefox",
                    "platform":    "Linux",
                    "version":     ""
                },

                {
                    "browserName": "safari",
                    "platform":    "OS X 10.9",
                    "version":     "7"
                }
            ]
        }
    }
};
