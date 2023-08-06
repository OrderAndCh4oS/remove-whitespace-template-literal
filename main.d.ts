declare const regex: RegExp;

/**
 * Trims the indentation and removes extra spaces from the template string and values.
 * @param {TemplateStringsArray} strings - The array of template strings.
 * @param {...(string | number)} values - The list of values to be interpolated into the template.
 *
 * @returns {string} The processed output with trimmed indentation and removed extra spaces.
 */
declare function removeWhitespace(
    strings: TemplateStringsArray,
    ...values: Array<string | number>
): string;

export default removeWhitespace;
export const rmws: typeof removeWhitespace;
