module.exports = {
    productionSourceMap: false,
    filenameHashing: false,

    pages: {
        popup: {
            template: 'public/browser-extension.html',
            entry: './src/popup/main.js',
            title: 'Popup'
        }
    },
    configureWebpack: {
        devtool: 'cheap-module-source-map'
    },
    pluginOptions: {
        browserExtension: {
            componentOptions: {
                background: {
                    entry: 'src/background.js'
                },
                contentScripts: {
                    entries: {
                        'content-script': 'src/content-scripts/content-script.js'
                    }
                }
            }
        }
    }
}
