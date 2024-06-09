import React, { useState, useEffect } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

// 초기 할 일 List 가져오는 함수
const InitTodo = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

// 할 일 완료 업데이트 함수
const updateTodo = (todos, index) => {
  return todos.map((todo, i) =>
    i === index ? { ...todo, completed: !todo.completed } : todo
  );
};