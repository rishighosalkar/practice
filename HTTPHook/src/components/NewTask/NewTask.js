import useHttp from '../../hooks/useHttp';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const {isLoading, error, sendRequest} = useHttp();
  const enterTaskHandler = async (taskText) => {

    const createTask = (taskdata) => {
      const generatedId = taskdata.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
  
      props.onAddTask(createdTask);
    };

    sendRequest({
      url: 'https://practice-2cc8c-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: JSON.stringify({ text: taskText }),
      headers: {
        'Content-Type': 'application/json',
      },
    }, createTask)
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
