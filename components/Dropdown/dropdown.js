import React from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { dropdownStyle } from "./dropdownStyle";

export function Dropdown({ categories, selectOption, defaultValue }) {
    return(
        <ModalDropdown
            style={dropdownStyle.dropdown}
            dropdownStyle={dropdownStyle.dropdown_list}
            dropdownTextStyle={dropdownStyle.dropdown_text}
            textStyle={dropdownStyle.dropdown_text}
            saveScrollPosition={false}
            isFullWidth={true}
            dropdownTextHighlightStyle={dropdownStyle.dropdown_text_selected}
            options={categories}
            onSelect={selectOption}
            defaultValue={defaultValue || categories[0]}
        >
        </ModalDropdown>
    )
}
