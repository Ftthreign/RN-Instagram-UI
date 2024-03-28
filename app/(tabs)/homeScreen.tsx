import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/homeScreen/Header";
import Stories from "@/components/homeScreen/Stories";
import Posts from "@/components/homeScreen/Posts";
import { ScrollView } from "react-native";
import { post } from "@/data/post";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />
      <Stories />
      <ScrollView>
        {post.map((data, index) => (
          <Posts key={index} post={data} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
