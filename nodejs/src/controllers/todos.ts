import { RequestHandler } from "express";
import { Todo } from "../models/todo.model";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const { title, text } = req.body as { title: string; text: string };

  const newTodo: Todo = {
    id: Date.now().toString(),
    title,
    text,
  };
  TODOS.push(newTodo);

  res.status(201).json({
    status: "success",
    data: {
      id: newTodo.id,
      title,
      text,
    },
  });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: TODOS,
  });
};

export const editTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { title, text } = req.body as { title: string; text: string };
  const { id } = req.params;

  const todoIndex = TODOS.findIndex((todo) => todo.id === id);
  if (todoIndex < 0) {
    throw new Error("Could not found todo");
  }
  TODOS[todoIndex] = {
    title: title ?? TODOS[todoIndex].title,
    text: text ?? TODOS[todoIndex].text,
  };

  res.status(200).json({
    status: "success",
    data: TODOS[todoIndex],
  });
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params;

  const todoIndex = TODOS.findIndex((todo) => todo.id === id);
  if (todoIndex < 0) {
    throw new Error("Could not found todo");
  }
  const deletedTodo = TODOS.splice(todoIndex, 1);
  res.status(200).json({
    status: "success",
    data: deletedTodo,
  });
};
