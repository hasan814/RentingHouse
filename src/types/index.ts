import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

export interface ClientOnlyProps {
  children: React.ReactNode;
}
export interface ContainerProps {
  children: React.ReactNode;
}

export interface MenuItemProps {
  onClick: () => void;
  label: string;
}

export interface ModalProps {
  secondaryAction?: () => void;
  onSubmit: () => void;
  onClose: () => void;
  secondaryActionLabel?: string;
  actionLabel: string;
  disabled?: boolean;
  footer?: React.ReactElement;
  isOpen?: boolean;
  title?: string;
  body?: React.ReactElement;
}

export interface ButtonsProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  label: string;
  small?: boolean;
  icon?: IconType;
}

export interface RegisterModalStoreProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export interface InputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  formatPrice?: boolean;
  register: UseFormRegister<any>;
  errors?: FieldErrorsImpl<any>;
}

export interface BodyContentProps {
  errors?: FieldErrorsImpl<any>;
  register: UseFormRegister<any>;
  isLoading?: boolean;
}
