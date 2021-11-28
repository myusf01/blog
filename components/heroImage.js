function hasImage({ image }) {
  // TODO:
  //      if frontMatter doest have any image
  //      select and return first image
  //      if post doesn't contain any image
  //      return default empty image or nothing
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
