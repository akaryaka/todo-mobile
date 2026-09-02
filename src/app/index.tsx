import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const listTasks = [
    { id: 1, title: "task1", desc: "desc" },
    { id: 2, title: "task2", desc: "desc2" },
  ];
  // const [todos, setTodos] = useState(listTasks);

  // function addTodo() {
  //   const newTodo = {
  //     id: todos.length + 1,
  //     title: `title ${todos.length + 1}`,
  //     desc: `desc ${todos.length + 1}`,
  //   };
  //   let arr = todos;
  //   arr.push(newTodo);
  // }

  type Props = {
    title: string;
  };

  const Item = ({ title }: Props) => {
    return (
      <>
        <View>
          <Text>{title}</Text>
        </View>
      </>
    );
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
          <FlatList
            data={listTasks}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
          >
            <Text>нет задач</Text>
          </FlatList>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
