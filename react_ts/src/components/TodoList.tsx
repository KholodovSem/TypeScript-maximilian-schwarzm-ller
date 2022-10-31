import React from "react";

interface TodoListProps {
  items: { id: string; title: string }[];
  onDelete: (value: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          id={todo.id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

interface TodoItemProps {
  title: string;
  id: string;
  onDelete: (value: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, id, onDelete }) => {
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={() => onDelete(id)}>
        DELETE TODO
      </button>
    </li>
  );
};
