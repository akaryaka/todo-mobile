import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const listTasks = [
    { id: 1, title: "task1", desc: "desc" },
    { id: 2, title: "task2", desc: "desc2" },
  ];
  const [title, setTitle] = useState("task");
  const [desc, setDesc] = useState("desc");
  const [todos, setTodos] = useState(listTasks);

  function addTodo() {
    const newTodo = {
      id: Date.now(),
      title: title,
      desc: desc,
    };

    if (title.trim() && desc.trim()) {
      setTodos([...todos, newTodo]);
    }
  }

  type Props = {
    title: string;
    desc: string;
  };

  const Item = ({ title, desc }: Props) => {
    return (
      <>
        <View style={styles.listItem}>
          <Text>{title}</Text>
          <Text>{desc}</Text>
        </View>
      </>
    );
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
          <View style={styles.buttonView}>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={styles.input}
              value={desc}
              onChangeText={setDesc}
            />
            <Button title="add" onPress={addTodo} />
          </View>
          <FlatList
            style={styles.list}
            data={todos}
            renderItem={({ item }) => (
              <Item title={item.title} desc={item.desc} />
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#cbc9c9",
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  buttonView: {
    paddingTop: 50,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
