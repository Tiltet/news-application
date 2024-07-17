import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Image, Text, Alert} from 'react-native';
import { opinionPageStyle } from "../../pages/OpinionPage/opinionPageStyle";
import { getVotes, postVote } from "./pollRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PollComponent = ({ item, index }) => {

    const [ voteVisible, setVoteVisible ] = useState(false);
    const [ login , setLogin ] = useState(null)
    const [ voteCount, setVoteCount ] = useState({
        like: 0,
        dislike: 0,
        neutral: 0,
    });

    useEffect(() => {

        // ПОЛУЧАЕМ ЛОГИН ИЗ ЛОКАЛЬНОГО ХРАНИЛИЩА
        fetchLogin()
            .then(login => setLogin(login))
    }, []);

    // ПОЛУЧЕНИЕ ДАННЫХ ИЗ ХРАНИЛИЩА
    const fetchLogin = async () => {
        try {
            return await AsyncStorage.getItem('login')
        } catch (error) {
            console.error('Poll: Ошибка во время получения логина из AsyncStorage - ', error);
        }
    };

    // ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ МНЕНИЯ
    const handlerButtonOpinionClick = async (vote) => {

        // ПРОВЕРКА АВТОРИЗОВАННОГО ПОЛЬЗОВАТЕЛЯ
        const token = await AsyncStorage.getItem("token")
        if (token === null) {
            Alert.alert("Голосовать могут только авторизованные пользователи!")
            return
        }

        // ПОЛУЧАЕМ КОЛИЧЕСТВО ГОЛОСОВ
        await getVotes(item.id)
            .then(res => {
                setVoteCount({
                    like: res.votePositive,
                    dislike: res.voteNegative,
                    neutral: res.voteNeutral
                })
            })

        // ПРОВЕРКА ГОЛОСА ПОЛЬЗОВАТЕЛЯ
        switch (vote) {
            case "Не поддерживаю":
                setVoteCount(prevState => ({
                    ...prevState,
                    dislike: voteCount.dislike + 1,
                }))
                postVote(item.id, 'Не поддерживаю', login)
                break
            case "Поддерживаю":
                setVoteCount(prevState => ({
                    ...prevState,
                    like: voteCount.like + 1,
                }))
                postVote(item.id, 'Поддерживаю', login)
                break
            case "Нейтрально":
                setVoteCount(prevState => ({
                    ...prevState,
                    neutral: voteCount.neutral + 1,
                }))
                postVote(item.id, 'Нейтрально', login)
                break
            default:
                break
        }
        setVoteVisible(true)
    }

    return (
        <View style={opinionPageStyle.poll_block}>
            <Text style={opinionPageStyle.title}>Как вы относитесь к этому?</Text>
            <Text style={opinionPageStyle.description}>{item.title}</Text>
            <View style={opinionPageStyle.vote_block}>
                <View style={opinionPageStyle.votes}>

                    <View style={opinionPageStyle.vote}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../assets/icons/poll/unlike.png')}
                        />
                        { voteVisible === true ? (
                            <View style={opinionPageStyle.vote_text}>
                                <Text>{voteCount.dislike}</Text>
                            </View>
                        ) : (
                            <TouchableOpacity
                                style={opinionPageStyle.vote_text}
                                onPress={() => handlerButtonOpinionClick('Не поддерживаю')}
                            >
                                <Text>Не поддерживаю</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <View style={opinionPageStyle.vote}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../assets/icons/poll/like.png')}
                        />
                        { voteVisible === true ? (
                            <View style={opinionPageStyle.vote_text}>
                                <Text>{voteCount.like}</Text>
                            </View>
                        ) : (
                            <TouchableOpacity
                                style={opinionPageStyle.vote_text}
                                onPress={() => handlerButtonOpinionClick('Поддерживаю')}
                            >
                                <Text>Поддерживаю</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <View style={opinionPageStyle.vote}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../assets/icons/poll/normal.png')}
                        />
                        { voteVisible === true ? (
                            <View style={opinionPageStyle.vote_text}>
                                <Text>{voteCount.neutral}</Text>
                            </View>
                        ) : (
                            <TouchableOpacity
                                style={opinionPageStyle.vote_text}
                                onPress={() => handlerButtonOpinionClick('Нейтрально')}
                            >
                                <Text>Нейтрально</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                </View>
                <Image
                    style={opinionPageStyle.image}
                    source={{ uri: item.fullImgUrl }}
                />
            </View>
        </View>
    );
};

export default PollComponent;
