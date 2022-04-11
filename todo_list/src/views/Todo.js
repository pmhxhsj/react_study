import { useState } from 'react';
import styles from '../style.module.css';
import Input from './Input';

const Todo = (props) => {
  const [search, setSearch] = useState('');
  const onChange = (e) => {
    setSearch((value) => e.target.value);
  };
  const onClick = (e) => {
    e.preventDefault();
    props.todoList.push(search);
    setSearch((value) => '');
  };

  return (
    <main className={styles.container}>
      <section>
        <form>
          <input className={styles.search} onChange={onChange} value={search} />
          <button className={styles.searchBtn} onClick={onClick}>
            submit
          </button>
        </form>
      </section>
      <br />
      <section className={styles.mainContainer}>
        <br />
        <div className={styles.table}>
          {props.todoList.map((v, idx) => {
            return <Input todoList={props.todoList} title={v} idx={idx} key={idx} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Todo;
