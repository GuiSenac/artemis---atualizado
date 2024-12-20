// components/Modal.js
import modalStyles from './styles/Modal.module.css';

export default function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  return (
    <div className={modalStyles.overlay}>
      <div className={modalStyles.modal}>
        <button className={modalStyles.close} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
