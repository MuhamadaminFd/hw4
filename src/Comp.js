import { useState } from 'react';
import axios from 'axios';

const Comp = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching!', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch</button>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.name}>{item.email}</li>
          ))}
        </ul>
      ) : (
        <p>Click</p>
      )}
    </div>
  );
};

export default Comp;
