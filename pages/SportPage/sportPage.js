import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import { styles } from "../../style";
import { championshipStyle } from "./sportPageStyle";

export function SportPage() {

    const [ championship, setChampionship ] = useState(0)

    // НАЖАТИЕ НА СТРЕЛКУ ВЛЕВО
    const handlerArrowLeft = () => {
        setChampionship(championship - 1)
    }

    // НАЖАТИЕ НА СТРЕЛКУ ВПРАВО
    const handlerArrowRight = () => {
        setChampionship(championship + 1)
    }

    // РЕНДЕРИТ ПУНКТЫ ТАБЛИЦЫ
    const renderPoints = () => {
        return (
            <View style={championshipStyle.points}>
                <View style={championshipStyle.point_numbers}>
                    <Text style={championshipStyle.point_text}>#</Text>
                </View>
                <View style={championshipStyle.point_teams}>
                    <Text style={championshipStyle.point_text}>Команда</Text>
                </View>
                <View style={championshipStyle.point_games}>
                    <Text style={championshipStyle.point_text}>Игры</Text>
                </View>
                <View style={championshipStyle.point_points}>
                    <Text style={championshipStyle.point_text}>Очки</Text>
                </View>
            </View>
        )
    }

    // РЕНДЕРИТ КОМАНДЫ
    const renderTeams = () => {
        return (
            <View style={championshipStyle.teams}>
                <View style={championshipStyle.point_numbers}>
                    <Text style={championshipStyle.teams_text}>1</Text>
                </View>
                <View style={championshipStyle.team}>
                    <Image
                        style={{ width: 27, height: 20 }}
                        source={require('../../assets/img/team.png')}
                    />
                    <Text style={championshipStyle.teams_text}>Байер</Text>
                </View>
                <View style={championshipStyle.point_games}>
                    <Text style={championshipStyle.teams_text}>38</Text>
                </View>
                <View style={championshipStyle.point_points}>
                    <Text style={championshipStyle.teams_text}>115</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={championshipStyle.container}>

                {/* ЗАГОЛОВОК */}
                <View style={championshipStyle.header}>
                    <View style={championshipStyle.header_title}>
                        <Text style={championshipStyle.header_title_text}>Чемпионат Германии</Text>
                        <Image
                            style={{ width: 50, height: 30, marginLeft: 20}}
                            source={require('../../assets/img/championship.png')}
                        />
                    </View>
                    <View style={championshipStyle.header_icons}>
                        <TouchableOpacity onPress={() => handlerArrowLeft()}>
                            <Image
                                style={{ width: 20, height: 20, marginRight: 10 }}
                                source={require('../../assets/icons/weather/arrow_left.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlerArrowRight()}>
                            <Image
                                style={{ width: 20, height: 20, marginRight: 10 }}
                                source={require('../../assets/icons/weather/arrow_rigth.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ПУНКТЫ */}
                <View style={championshipStyle.list}>
                    {renderPoints()}
                    <ScrollView>
                        {renderTeams()}
                        {renderTeams()}
                        {renderTeams()}
                        {renderTeams()}
                        {renderTeams()}
                        {renderTeams()}
                        {renderTeams()}
                        {renderTeams()}
                    </ScrollView>
                </View>

            </View>
        </View>
    )
}
