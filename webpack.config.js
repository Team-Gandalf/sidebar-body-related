const path = require("path");

module.exports = {
    "mode": "development",
    "entry": './client/Index.jsx',
    "output": {
        "path": path.resolve(__dirname, './public'),
        "filename": "App.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.jsx$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            '@babel/preset-react', '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    }
}