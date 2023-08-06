# Remove Whitespace Template Literal

`rmws` is a simple utility function to trim indentation and remove extra spaces from template strings and values.

## Installation

You can install the `rmws` package via npm:

```bash
npm install @orderandchaos/rmws
```

## Usage

```javascript
import { rmws } from '@orderandchaos/rmws';

const result = rmws`
    Hello,   
      this is a test.   
        We are removing extra spaces.   
`;

console.log(result);
// Output:
// Hello,
// this is a test.
// We are removing extra spaces.
```

## API

`rmws(strings: TemplateStringsArray, ...values: (string | number)[]): string`

- `strings`: The array of template strings.
- `...values`: The list of values to be interpolated into the template.

Returns the processed output with trimmed indentation and removed extra spaces.

## Examples

### Removes whitespace, blank lines and handles multiple template strings and values

```javascript
import { rmws } from '@orderandchaos/rmws';

const result = rmws`
    The value is ${5}
    
        The result is ${3 + 7}
        
`;

console.log(result);
// Output:
// The value is 5
// The result is 10
```

### Removes leading and trailing whitespace

```javascript
import { rmws } from '@orderandchaos/rmws';

const result = rmws`    
    one, two, three    
    four, five, six    
    `;

console.log(result);
// Output:
// one, two, three
// four, five, six
```

### Removes multiple blank lines

```javascript
import { rmws } from '@orderandchaos/rmws';

const result = rmws`    
    
    
    
    one, two, three    
    
    
    four, five, six    
    
    
    `;

console.log(result);
// Output:
// one, two, three
// four, five, six
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

