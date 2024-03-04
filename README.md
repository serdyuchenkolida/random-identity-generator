# Random Identity Generator

This npm package provides a simple JavaScript function to generate random identities with names, genders, nationalities, and ages.

## Installation

To use this package in your project, you can install it via npm:

```bash
npm install random-identity-generator
```

## Usage

```javascript
const generateRandomIdentity = require('random-identity-generator');

// Generate a random identity
const randomIdentity = generateRandomIdentity();
console.log(randomIdentity);
```

The generated identity object will have the following properties:

- `name`: A random name based on the selected gender and nationality.
- `gender`: Either "male" or "female".
- `nationality`: The randomly selected nationality ("US", "UK", "France", "Japan", "India", or "Russia").
- `age`: A random age between 18 and 80.

## Example

```javascript
// Example usage
const randomIdentity = generateRandomIdentity();
console.log(randomIdentity);
```

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
