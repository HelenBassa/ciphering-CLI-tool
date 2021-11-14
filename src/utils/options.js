import parse from './parse.js';

const { config, input, output } = parse(process.argv.slice(2));

export { config, input, output };
