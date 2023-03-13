import React, { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./galleryItem.module.scss";
const GalleryItem = ({ image }) => {
  const [isOpenModalState, setIsOpenModalState] = useState(false);

  const showModalHandler = () => setIsOpenModalState(true);

  const hideModalHandler = () => setIsOpenModalState(false);

  return (
    <>
      <div className={classes["image-wrapper"]}>
        <img src={image} onClick={showModalHandler} alt="image" />
      </div>
      {isOpenModalState && (
        <Modal closeModal={hideModalHandler}>
          <div
            className={`${classes["image-wrapper"]} ${classes["modal-image"]}`}
          >
            <img src={image} onClick={showModalHandler} alt="image" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default GalleryItem;
