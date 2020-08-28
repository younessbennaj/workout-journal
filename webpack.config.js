const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
    //Entry point where webpack start to build dependencies graph 
    entry: './src/index.js',
    //Where webpack put the compiled code 
    output: {
        //We need the absolute path
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        //rules to preprocess files before compilation
        //array of Rule
        rules: [
            {
                //We need to preprocess our JS files because of JSX syntax 
                //We need to convert JSX to vanilla JS using Babel 
                //Thanks to babel-loader package and babel preset-react we can do that
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                },
                //apply this loader if there is any file that matches this pattern (regular expression)
                test: /\.js$/,
            }
        ]
    }
}