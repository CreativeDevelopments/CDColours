const reset: string = '\x1b[0m'
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
    log(text: string, {textColour = 'none', backgroundColour = 'none'}): string | void {
        if (!text) { return console.error("\x1b[36mCDColours \x1b[34m>> \x1b[37mNo text was provided") }
        if (typeof text != 'string') { return console.error("\x1b[36mCDColours \x1b[34m>> \x1b[37mText is not a string, received " + typeof text) }
        if (textColour == 'none' && backgroundColour == 'none') { return console.error("\x1b[36mCDColours \x1b[34m>> \x1b[37mNo colours were specified, try \x1b[1mcolour.log('Hello World!', { textColour: 'blue', backgroundColour: 'white' })\x1b[0m instead") } // Oooo ok ill google n see


        let a = ''
        switch (textColour.toLowerCase()) {
            case 'dark':
            case 'black':
            case 'preto':
            case 'negro':
                a = a + "\x1b[30m";
                break;
                
            case 'red':
            case 'vermelho':
                a = a + "\x1b[31m"
                break;

            case 'green':
            case 'verde':
                a = a + "\x1b[32m"
                break;

            case 'yellow':
            case 'amarelo':
                a = a + "\x1b[33m"
                break;
                
            case 'blue':
            case 'azul':
                a = a + "\x1b[34m"
                break;
                
            case 'magenta': 
            a = a + "\x1b[35m"
                break;

            case 'cyan':
            case 'ciano':
                a = a + "\x1b[36m"
                break;
            
            case 'light':
            case 'branco': // white
            case 'claro': // light
            case 'white':
                a = a + "\x1b[37m"
                break;


            default: 
            break;
        }

        switch (backgroundColour.toLowerCase()) {
            case 'black':
            case 'negro':
            case 'dark':
            case 'preto':
                a = a + "\x1b[40m" + text + reset
                break;
            
            case 'red':
            case 'vermelho':
                a = a + "\x1b[41m" + text + reset;
                break;

            case 'green':
            case 'verde':
                a = a + "\x1b[42m" + text + reset;
                break;
            
            case 'yellow':
            case 'amarelo':
                a = a + "\x1b[43m" + text + reset;
                break;
            
            case 'blue':
            case 'azul':
                 a = a +"\x1b[44m" + text + reset;
                break;

            case 'magenta':
                a = a + "\x1b[45m" + text + reset;
                break;

            case 'cyan':
            case 'ciano':
                a = a + "\x1b[46m" + text + reset;
                break;

            case 'white':
            case 'light':
            case 'branco':
            case 'claro':
                a = a + "\x1b[47m" + text + reset;
                break;

                default: 
                break;
        }

        if (!a.includes(reset)) return a + text + reset
        else return a
    }
};

 console.log(colour.log('CDColours', {}), colour.log('>>', { textColour: 'cyan'}), colour.log('This is a test', { textColour: 'white'}))
 //console.error("\x1b[36mCDColours \x1b[34m>> \x1b[37mNo text was provided")
export default colour; 
