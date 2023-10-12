/* eslint-disable @next/next/no-img-element */
import React from "react";
import MasonryGalleryItem from "./MasonryGalleryItem";

type GalleryEntry = {
  id: number;
  title: string;
  path: string;
};

type Props = {
  items: GalleryEntry[];
};

const MasonryGallery = ({ items = [] }: Props) => {
  return (
    <div className="relative">
      <ul className="masonry">
        {items.map((entry) => (
          <li key={entry.id}>
            <MasonryGalleryItem {...entry} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MasonryGallery;
