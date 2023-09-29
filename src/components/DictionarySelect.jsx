import {
  Chip,
  Stack,
} from '@mui/material';
import { useDictionary } from '../utils/DictionaryContext';
import { useEffect } from 'react';


function DictionarySelects() {
  const { state, active, setActive, dispatch } = useDictionary();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/dictionaries');
        const data = await response.json();

        dispatch(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
      fetchData();
  }, [dispatch, setActive]);


  return (
    <div>
      <Stack direction='column'>
        {state &&
          state.map((d, index) => (
            <Chip
              color={d._id !== active?._id ? "primary" : "secondary"}
              label={d.title}
              key={index}
              onClick={() => {
                setActive(d);
                const color = d._id !== active._id ? "primary" : "secondary"
              }}
            />
          ))}
      </Stack>
    </div>
  )
}

export default DictionarySelects;