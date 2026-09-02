import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const listTasks = [
    { id: 1, title: "task1", desc: "desc" },
    { id: 2, title: "task2", desc: "desc2" },
  ];
  const [todos, setTodos] = useState(listTasks);
  function addTodo() {
    const newTodo = {
      id: todos.length + 1,
      title: `title ${todos.length + 1}`,
      desc: `desc ${todos.length + 1}`,
    };
    let arr = todos;
    arr.push(newTodo);
    console.log(todos);

    setTodos(arr);
  }

  return (
    <>
      <View>
        <Text>Todo</Text>
        <TextInput defaultValue="название дела" />
        <button>add</button>
      </View>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
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
