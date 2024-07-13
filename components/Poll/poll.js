import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import {opinionPageStyle} from "../../pages/OpinionPage/opinionPageStyle";

const PollComponent = ({ item, index }) => {

    const [ voteVisible, setVoteVisible ] = useState(false);
    const [ voteCount, setVoteCount ] = useState({
        like: 0,
        dislike: 0,
        neutral: 0,
    });

    // ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ МНЕНИЯ
    const handlerButtonOpinionClick = (vote) => {
        switch (vote) {
            case "Не поддерживаю":
                setVoteCount(prevState => ({
                    ...prevState,
                    dislike: voteCount.dislike + 1,
                }))
                break
            case "Поддерживаю":
                setVoteCount(prevState => ({
                    ...prevState,
                    like: voteCount.like + 1,
                }))
                break
            case "Нейтрально":
                setVoteCount(prevState => ({
                    ...prevState,
                    neutral: voteCount.neutral + 1,
                }))
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
