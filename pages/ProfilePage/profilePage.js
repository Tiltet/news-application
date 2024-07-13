import { View } from "react-native";
import { styles } from "../../style";
import React, { useState } from "react";
import { Account } from "./Account/account";
import { Support } from "./Support/support";
import {Switcher} from "../../components/Switcher/switcher";
import {profileStyle} from "./profilePageStyle";

export function ProfilePage() {

    const [isChecked, setIsChecked] = useState(false);

    return(
        <View style={styles.container}>
            <View style={profileStyle.container}>
                <Switcher
                    isChecked={isChecked}
                    setChecked={setIsChecked}
                    firstLabel={"Аккаунт"}
                    secondLabel={"Поддержка"}
                ></Switcher>
                { isChecked ? (
                    <Support/>
                ) : (
                    <Account/>
                ) }
            </View>
        </View>
    )
}
