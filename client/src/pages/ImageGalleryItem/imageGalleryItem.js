import React from 'react';
import T from 'prop-types';
import ReactImageAppear from 'react-image-appear';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) => {
  return (
    images.length > 0 &&
    images.map(el => (
      <li src={el.original} key={el.id} className={styles.imageGalleryItem}>
        <ReactImageAppear
          src={el.preview}
          animation="zoomIn"
          alt={el.description}
          className={styles.imageGalleryItemImage}
          animationDuration="1s"
        />
      </li>
    ))
  );
};

ImageGalleryItem.defaultProps = {
  images: [],
};

ImageGalleryItem.propTypes = {
  images: T.arrayOf(T.shape({})),
};

export default ImageGalleryItem;
