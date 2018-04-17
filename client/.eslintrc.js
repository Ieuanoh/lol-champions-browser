module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react", ],
    "extends": "airbnb",
    "rules" : {
        "react/jsx-filename-extension" : 0,
        "jsx-a11y/anchor-is-valid" : 0,
        "import/prefer-default-export" : 0
    }
};