import {View, Text, TouchableOpacity} from "react-native";
import {profileStyle} from "./profilePageStyle";
import {styles} from "../../style";
import React, {useEffect, useState} from "react";
import {Account} from "./Account/account";
import {Support} from "./Support/support";

export function ProfilePage() {

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {

    }, []);

    return(
        <View style={styles.container}>
            <View style={profileStyle.switcherContainer}>
                <TouchableOpacity style={[profileStyle.switcherButtons, !isChecked ? [profileStyle.activated, profileStyle.activatedText] : null]} onPress={() => setIsChecked(false)}>
                    <Text style={[profileStyle.switcherButtons_text, !isChecked ? [profileStyle.activated, profileStyle.activatedText] : null]} >Аккаунт</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[profileStyle.switcherButtons, isChecked ? [profileStyle.activated, profileStyle.activatedText] : null]} onPress={() => setIsChecked(true)}>
                    <Text style={[profileStyle.switcherButtons_text, isChecked ? [profileStyle.activated, profileStyle.activatedText] : null]} >Поддержка</Text>
                </TouchableOpacity>
            </View>
            { isChecked ? (
                <Support/>
            ) : (
                <Account/>
            ) }
        </View>
    )
}
