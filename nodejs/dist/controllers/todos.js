"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.editTodo = exports.getTodos = exports.createTodo = void 0;
const TODOS = [];
const createTodo = (req, res, next) => {
    const { title, text } = req.body;
    const newTodo = {
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
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(200).json({
        status: "success",
        data: TODOS,
    });
};
exports.getTodos = getTodos;
const editTodo = (req, res, next) => {
    const { title, text } = req.body;
    const { id } = req.params;
    const todoIndex = TODOS.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
        throw new Error("Could not found todo");
    }
    TODOS[todoIndex] = {
        title: title !== null && title !== void 0 ? title : TODOS[todoIndex].title,
        text: text !== null && text !== void 0 ? text : TODOS[todoIndex].text,
    };
    res.status(200).json({
        status: "success",
        data: TODOS[todoIndex],
    });
};
exports.editTodo = editTodo;
const deleteTodo = (req, res, next) => {
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
exports.deleteTodo = deleteTodo;
