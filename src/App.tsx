import { FC, useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
// models
import { Text } from './models/app';
import 'semantic-ui-css/semantic.min.css'

const App: FC = () => {
  const [list, setList] = useState<Text[]>([]);

  const addText = (text: string): void => {
    setList((prevState) => [
      ...prevState,
      { id: Math.random().toString(), text, }
    ]);
  };

  const removeText = (id: string): void => {
    setList((prevState) => {
      const newList: Text[] = prevState.filter((element) => element.id !== id);
      return newList;
    })
  };

  return (
    <div className="container">
      <NewTodo
        addText={addText}
      />
      <TodoList
        items={list}
        removeText={removeText}
      />
    </div>
  )
};

export default App;
