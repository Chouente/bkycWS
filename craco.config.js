//craco.config.js
module.exports = {
    style: {
        postcss:[
            require('tailwindcss'),
            require('flag-icon-css'),
            require('autoprefixer'),
        ]
    }
}