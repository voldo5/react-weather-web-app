import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { CardSize } from "../interfaces/interface";

export interface NewItemFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onAdd(text: string): void;
  cardSize: CardSize;
  children?: ReactNode;
}
