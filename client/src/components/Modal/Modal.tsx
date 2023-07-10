
import { createPortal } from 'react-dom';
import style from './Modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
  close?: () => void;
  className?: string;
};

export default function Modal({ children, close, className }: ModalProps) {
    return createPortal(
        <>
            <div className={style.backdrop} onClick={close}></div>
            <div id="modal" className={`${style.modal} ${className||''}`}>
                {children}
            </div>
        </>, document.body
    );
}
