import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface AddNewItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

// type AddNewItemProps = {
//   onAdd(text: string): void;
//   toggleButtonText: string;
//   dark?: boolean;
// };
