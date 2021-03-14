declare const colour: {
    /**
     * @param {string} text - The text which you want to put a colour
     * @param {string} textColour - The text colour you want (Object)
     * @param {string} backgroundColour - The background colour you want (Object)
     *
     * Example:
     *
     * log('Hello World', {textColour: 'blue', backgroundColour: 'white'})
     */
    log(text: string, { textColour, backgroundColour }: {
        textColour: string;
        backgroundColour: string;
    }): string | void;
};
export default colour;
