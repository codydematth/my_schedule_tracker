import React, {useState} from 'react';

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add text');
      return;
    }

    onAdd({text, day, reminder});
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form action='' onSubmit={onSubmit}>
      <div className='md:w-2/5 m-auto'>
        <div className='py-4'>
          <label htmlFor='' className='text-xl'>
            {' '}
            Task
          </label>
          <br />
          <input
            type='text'
            className='w-full h-12 placeholder:text-center'
            placeholder='Add Task'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='py-4'>
          <label htmlFor='' className='text-xl'>
            {' '}
            Day
          </label>
          <br />
          <input
            type='text'
            className='w-full h-12 placeholder:text-center'
            placeholder='Add Date & Time'
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className='py-4'>
          <label htmlFor='' className='mr-36 text-xl'>
            {' '}
            Reminder
          </label>
          <input
            type='checkbox'
            className='w-64 h-4'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div className='py-2 m-auto justify-center text-center m-full bg-black text-white mb-2 cursor-pointer text-lg'>
          <input
            type='submit'
            value='Save Task'
            className='p-2 cursor-pointer w-full'
          />
        </div>
      </div>
    </form>
  );
};

export default AddTask;
