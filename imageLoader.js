module.exports = function imageLoader({ src }) {
  // Always add basePath for static export builds
  const basePath = '/scottys-on-the-strand';
  return `${basePath}${src}`;
};
