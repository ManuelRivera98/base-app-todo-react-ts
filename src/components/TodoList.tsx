import React from 'react';
import { List, Button, Icon } from 'semantic-ui-react'
// models
import { TodoListProps } from '../models/todoList'

const TodoList: React.FC<TodoListProps> = ({ items, removeText }) => {
  return (
    <List>
      {items.map((e) => (
        <List.Item
          key={e.id}
        >{e.text}
          {'  '}
          <Button
            onClick={removeText.bind(null, e.id)}
            circular
            size="mini"
            type="button">
            <Icon color="red" name="cancel" />
          </Button>
        </List.Item>
      ))}
    </List>
  )

}

export default TodoList;
