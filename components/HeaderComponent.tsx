import { StyleSheet, Image, TextInput } from "react-native";

import { Text, View } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";

const HeaderComponent = ({
  setSearchTitle,
}: {
  setSearchTitle: (value: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/profile.jpg")}
          resizeMode="contain"
          style={styles.profileImage}
        />

        <View style={styles.profileTextContainer}>
          <Text style={{ fontSize: 14, color: "#474747" }}>Hello,</Text>
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "600" }}>
            John
          </Text>
        </View>
      </View>

      <View style={{ marginVertical: 10, backgroundColor: "#000" }}>
        <View style={styles.searchInputContainer}>
          <AntDesign
            name="search1"
            size={20}
            color="#bebebe"
            style={styles.iconStyle}
          />
          <TextInput
            placeholder="Find your movie"
            placeholderTextColor="#bebebe"
            style={styles.inputStyle}
            onChangeText={setSearchTitle}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#000",
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#000",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  profileTextContainer: {
    marginLeft: 8,
    alignSelf: "center",
    backgroundColor: "#000",
  },
  searchInputContainer: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#000",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderColor: "#f5f5f5",
    height: 45,
    color: "#fff",
  },
  iconStyle: {
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    color: "#fff",
    fontSize: 12,
    textDecorationLine: "none",
  },
});

export default HeaderComponent;
