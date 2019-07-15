import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { linearGradient } from "expo";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import PropTypes from"prop-types";

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', "#005BEA"],
        title: "비가옵니당",
        subtitle: "우산을 챙기세요",
        icon: 'ios-rainy'
    },
    Clear: {
        colors: ['#FEF253', "#FF7300"],
        title: "해가 쨍쨍",
        subtitle: "날씨 좋습니당~",
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', "#007ADF"],
        title: "번둥천개",
        subtitle: "번둥천개 ㄷㄷ 조심하세욥",
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors: ['#D7D2CC', "#304352"],
        title: "흐림",
        subtitle: "날씨가 시원시원",
        icon: 'ios-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', "#B9B6E5"],
        title: "앗 추워....",
        subtitle: "Do you want to build a snowman? Fuck you",
        icon: 'ios-snow'
    },
    Drizzle: {
        colors: ['#89F7FE', "#66A6FF"],
        title: "이슬비",
        subtitle: "비가 올랑말랑",
        icon: 'ios-rainy-outline'
    },
    Haze: {
        colors: ['#89F7FE', "#66A6FF"],
        title: "안개",
        subtitle: "비가 올랑말랑",
        icon: 'ios-rainy-outline'
    }
}

function Weather({ weatherName, temp }) {
    console.log(weatherName);
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        fontSize: 58,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white"
    }
});