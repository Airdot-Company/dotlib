import { LinkProperties } from "../typings";
import { MergeClassNames } from "../utils";
import { ExternalIcon } from "../utils/SVG";
import { Center } from "./Center";

const DefaultComponentProperties: LinkProperties = {
    children: "",
    className: "",
    isDisabled: false,
    isExternal: false,
}

export function Link(props: LinkProperties) {
    props = { ...DefaultComponentProperties, ...props }
    const { href, children, isDisabled, isExternal, className, isUnderlined } = props;
    return (
        <a
            href={isDisabled ? undefined : href}
            className={MergeClassNames({ className: `
                ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}
                ${isDisabled ? "opacity-75" : "hover:opacity-75"}
                ${isUnderlined && "underline"}
            `, provided: className })}
        >
            <div className="pl-2">
               {children}
                {
                    isExternal &&
                    <ExternalIcon className="w-5 inline-flex ml-0.5 mb-1" color={isDisabled ? "#71717A" : undefined} />
                }
            </div>
        </a>
    )
}