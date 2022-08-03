import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { CardSize } from "../../interfaces/interface";

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
//   onAdd(text: string): void;
//   cardSize: CardSize;
  children?: ReactNode;
}