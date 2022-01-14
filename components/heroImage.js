import CustomImage from "./customImage";

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
    <CustomImage
      source={frontMatter.image}
      width={900}
      height={600}
      alt={frontMatter.excerpt}
      className={className}
    />

  ) : (
    <CustomImage
      source="/img/my-ico.jpg"
      width={900}
      height={600}
      alt="empty-image"
      className={className}
    />
  );
}

export default HeroImage;
