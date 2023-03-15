import React from "react";
import ReactDOM from "react-dom";
import classes from "./modal2.module.scss";

const ModalContent = ({ onCloseModal, children }) => {
  return (
    <div className={classes.backdrop} onClick={onCloseModal}>
      <button
        className={classes["btn-close"]}
        type="button"
        onClick={onCloseModal}
      />

      <div className={classes["modal-window"]}>{children}</div>
    </div>
  );
};

const Modal = ({ onCloseModal, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalContent children={children} onCloseModal={onCloseModal} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
//modal wstawiasz w najwyszym komponecie

/*//public/index.html
 <div id="backdrop-root"></div>
   <div id="modal-root"></div>


    <div id="root"></div>
 */
/* //App.js
  const [isOpenModalState, setIsOpenModalState] = useState(false);

  const showModalHandler = () => setIsOpenModalState(true);

  const hideModalHandler = () => setIsOpenModalState(false);

   {isOpenModalState && <Modal closeModal={hideModalHandler} ><p>content</p></p></Modal>}

 */

//alternatywą dla tego może byc gotowa paczka  react-modal

/* 

  import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 650px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  opacity: 1;

  &:focus {
    outline: none;
  }
`;


  const Modal = ({ handleClose, isOpen, children }) => {
    return (
      <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
        {children}
        <Button onClick={handleClose}>Close</Button>
      </ModalWrapper>
    );
  };
 */
