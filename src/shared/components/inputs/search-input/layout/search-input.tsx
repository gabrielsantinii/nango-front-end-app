import React from "react";
import { SearchInputProps } from "../interfaces";

import { SearchIcon, SearchInputContainer } from "./styles";
export function SearchInput({ placeholder = "Pesquisar" }: SearchInputProps): JSX.Element {
    return (
        <SearchInputContainer className="search-input-container">
            <input placeholder={placeholder} />
            <SearchIcon className="search-icon" />
        </SearchInputContainer>
    );
}
