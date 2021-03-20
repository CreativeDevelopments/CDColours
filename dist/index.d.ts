/**
     * @param {string} text - The text which you want to put a colour
     * @param {string} textColour - The text colour you want (Object)
     * @param {string} backgroundColour - The background colour you want (Object)
     *
     * Example:
     *
     * colour('Hello World', {textColour: 'blue', backgroundColour: 'green'})
     */
declare const colour: (text: string, { textColour, backgroundColour }: {
    textColour?: string | undefined;
    backgroundColour?: string | undefined;
}) => string | void;
export default colour;
