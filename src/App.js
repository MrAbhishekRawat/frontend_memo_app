import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [isDescending, setIsDescending] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle((prevTitle) => prevTitle === 'My List' ? 'New Title' : 'My List');
  }, []);

  const changeOrderHandler = useCallback(() => {
    setIsDescending((prevIsDescending) => !prevIsDescending);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9].sort((a, b) => isDescending ? b - a : a - b), [isDescending]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>Change to {isDescending ? 'Ascending' : 'Descending'} Order</Button>
    </div>
  );
}

export default App;
