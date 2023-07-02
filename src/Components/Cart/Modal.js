import { ModalContent, ModalOverlay } from '../Styles/Menu';

const Modal = ({ onClose, children }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                {children}
                <button onClick={onClose}>X</button>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;