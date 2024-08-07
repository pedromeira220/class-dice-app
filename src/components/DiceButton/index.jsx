import { TouchableOpacity, Text } from "react-native"

export const DiceButton = ({number}) => {
    return (
        <TouchableOpacity style={{
            width: 48,
            height: 48,
            backgroundColor: "#222",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8
        }}>
            <Text style={{
                color: "#fff"
            }}>{number}</Text>
        </TouchableOpacity>
    )
}