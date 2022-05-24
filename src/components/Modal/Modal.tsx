import { FC, ReactNode, useEffect } from "react";
import styles from "./Modal.module.scss";

export type ModalProps = {
  children: ReactNode;
  active: boolean;
  toggle: () => void;
};

const Modal: FC<ModalProps> = ({ children, active = false, toggle }) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && active) {
        toggle();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [toggle, active]);

  return (
    <>
      {active && (
        <div className={styles.modal}>
          <div className={styles.backDrop} onClick={toggle} />
          <div className={styles.modalBody} aria-modal="true" role="dialog">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
