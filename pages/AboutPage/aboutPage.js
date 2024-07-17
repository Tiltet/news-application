import React from 'react';
import { View, Text, ImageBackground } from "react-native";
import { styles } from "../../style";
import { aboutPageStyle } from "./aboutPageStyle";
import { Support } from "../ProfilePage/Support/support";

export function AboutPage() {
    return(
        <View>
            <ImageBackground
                source={require("../../assets/img/flag.png")}
            >
                <View style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <View style={styles.container}>
                        <View style={aboutPageStyle.header}>
                            <View style={aboutPageStyle.header_title}>
                                <Text style={aboutPageStyle.header_title_text}>О партии “NOI”</Text>
                            </View>
                            <View style={aboutPageStyle.header_subtitle}>
                                <Text style={aboutPageStyle.header_subtitle_text}>Здесь находится всё то, что нам хотелось бы рассказать вам</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.container}>
                <View style={aboutPageStyle.main}>
                    <Text style={aboutPageStyle.main_text}>
                        Чем отличается партия <Text style={aboutPageStyle.main_text_violet}>«NOI»</Text> от десятков других партий в Республике Молдова? В молдове партии чаще всего создаются действующими и бывшими политиками, чтобы сохранить или снова вернуться во власть. Это и есть самое важное отличие, так как эта партия создана патриотически настроенными гражданами, которые ранее не были испачканы участием в молдавской политике и их финансовых схемах.
                    </Text>
                    <View style={aboutPageStyle.main_dedicated_block}>
                        <Text style={aboutPageStyle.main_dedicated_text}>
                            Лидер партии <Text style={aboutPageStyle.main_text_violet}>«NOI»</Text> Владимир Даки сочетает в себе успешного бизнесмена и <Text style={aboutPageStyle.main_text_violet}>дисциплину</Text> военного человека.
                        </Text>
                    </View>
                    <Text style={aboutPageStyle.main_text}>
                        Это человек, который привык отдавать приказы и наводить порядок, плюс хорошее знание экономики на собственном удачном опыте. Поэтому в партии состоят люди с хорошими знаниями и опытом, имеющие хорошую репутацию в обществе.
                    </Text>
                    <View style={aboutPageStyle.main_dedicated_block}>
                        <Text style={aboutPageStyle.main_dedicated_text}>
                            Наша главная <Text style={aboutPageStyle.main_text_violet}>цель</Text> - навести порядок <Text style={aboutPageStyle.main_text_violet}>в стране</Text> на основе собственного богатого опыта.
                        </Text>
                    </View>
                    <Text style={aboutPageStyle.main_text}>
                        Мы не идём во власть ради обогощения, так как являемся уже достаточно успешными и обеспеченными людьми.
                    </Text>
                </View>
            </View>
            <Support/>
        </View>
    )
}
