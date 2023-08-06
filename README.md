# Remove Whitespace Template Literal

`rmws` is a simple utility function to trim indentation and remove extra spaces from template strings and values.

## Installation

You can install the `rmws` package via npm:

```bash
npm install rmws
```

## Usage

```javascript
import { rmws } from 'rmws';

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

### Removing blank lines and handling multiple template strings and values

```javascript
import { rmws } from 'rmws';

const result = rmws`
    The value is ${5}
    
        The result is ${3 + 7}
        
`;

console.log(result);
// Output:
// The value is 5
// The result is 10
```

### Handling empty strings

```javascript
import { rmws } from 'rmws';

const input = '';
const result = rmws`${input}`;

console.log(result); // Output: (empty string)
```

### Removing leading and trailing whitespace

```javascript
import { rmws } from 'rmws';

const result = rmws`    one, two, three    `;

console.log(result); // Output: one, two, three
```

### Removing leading and trailing whitespace from multiple lines

```javascript
import { rmws } from 'rmws';

const result = rmws`    
    one, two, three    
    four, five, six    
    `;

console.log(result);
// Output:
// one, two, three
// four, five, six
```

### Removing multiple blank lines

```javascript
import { rmws } from 'rmws';

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
