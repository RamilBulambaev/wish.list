import { Suspense } from "react";

import { Loader } from "@/shared/ui/Loader";
import { Modal } from "@/shared/ui/Modal";

import { LoginFormAsync } from "../LoginForm/LoginForm.async";


interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
