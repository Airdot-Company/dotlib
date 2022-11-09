import { DefaultComponentProperties } from "../typings"
import { MergeClassNames } from "../utils"

export function Center({ children, className }: DefaultComponentProperties) {
    return (
        <div className={MergeClassNames({
            className: "flex items-center justify-center",
            provided: className
        })}>
            {children}
        </div>
    )
}