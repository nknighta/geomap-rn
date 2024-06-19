import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function MainPage() {
    return (
        <View style={calldisplayStyle.container}>            
            <View>
                <Text style={calldisplayStyle.mapview}>
                    地図(仮)
                </Text>
            </View>
            <Text>ちゃっと</Text>
        </View>
    );
}

const calldisplayStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20
    },
    mapview: {
        flex: 0.65,
        alignItems: 'center',
        paddingVertical: 20
    },
    callbtn: {
        padding: 20,
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 10,
        margin: 10
    }
});