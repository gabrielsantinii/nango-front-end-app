import { UseFormReturn } from "react-hook-form";

export function getFieldErrorMessage(formMethods: UseFormReturn<any>, fieldName: string): string {
    return formMethods.formState.errors[fieldName]?.message
}