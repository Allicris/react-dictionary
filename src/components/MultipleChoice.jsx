import { multiChoiceUrl } from '../common/constants';
import DictionarySelect from './DictionarySelect';
import { useEffect, useState } from 'react';
import { Button, Stack } from '@mui/material';

// const MultipleChoice = () => {
//   return <div>Multiple Choice</div>;
// };

export default function MultiChoice(props) {
 const [choices, setChoices] = useState([])
 const [answer, setAnswer] = useState(undefined);

 useEffect(() => {
  if(props.activeDictionary) {
    fetch(`${multiChoiceUrl}?tag=${props.activeDictionary.tags[0]}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      setChoices(data);
    })
    .catch((e) => console.log(e));
  }
 }, [props.activeDictionary]);

const pickAnswer = () => {
  let rand = Math.floor(Math.random() * 3);
  setAnswer(choices[rand]);
  console.log(answer);
}

const checkAnswer = () => {

}

 return (
  <Stack direction="column" spacing={2}>
    {choices &&
    choices.map((d, index) => <Button key={index}>{d.definition}</Button>)}
  </Stack>
 );
}

