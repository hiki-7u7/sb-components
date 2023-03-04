/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * leste es el label de la etiqueta
    */
    label: string;
    /**
     * este es el tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     *  capitaliza la etiqueta
    */
    allCaps?: boolean;
    /**
     *  el color del label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * custom font colors
    */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;
