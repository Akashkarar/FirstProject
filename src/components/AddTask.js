import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [reminder, setReminder] = useState(false);
  const [status, setStatus] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!firstName) {
      return alert('Enter value');
    }
    onAdd({ firstName, lastName, email, age, reminder, gender, status });
    setFirstName('');
    setLastName('');
    setEmail('');
    setGender('');
    setStatus(false);
    setReminder(false);
    setAge('');
  };
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>First Name</label>
        <input
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className='form-control'>
        <label>Last Name</label>
        <input
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div className='form-control'>
        <label>Email</label>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className='form-control'>
        <label for='gender'>Gender:</label>
        <select
          name='pets'
          id='gender'
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value=''>--Please choose an option--</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>
      </div>
      <div className='form-control'>
        <label>Age</label>
        <input
          type='number'
          placeholder='Add Age'
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>
      {/* <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div> */}
      <div className='form-control form-control-check'>
        <label>Marital status:</label>
        <input
          type='checkbox'
          value={status}
          checked={status}
          onChange={(e) => {
            setStatus(e.currentTarget.checked);
          }}
        />
      </div>
      <input className='btn btn-block' type='submit' value='Save task' />
    </form>
  );
};

export default AddTask;
