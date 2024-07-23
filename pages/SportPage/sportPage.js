import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../../style";
import { championshipStyle } from "./sportPageStyle";
import {getChampionship} from "./sportPageRequest";

export function SportPage() {

    const [ championship, setChampionship ] = useState([])
    const [ championshipIndex, setChampionshipIndex ] = useState(0)

    useEffect(() => {
        switch (championshipIndex) {
            case 0:
                getChampionship("Испания")
                    .then(res => {
                        setChampionship(res)
                    })
                break
            case 1:
                getChampionship("Германия")
                    .then(res => {
                        setChampionship(res)
                    })
                break
            case 2:
                getChampionship("Италия")
                    .then(res => {
                        setChampionship(res)
                    })
                break
            case 3:
                getChampionship("Франция")
                    .then(res => {
                        setChampionship(res)
                    })
                break
            default:
                getChampionship("Англия")
                    .then(res => {
                        setChampionship(res)
                    })
                break
        }
    }, [championshipIndex]);

    // НАЖАТИЕ НА СТРЕЛКУ ВЛЕВО
    const handlerArrowLeft = () => {
        if (championshipIndex === 0) {
            setChampionshipIndex(4)
        } else {
            setChampionshipIndex(championshipIndex - 1)
        }
    }

    // НАЖАТИЕ НА СТРЕЛКУ ВПРАВО
    const handlerArrowRight = () => {
        if (championshipIndex === 4) {
            setChampionshipIndex(0)
        } else {
            setChampionshipIndex(championshipIndex + 1)
        }
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
        return championship.map((championship) => (
                <View style={championshipStyle.teams}>
                    <View style={championshipStyle.point_numbers}>
                        <Text style={championshipStyle.teams_text}>{championship.place}</Text>
                    </View>
                    <View style={championshipStyle.team}>
                        <Image
                            style={{ width: 27, height: 20 }}
                            source={{ uri: championship.img }}
                        />
                        <Text style={[championshipStyle.teams_text, { marginLeft: 5 }]}>{championship.team}</Text>
                    </View>
                    <View style={championshipStyle.point_games}>
                        <Text style={championshipStyle.teams_text}>{championship.games}</Text>
                    </View>
                    <View style={championshipStyle.point_points}>
                        <Text style={championshipStyle.teams_text}>{championship.points}</Text>
                    </View>
                </View>
            ))
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
                    {renderTeams()}
                </View>

            </View>
        </View>
    )
}
