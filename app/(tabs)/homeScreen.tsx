import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Stories from "@/components/Stories";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />
      <Stories />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     padding: 20,
//     backgroundColor: "#eee",
//     color: "black",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });
