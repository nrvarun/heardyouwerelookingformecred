/* eslint-disable @next/next/no-img-element */

type Props = {
  path: string;
  title: string;
};

const MasonryGalleryItem = ({ title, path }: Props) => {
  return (
    <div className="masonry-img-wrapper">
      <img src={path} alt={title} />
    </div>
  );
};

export default MasonryGalleryItem;
