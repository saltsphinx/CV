import Input from "../Input";

export default function JobEntry( { job, index }) {
  return (
    <form key={index} >
      <Input labelText='Company Name: ' type='input' name='company' value={job.company} />
      <Input labelText='Position: ' type='input' name='position' value={job.position} />
      <Input labelText='Duties: ' type='textarea' name='duties' value={job.duties} />
      <Input labelText='Date From: ' type='input' name='dateFrom' value={job.dateFrom} />
      <Input labelText='Date To: ' type='input' name='dateTo' value={job.dateTo} />
    </form>
  );
}