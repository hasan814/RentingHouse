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
  secondaryLabel?: string;
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
