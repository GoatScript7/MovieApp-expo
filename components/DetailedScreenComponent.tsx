import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { MovieProps } from "./MovieComponent";

type MovieComponentProps = {
  movie: MovieProps;
};

const DetailedScreenComponent = ({ movie }: MovieComponentProps) => {
  // console.log(movie);
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: movie.image,
        }}
        style={styles.image}
      />
      <View style={styles.playButtonContainer}>
        <Pressable
          style={styles.playButton}
          onPress={() => Linking.openURL(movie.movieTrailerLink)}
        >
          <AntDesign name="play" size={60} color={"rgba(255, 255, 255, 0.3)"} />
        </Pressable>
      </View>
      <Pressable style={styles.iconContainer} onPress={goBack}>
        <AntDesign
          name="left"
          size={24}
          color="#fff"
          style={styles.iconStyle}
        />
      </Pressable>
      <View style={styles.imdbContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{`IMDB ${movie.imdb}`}</Text>
        </View>
      </View>
      <Text style={styles.title}>{movie.title}</Text>
      <View style={styles.descriptionStyle}>
        <Text style={styles.descriptionText}>{movie.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  iconContainer: {
    width: 40,
    height: 40,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    left: 5,
  },
  iconStyle: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "contain",
    overflow: "hidden",
  },
  playButtonContainer: {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],
    zIndex: 1,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imdbContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#333",
    backgroundColor: "#f3ce13",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 35,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "#eee",
  },
  descriptionStyle: {
    paddingHorizontal: 10,
  },
  descriptionText: {
    color: "#eee",
  },
});

export default DetailedScreenComponent;
