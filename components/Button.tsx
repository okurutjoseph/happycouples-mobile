import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FD366E",
    paddingBlock: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  text: {
    color: "#FFF",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 20,
  },
});
