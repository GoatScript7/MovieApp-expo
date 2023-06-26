import { Link } from "expo-router";
import { View, Text } from "../components/Themed";
import { StyleSheet, Image, useWindowDimensions } from "react-native";

export type MovieProps = {
  id: string;
  title: string;
  image: string;
  genre: string;
  description: string;
};

type MovieComponentProps = {
  item: MovieProps;
};

const FavouriteComponent = ({ item }: MovieComponentProps) => {
  const width = useWindowDimensions().width;

  return (
    <Link href={`/movie/${item.id}`}>
      <View style={[styles.container, { width: width - 200 }]}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    aspectRatio: 2 / 2.5,
    resizeMode: "cover",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 0.8,
    borderColor: "#eee",
  },
});

export default FavouriteComponent;
