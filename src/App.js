import React from 'react';
import { useState, useEffect } from 'react';
import List from './components/list';
import Task from './components/task';
import Header from './components/header';
import { initial } from './components/initial';


function App() {

  const [showDate, setShowDate] = useState("");
  const [showTime, setShowTime] = useState("");
  const [showTask, setTask] = useState(initial)

  const onCreate = (task) => {
    const id = Date.now()
    const NewTask = { id, ...task }
    setTask((prevState) => [...prevState, NewTask])
  }

  const toggleDone = (id) => {
    setTask(showTask.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    )
    )
  }

  const onDelete = (deletedId) => setTask((showTask.filter((item) => item.id !== deletedId)))

  useEffect(() => {

    function show() {
      const time = new Date();
      const newTime = time.toLocaleTimeString()
      setShowTime(newTime)
    }
    setInterval(show, 1000)


    let tarih = new Date();
    let gunler = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let NewDate = gunler[tarih.getDay()]
    setShowDate(NewDate)


  }, []);

  return (
    <div class="ui container">
      <Header title="Happy" showDate={showDate} showTime={showTime} />
      <Task onCreate={onCreate} />
      {
        showTask.length > 0 ?
          <List showTask={showTask} toggleDone={toggleDone} onDelete={onDelete} />
          : null
      }

    </div >
  );
}


export default App;
