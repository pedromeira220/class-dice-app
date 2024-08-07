import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { height, width } from "../constants/measures";
import { DiceButton } from "../components/DiceButton";

export default function MainScreen() {
  return (
    <View>
      <View style={styles.topArea}>
        <View style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <View style={{
            backgroundColor: "#555",
            width: 8,
            height: 8,
            marginRight: 6
          }}/>
          <Text>2</Text>
        </View>

        <View>
          <Text style={{
            color: "#222",
            fontSize: 64,
            fontWeight: 900
          }}>2</Text>
        </View>
      </View>

      <View style={{
        height: height * 0.3,
        backgroundColor: "#eee",
        padding: 16,
        width
      }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
          <DiceButton number="d2"/>
          <DiceButton number="d4"/>
          <DiceButton number="d6"/>
          <DiceButton number="d8"/>
        </View>
        
        <View style={{
          flexDirection: "row",
          marginTop: 12,
          justifyContent: "space-between"
        }}>
          <DiceButton number="d10"/>
          <DiceButton number="d12"/>
          <DiceButton number="d20"/>
          <DiceButton number="d100"/>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topArea: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: width,
    height: height * 0.7,
    marginBottom: 16
  },
});
