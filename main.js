const regex = /\s*([\n\r])\s*/gm;

/**
 * Trims the indentation and removes extra spaces from the template string and values.
 * @param {TemplateStringsArray} strings - The array of template strings.
 * @param {...(string | number)} values - The list of values to be interpolated into the template.
 *
 * @returns {string} The processed output with trimmed indentation and removed extra spaces.
 */
export default function removeWhitespace(strings, ...values) {
    let output = '';
    for (let i = 0; i < values.length; i++) {
        output += strings[i].replace(regex, "$1") + values[i];
    }
    output += strings[values.length].replace(regex, "$1");

    return output.trim();
}

export const rmws = removeWhitespace;
