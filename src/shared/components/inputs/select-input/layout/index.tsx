import React from "react";
import ReactSelect from "react-select";
import { Controller } from "react-hook-form";

import { SelectInputProps } from "../types";

import { Container } from "./styles";
import { ErrorMessage } from "../../styles";

export function SelectInput({
    name,
    label,
    isSearchable,
    options,
    defaultValue,
    error,
    isMulti
}: SelectInputProps): JSX.Element {
    // const {
    //     control,
    //     formState: { errors },
    // } = useFormContext();
    return (
        <Container className={error ? "error select input-container" : "select input-container"}>
            {label && <label>{label}</label>}
            {/* <Controller
                name={name}
                control={control}
                render={({ field }) => ( */}
            <ReactSelect
                // {...field}
                isMulti={!!isMulti}
                placeholder="Selecione uma opção"
                className="basic-single"
                classNamePrefix="select"
                name={name}
                options={options as any}
                isSearchable={!!isSearchable}
                noOptionsMessage={() => "Nenhuma opção correspondente"}
                defaultValue={() => defaultValue}
            />
            {/* )}
            /> */}
        </Container>
    );
}
