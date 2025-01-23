import eslint from 'eslint';

export const lint = (config, text) => {
  const cli = new eslint.ESLint(config)

  return cli.lintText(text);
};
