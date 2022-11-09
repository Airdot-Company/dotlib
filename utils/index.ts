export function MergeClassNames({ className, provided }: {
    className: string;
    provided?: string;
}){
    return className + " " + provided;
}