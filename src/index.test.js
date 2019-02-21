import sensitiveWords from '.'

test('replaces blacklisted words with asterisks', () => (
  expect(sensitiveWords(
    'The name of the NX will be the Nintendo Switch', 
    ['switch']
  )).toBe('The name of the NX will be the Nintendo ***')
))

test('replaces multiple instances of blacklisted words', () => (
  expect(sensitiveWords(
    'The name of the NX will be the Nintendo Switch. The switch is awsome!', 
    ['switch']
  )).toBe('The name of the NX will be the Nintendo ***. The *** is awsome!')
))