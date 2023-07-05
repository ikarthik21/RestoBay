import { ModalContent, ModalOverlay, ModalCloseBtn } from '../Styles/Menu';

const Modal = ({ onClose, children }) => {
    
    return (
        <ModalOverlay>
            <ModalContent>
                {children}
                <ModalCloseBtn onClick={onClose}>X</ModalCloseBtn>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;