import { Options } from 'tsup';

const options: Options = {
  format: ['cjs', 'esm'],
  clean: true,
  splitting: true,
  dts: true,
  entry: ['src/index.ts'],
  minify: true,
  external: ['react', 'react-dom'],
};

export default options;
