import {rmws} from "../main.js";

describe('rmws', () => {
    test('should trim indentation and remove extra spaces', () => {
        const result = rmws`
        Hello,   
          this is a test.   
            We are removing extra spaces.   
        `
        const expectedOutput = 'Hello,\nthis is a test.\nWe are removing extra spaces.';
        expect(result).toBe(expectedOutput);
    });

    test('should remove blank lines', () => {
        const result = rmws`
        
        The value is ${5}
        
            The result is ${3 + 7}
            
        `
        const expectedOutput = 'The value is 5\nThe result is 10';
        expect(result).toBe(expectedOutput);
    });

    test('should handle empty strings', () => {
        const input = '';
        const result = rmws`${input}`;
        const expectedOutput = '';
        expect(result).toBe(expectedOutput);
    });

    test('should remove leading and trailing whitespace', () => {
        const result = rmws`    one, two, three    `;
        const expectedOutput = 'one, two, three';
        expect(result).toBe(expectedOutput);
    });

    test('should remove leading and trailing whitespace from multiple lines', () => {
        const result = rmws`    
            one, two, three    
            four, five, six    
            `;
        const expectedOutput = 'one, two, three\nfour, five, six';
        expect(result).toBe(expectedOutput);
    });

    test('should remove multiple blank lines', () => {
        const result = rmws`    
        
        
        
            one, two, three    
            
            
            
            four, five, six    
            
            
            
            `;
        const expectedOutput = 'one, two, three\nfour, five, six';
        expect(result).toBe(expectedOutput);
    });
});
