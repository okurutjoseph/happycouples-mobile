import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import { LoadingLine } from "@/components/status-lines/LoadingLine";
import { SuccessLine } from "@/components/status-lines/SuccessLine";
import { fontStyles } from "@/styles/font";
import { Button } from "@/components/Button";

interface HeaderProps {
  state: "idle" | "loading" | "success" | "error";
  pingFunction: () => void;
}

export const Header = ({ state, pingFunction }: HeaderProps) => {
  const getStateLine = () => {
    switch (state) {
      case "success":
        return <SuccessLine />;
      case "loading":
        return <LoadingLine />;
      default:
        return <></>;
    }
  };

  const getTitleText = () => {
    switch (state) {
      case "success":
        return "Congratulations!";
      case "loading":
        return " ";
      default:
        return "Check connection";
    }
  };

  const getDescriptionText = () => {
    switch (state) {
      case "loading":
        return (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <ActivityIndicator />
            <Text style={fontStyles.bodyM}>Waiting for connection... </Text>
          </View>
        );
      case "success":
        return (
          <Text style={fontStyles.bodyM}>
            You connected to your app successfully
          </Text>
        );
      default:
        return (
          <Text style={fontStyles.bodyM}>
            Send a ping to verify the connection
          </Text>
        );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/grid.png")}
        style={styles.background}
      />
      <View style={styles.content}>
        <View style={styles.iconsStatus}>
          <Image
            source={require("../assets/images/rn.png")}
            style={styles.icon}
          />
          <View style={styles.line}>{getStateLine()}</View>
          <Image
            source={require("../assets/images/appwrite.png")}
            style={styles.icon}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={fontStyles.titleL}>{getTitleText()}</Text>
          {getDescriptionText()}
          {state !== "loading" && (
            <View style={styles.buttonContainer}>
              <Button text={"Send a ping"} onPress={pingFunction} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 450,
  },
  icon: {
    width: 100,
    height: 100,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
  },
  line: {
    flexGrow: 1,
    width: 100,
  },
  content: {
    height: 450,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    paddingInline: 32,
    maxWidth: 350,
    gap: 48,
  },
  iconsStatus: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  buttonContainer: {
    marginBlockStart: 32,
  },
});
