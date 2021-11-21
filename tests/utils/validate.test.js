import validate from '../../src/utils/validate';

const invalidConfigs = [
  'C1-C1-R0-A0',
  'C1-C0-A-R1-R0-A-R-R-C-A',
  'A0-A1-A-R-R0-R-R0-C-C1-A',
  'C-R-C-C-A1-R-R-R-A0-C',
];

const validConfigs = [
  {input: 'C1-C0-A-R1-R0-A-R0-R0-C1-A', output: ['C1', 'C0', 'A', 'R1', 'R0', 'A', 'R0', 'R0', 'C1', 'A']},
];

test('should be required config option', () => {
  expect(validate(false)).toBe(false);
});

for (let config of invalidConfigs) {
  test('should not be invalid configs', () => {
    expect(validate(config)).toBe('invalid');
  });
}

for (let config of validConfigs) {
  test('should be valid configs', () => {
    expect(validate(config.input)).toStrictEqual(config.output);
  });
}