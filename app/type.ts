export type InputProps = {
    label:string;
    name:string;
    value?: string;
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    type:"text" | "password" | "email";
}

export type ButtonProps = {
    style?: string;
    type?: "button" | "submit" | "reset";
}