import React, { useState } from "react";
import Modal2 from "../UI/Modal2";
import classes from "./galleryItem.module.scss";
const GalleryItem = ({ image }) => {
  const [isOpenModalState, setIsOpenModalState] = useState(false);

  const showModalHandler = () => setIsOpenModalState(true);

  const hideModalHandler = () => setIsOpenModalState(false);

  return (
    <>
      <div className={classes["image-wrapper"]}>
        <img src={image} onClick={showModalHandler} alt="jon dwsc" />
      </div>
      {isOpenModalState && (
        <Modal2 onCloseModal={hideModalHandler}>
          <div className={`${classes["modal-image"]}`}>
            <img src={image} onClick={showModalHandler} alt="jahn brock" />
          </div>
        </Modal2>
      )}
    </>
  );
};

export default GalleryItem;
