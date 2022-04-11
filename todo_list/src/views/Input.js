import { useState } from 'react';
import styles from '../style.module.css';

const Input = (props) => {
  const [editValue, setEditValue] = useState(props.title);
  const edit = (e) => {
    console.log(e);
  };
  return (
    <div className={styles.listContainer}>
      <p id={props.idx} className={styles.list}>
        {props.title}
      </p>

      <button onClick={edit}>수정</button>
      <button>삭제</button>
    </div>
  );
};

export default Input;
