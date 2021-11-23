import React, { useRef } from 'react';
import { Button, Form } from 'semantic-ui-react'
// models
import { NewTodoListProps } from '../models/newTodo';

const NewTodo: React.FC<NewTodoListProps> = ({ addText }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = inputRef.current!.value;

    addText(enteredText);
  };

  return (
    <Form onSubmit={submitHandle}>
      <Form.Field>
        <label htmlFor="todo-text">Título</label>
        <input
          id="todo-text"
          type="text"
          placeholder="Agregar texto"
          ref={inputRef}
        />
      </Form.Field>
      <Button type="submit">Agregar</Button>
    </Form>
  )
};

export default NewTodo;