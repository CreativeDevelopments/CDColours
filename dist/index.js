"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reset = '\x1b[0m';
const colour = {
    /**
     * @param {string} text - The text which you want to put a colour
     * @param {string} textColour - The text colour you want (Object)
     * @param {string} backgroundColour - The background colour you want (Object)
     *
     * Example:
     *
     * log('Hello World', {textColour: 'blue', backgroundColour: 'white'})
     */
    log(text, { textColour, backgroundColour }) {
        if (!text) {
            return console.error("CDColours >> No text was provided");
        }
        if (typeof text != 'string') {
            return console.error("CDColours >> text isn't a string, received " + typeof text);
        }
        if (!textColour || !backgroundColour) {
            return console.error("CDColours >> No colours where specified, try \`colour.log('Hello World!', { textColour: 'blue', backgroundColour: 'white' })\` instead");
        } // Oooo ok ill google n see
        let a = '';
        switch (textColour.toLowerCase()) {
            case 'dark':
            case 'black':
            case 'preto':
            case 'negro':
                a = a + "\x1b[30m";
                break;
            case 'red':
            case 'vermelho':
                a = a + "\x1b[31m";
                break;
            case 'green':
            case 'verde':
                a = a + "\x1b[32m";
                break;
            case 'yellow':
            case 'amarelo':
                a = a + "\x1b[33m";
                break;
            case 'blue':
            case 'azul':
                a = a + "\x1b[34m";
                break;
            case 'magenta':
                a = a + "\x1b[35m";
                break;
            case 'cyan':
            case 'ciano':
                a = a + "\x1b[36m";
                break;
            case 'light':
            case 'branco': // white
            case 'claro': // light
            case 'white':
                a = a + "\x1b[37m";
                break;
        }
        switch (backgroundColour.toLowerCase()) {
            case 'black':
            case 'negro':
            case 'dark':
            case 'preto':
                a = a + "\x1b[40m" + reset;
                break;
            case 'red':
            case 'vermelho':
                a = a + "\x1b[41m" + reset;
                break;
            case 'green':
            case 'verde':
                a = a + "\x1b[42m" + reset;
                break;
            case 'yellow':
            case 'amarelo':
                a = a + "\x1b[43m" + reset;
                break;
            case 'blue':
            case 'azul':
                a = a + "\x1b[44m" + reset;
                break;
            case 'magenta':
                a = a + "\x1b[45m" + reset;
                break;
            case 'cyan':
            case 'ciano':
                a = a + "\x1b[46m" + reset;
                break;
            case 'white':
            case 'light':
            case 'branco':
            case 'claro':
                a = a + "\x1b[47m" + reset;
                break;
        }
        if (!a.includes(reset))
            return a + text + reset;
        else
            return a;
    }
};
console.log(colour.log('Hello World', { textColour: 'cyan', backgroundColour: 'green' }));
//colour.log('Hello World', { textColour: 'cyan', backgroundColour: 'green' })
exports.default = colour;
// now node dist/index.js
// again
//# sourceMappingURL=index.js.map