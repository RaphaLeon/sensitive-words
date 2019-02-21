# Example

```shell
$ npm install sensitive-words --save
```

```javascript
const { sensitiveWords } = require('sensitive-words')
//ES2015 modules
import { sensitiveWords } = from 'sensitive-words'
const filtered = sensitiveWords(
  'The apple macbook pro have a touchbar ', 
  ['pro', 'touchbar']
);

console.log(filtered);
// The apple macbook *** have a ***
```