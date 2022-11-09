import { ItemProperties } from "../typings";
import { MergeClassNames } from "../utils";
import { ExternalIcon } from "../utils/SVG";
import { Center } from "./Center";

const DefaultComponentProperties: ItemProperties = {
    children: "",
    className: "",
    isDisabled: false,
    isExternal: false,
    isRed: false,
}

export function Item(props: ItemProperties) {
    props = { ...DefaultComponentProperties, ...props }
    const { onClick, href, children, isRed, isDisabled, isExternal, className } = props;
    return (
        <a
            href={isDisabled ? undefined : href}
            className={MergeClassNames({ className: `
                    ${isRed ? "text-red-400" : ""}
                    ${isDisabled ? "text-zinc-500" : ""}
                    minw
                    my-2 px-4 py-5
                    ${isDisabled ? "bg-gray-m" : "bg-gray"}
                    rounded-lg 
                    text-lg
                    ${isDisabled ? "" : "hover:bg-gray"}
                    ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}
            `, provided: className })}
        >
            <div className="pl-2">
                {children}
                {
                    isExternal &&
                    <ExternalIcon className="float-right inline-block w-5 h-5" color={isDisabled ? "#71717A" : "#afafaf"} />
                }
            </div>
        </a>
    )
}