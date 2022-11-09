import React from "react";

export type Width = `w-${string}`
export type OnClickEvent = () => any;

export interface DefaultComponentProperties {
    children: React.ReactNode;
    className?: string;
}

export interface ItemProperties extends DefaultComponentProperties {
    onClick?: OnClickEvent;
    href?: string;
    isRed?: boolean;
    isDisabled?: boolean;
    isExternal?: boolean;
}

export interface LinkProperties extends DefaultComponentProperties {
    href?: string;
    isDisabled?: boolean;
    isExternal?: boolean;
    isUnderlined?: boolean;
}

export interface ButtonProperties extends DefaultComponentProperties {
    onClick?: OnClickEvent;
    isDisabled?: boolean;
}