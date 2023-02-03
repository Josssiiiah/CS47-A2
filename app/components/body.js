import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import Profiles from "../../assets/Profiles";
import { Themes } from "../../assets/Themes/";
import Icons from "../../assets/Icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Body = () => {
  return (
    <View style={styles.container}>
      <View style={Themes.light.shadows}>
        <ImageBackground
          source={Profiles.mtl.image}
          style={styles.image}
          imageStyle={styles.imageStyle}
        >
          <Text style={styles.textName}>{Profiles.mtl.name}</Text>
          <Text style={styles.caption}>{Profiles.mtl.caption}</Text>
        </ImageBackground>
      </View>

      <View style={[styles.promptContainer, Themes.light.shadows]}>
        <Text style={styles.promptText}>My hottest take</Text>
        <View style={styles.iconsContainer}>
          <Image source={Icons.player.light} style={styles.playIcon}></Image>
          <Image
            source={Icons.audioWave.light}
            style={styles.audioIcon}
          ></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginTop: 22,
    alignItems: "center",
  },
  imageStyle: {
    borderRadius: 12,
  },
  playIcon: {
    margin: 10,
    height: windowWidth * 0.12,
    width: windowWidth * 0.12,
  },
  audioIcon: {
    margin: 10,
    height: windowWidth * 0.12,
    width: windowWidth * 0.65,
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: undefined,
    aspectRatio: 1 / 1.1,
    justifyContent: "space-between",
  },
  textName: {
    fontFamily: "Sydney",
    fontSize: 32,
    marginTop: 8,
    marginLeft: 12,
    color: "white",
  },
  caption: {
    fontFamily: "Sydney",
    fontSize: 18,
    marginTop: 8,
    marginLeft: 12,
    marginBottom: 10,
    color: "white",
  },
  promptContainer: {
    justifyContent: "space-between",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginTop: 12,
    width: "100%",
    height: windowWidth * 0.33,

    backgroundColor: Themes.light.bgSecondary,
  },
  iconsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  promptText: {
    fontSize: 24,
    marginTop: 22,
    marginLeft: 14,

    fontFamily: "Sydney",
  },
});

export default Body;
