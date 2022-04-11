import React from 'react';
import styles from './style.module.css';
import Header from './views/Header';
import Todo from './views/Todo';

function App() {
  return (
    <div>
      <Header />
      <Todo todoList={[]} />
    </div>
  );
}

export default App;
