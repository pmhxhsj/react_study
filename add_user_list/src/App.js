import react, { useState } from 'react';

function UserInput({ username, email }) {
  return (
    <div>
      {username} ({email})
    </div>
  );
}

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClick = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ]);

  return (
    <div className='App'>
      <input name='name' value={name} onChange={onChange} placeholder='이름을 입력해주세요.' />
      <input name='nickname' value={nickname} onChange={onChange} placeholder='이름을 입력해주세요.' />
      <button onClick={onClick}>등록</button>

      <div>
        {users.map((v) => {
          <UserInput name={v.username} email={v.email} key={v.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
