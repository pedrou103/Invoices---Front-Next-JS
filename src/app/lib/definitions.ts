import { ChangeEvent, ReactNode } from "react";

export interface MenuItemProps {
  href: string;
  title: string;
  iconName: string;
  isActive?: boolean;
}

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface InputProps {
  type : string;
  name : string;
  id : string;
  label : string;
  placeholder : string;
  size : string;
  autoComplete?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  id: string;
  name: string;
  label: string;
  options: Option[];
  autoComplete?: string;
  size: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface CardCreditProps {
  id: string;
  color: string;
  limit: string;
  title: string;
}

export interface Card {
  id: number;
  user_id: string;
  surname: string;
  color: string;
  closing: string;
  finished: string;
  limit: string;
  created_at: string;
  updated_at: string;
}