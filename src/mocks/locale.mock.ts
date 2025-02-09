const mockTFunc = (key: string, options: Record<string, string | number> = {}) => {
  const optionsString = Object.entries(options)
    .map(([k, v]) => `${k}: ${v}`)
    .join(',');
  return optionsString ? `${key}|${optionsString}` : key;
};

export default mockTFunc;
