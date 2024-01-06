import JobEntry from './JobEntry';
import Fieldset from '../Fieldset';

export default function Job({ jobInfo, handleClick }) {
  const entriesJsx = jobInfo.map((entry, index) => {
    return (
      <JobEntry job={entry} key={index}/>
    )
  });

  return (
    <Fieldset title='Jobs' className='job-section'>
      <button type='button' onClick={() => handleClick(true)}>Add Job</button>
      {entriesJsx}
    </Fieldset>
  );
}