import React, {useState, useEffect} from 'react';
// import styles from './index.module.scss';

const Hooks = (props: any) => {

  const [count, setCount] = useState(0);

  // useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
  useEffect(() => {
    console.log(count);

    return () => {
      console.log(count);
    }
  }, [count]); // 仅在 count 更改时更新 (有点类似vue中watch)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
};

export default Hooks;