export type InputProps = {
    label?: string;
    placeholder?: string;
    register: (name: any) => void;
    error?: string;
    name: string;
    type?: string;
    helpMessage?: string;
};
