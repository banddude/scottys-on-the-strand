module.exports = function imageLoader({ src }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/scottys-on-the-strand' : '';
  return `${basePath}${src}`;
};
