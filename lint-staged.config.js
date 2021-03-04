module.exports = {
    "src/**/*.{js,jsx,ts,tsx}": [
        "eslint --fix","git add "
    ],
    "src/**/*.vue":["eslint --fix","stylelint --fix","git add "],
    "src/**/*.{scss,less,styl,css,html}": ["stylelint --fix","git add "]
}