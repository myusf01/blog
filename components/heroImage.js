function hasImage({ image }) {
  if (image === undefined) return false;
  return true;
}
function HeroImage({ frontMatter, className }) {
  return hasImage(frontMatter) ? (
    <img
      src={frontMatter.image}
      alt={frontMatter.excerpt}
      className={className}
    />
  ) : (
    <img src="/img/my-ico.jpg" alt="empty-image" className={className} />
  );
}

export default HeroImage;
