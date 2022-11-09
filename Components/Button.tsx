import { ButtonProperties } from "../typings";
import { MergeClassNames } from "../utils";
import { ExternalIcon } from "../utils/SVG";
import { Center } from "./Center";

const DefaultComponentProperties: ButtonProperties = {
    children: "",
    className: "",
    isDisabled: false,
}

export function Button(props: ButtonProperties) {
    props = { ...DefaultComponentProperties, ...props }
    const { children, isDisabled, className } = props;
    return (
        <button
            className={MergeClassNames({ className: `
                ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}
                ${isDisabled ? "opacity-75" : ""}
                Button
                px-2
                py-1
                text-md
                rounded-md
            `, provided: className })}
        >
            {children}
        </button>
    )
}