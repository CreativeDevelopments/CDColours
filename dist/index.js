Object.defineProperty(exports, "__esModule", { value: true });

const reset = '\x1b[0m';

const colours = {
    // ENGLISH
    black: 0, dark: 0,
    red: 1,
    green: 2,
    yellow: 3,
    blue: 4,
    magenta: 5,
    cyan: 6,
    light: 7, white: 7,
    // PORTUGUESE
    negro: 0, preto: 0,
    vermelho: 1,
    verde: 2,
    amarelo: 3,
    azul: 4,
    magenta: 5,
    ciano: 6,
    branco: 7, claro: 7,
    // ITALIAN
    nero: 0, scuro: 0,
    rosso: 1,
    verde: 2,
    giallo: 3,
    blu: 4,
    magenta: 5,
    ciano: 6,
    bianco: 7,
    //HINDI
    काला: 0, सावला: 0,
    लाल: 1,
    हरा: 2,
    पीला: 3,
    नीला: 4,
    मैजेंटा: 5,
    सायन: 6,
    गोरा: 7, सफेद: 7, 
}

/**
     * @param {string} text - The text which you want to put a colour
     * @param {string} textColour - The text colour you want (Object)
     * @param {string} backgroundColour - The background colour you want (Object)
     *
     * Example:
     *
     * colour('Hello World', {textColour: 'blue', backgroundColour: 'green'})
     */
const colour = (text, { textColour, backgroundColour }) => {
    if (typeof text != 'string')
        return console.error("\x1b[36mCDColours \x1b[34m>> \x1b[37mText is not a string, received " + typeof text);

    function resolveColour(colour) {
        if(typeof colour != 'string') return null;
        return colours[colour.toLowerCase()];
    }

    function buildColour(string, txtC, bgC){
        const txt = `${typeof txtC == 'number' ? `\x1b[3${txtC}m` : ''}`;
        const bg = `${typeof bgC == 'number' ? `\x1b[4${bgC}m` : ''}`;
        return `${txt}${bg}${string}${reset}`;
    }
    
    return buildColour(
        text,
        resolveColour(textColour),
        resolveColour(backgroundColour),
    );
};
module.exports = colour;
module.exports.default = colour;
//# sourceMappingURL=index.js.map
