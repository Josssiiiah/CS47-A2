import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Icons from "../../assets/Icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Icons.menu.light} style={styles.headerIcons} />
      <Text style={styles.title}> ensom </Text>
      <Image source={Icons.sun} style={styles.headerIcons} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcons: {
    height: windowWidth * 0.12,
    width: windowWidth * 0.12,
    justifyContent: "space-between",
    marginHorizontal: 85,
  },
  title: {
    fontFamily: "Sydney-Bold",
    fontSize: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    marginBottom: 15,
  },
});

export default Header;
