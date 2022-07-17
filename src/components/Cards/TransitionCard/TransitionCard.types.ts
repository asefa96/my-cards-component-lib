import { MouseEventHandler } from "react";

export type TransitionCardType={
    image?:string;
    title?:string;
    content?:string;
    buttonText?:string;
    buttonAction?:MouseEventHandler;
}