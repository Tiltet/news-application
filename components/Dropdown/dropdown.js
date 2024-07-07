import React from "react";
import { Text, View } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { dropdownStyle } from "./dropdownStyle";

export function Dropdown({ categories, selectOption, selectedValue, iconSize }) {
    return(
        <ModalDropdown
            style={dropdownStyle.dropdown}
            dropdownStyle={dropdownStyle.dropdown_list}
            dropdownTextStyle={dropdownStyle.dropdown_text}
            saveScrollPosition={false}
            isFullWidth={true}
            dropdownTextHighlightStyle={dropdownStyle.dropdown_text_selected}
            options={categories}
            onSelect={selectOption}
        >
            <View style={dropdownStyle.dropdown_container}>
                <Text style={dropdownStyle.dropdown_title}>{selectedValue}</Text>
                <AntDesign name="down" size={iconSize} color="black" />
            </View>
        </ModalDropdown>
    )
}
