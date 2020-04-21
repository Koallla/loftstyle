import React, { Component } from 'react';
import { alert } from '@pnotify/core';
import API from '../../components/API/API';
import Modal from '../Modal/modal';

import styles from './gallery.modal.css';
import ImageGallery from '../ImageGallery/ImageGallery';
// import Button from '../Button/Button';
import Loader from '../Loader/loader';

// import withAuthRedirect from "../components/hoc/withAuthRedirect";

class Gallery extends Component {
  state = {
    images: [],
    isLoading: false,
    isModalOpen: false,
    imgModal: {
      img: '',
      alt: '',
    },
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    this.setState({ isLoading: true });
    await API()
      .then(res => this.setState({ images: res.data.image }))
      .catch(error => {
        alert.error(error);
      });

    this.setState({ isLoading: false });
  };

  openModal = e => {
    this.setState({
      imgModal: {
        img: e.target.parentNode.attributes[0].value,
        alt: e.target.alt,
      },
    });
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { images, isLoading, isModalOpen, imgModal } = this.state;

    return (
      <div className={styles.container}>
        <ImageGallery images={images} isOpenModal={this.openModal} />
        {/* {images.length !== 0 && <Button loadNextPage={this.onLoadNextPage} />} */}
        {isLoading && <Loader />}
        {isModalOpen && (
          <Modal onClose={this.closeModal} srcForModal={imgModal} />
        )}
      </div>
    );
  }
}

export default Gallery;
