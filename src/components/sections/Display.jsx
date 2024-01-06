import '../../styles/Display.css';

export default function Display({info, jobInfo, handleEdit}) {
  let counter = 0;
  const infoJsx = [];
  const jobJsx = jobInfo.map((job, i) => {
    return (<div className='job-entry' key={i}>
      <p>Job {i + 1}</p>
      {Object.entries(job).map((pair, j) => <p key={j}>{pair[0]}: {pair[1]}</p>)}
    </div>);
  });

  for (const k in info) {
    infoJsx.push(<p key={counter++}>{k}: {info[k]}</p>)
  }

  return (
    <div className='display-general'>
      {infoJsx}
      {jobJsx}
      <button onClick={() => { handleEdit('form') }}>Edit</button>
    </div>
  );
}