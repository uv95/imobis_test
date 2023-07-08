
import style from './Modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
  close?: () => void;
  className?: string;
};

export default function Modal({ children, close, className }: ModalProps) {
    return (
        <>
            <div className={style.backdrop} onClick={close}></div>
            <div id="modal" className={`${style.modal} ${className||''}`}>
                {children}
            </div>
        </>
    );
}
