module.exports = {
  '**/*.{js,jsx,ts,tsx}': (filenames) =>
    `next lint --fix --no-ignore --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
  '**/*.{js,jsx,ts,tsx,json,css}': 'npx prettier --write --ignore-unknown',
};
