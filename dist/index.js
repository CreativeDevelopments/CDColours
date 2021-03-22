"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reset = '\x1b[0m';
/**
     * @param {string} text - The text which you want to put a colour
     * @param {string} textColour - The text colour you want (Object)
     * @param {string} backgroundColour - The background colour you want (Object)
     *
     * Example:
     *
     * colour('Hello World', {textColour: 'blue', backgroundColour: 'green'})
     */
const colour = (text, { textColour = 'none', backgroundColour = 'none' }) => {
    if (!text) {
        return console.error("\x1b[36mCDColours \x1b[34m>> \x1b[37mNo text was provided");
    }
    if (typeof text != 'string') {
        return console.error("\x1b[36mCDColours \x1b[34m>> \x1b[37mText is not a string, received " + typeof text);
    }
    if (textColour == 'none' && backgroundColour == 'none') {
        return console.error("\x1b[36mCDColours \x1b[34m>> \x1b[37mNo colours were specified, try \x1b[1mcolour('Hello World!', { textColour: 'blue', backgroundColour: 'green' }) \x1b[0minstead");
    }
    let a = text;
    switch (textColour.toLowerCase()) {
        case 'dark':
        case 'black':
        case 'preto':
        case 'negro':
            a = "\x1b[30m" + a + reset;
            break;
        case 'red':
        case 'vermelho':
            a = "\x1b[31m" + a + reset;
            break;
        case 'green':
        case 'verde':
            a = "\x1b[32m" + a + reset;
            break;
        case 'yellow':
        case 'amarelo':
            a = "\x1b[33m" + a + reset;
            break;
        case 'blue':
        case 'azul':
            a = "\x1b[34m" + a + reset;
            break;
        case 'magenta':
            a = "\x1b[35m" + a + reset;
            break;
        case 'cyan':
        case 'ciano':
            a = "\x1b[36m" + a + reset;
            break;
        case 'light':
        case 'branco':
        case 'claro':
        case 'white':
            a = "\x1b[37m" + a + reset;
            break;
        default:
            break;
    }
    switch (backgroundColour.toLowerCase()) {
        case 'black':
        case 'negro':
        case 'dark':
        case 'preto':
            a = "\x1b[40m" + a + reset;
            break;
        case 'red':
        case 'vermelho':
            a = "\x1b[41m" + a + reset;
            break;
        case 'green':
        case 'verde':
            a = "\x1b[42m" + text + reset;
            break;
        case 'yellow':
        case 'amarelo':
            a = "\x1b[43m" + a + reset;
            break;
        case 'blue':
        case 'azul':
            a = "\x1b[44m" + a + reset;
            break;
        case 'magenta':
            a = "\x1b[45m" + a + reset;
            break;
        case 'cyan':
        case 'ciano':
            a = "\x1b[46m" + a + reset;
            break;
        case 'white':
        case 'light':
        case 'branco':
        case 'claro':
            a = "\x1b[47m" + a + reset;
            break;
        default:
            break;
    }
    return a;
};
module.exports = colour;
module.exports.default = colour;
//# sourceMappingURL=index.js.map
