import { useState } from 'react';
import { info as propInfo, jobInfo as propJobInfo, jobTemplate } from '../propData';
import Display from './sections/Display';
import Contacts from './sections/Contacts';
import Education from './sections/Education';
import Job from './sections/Job';
import processFD from '../utilities/processFD';
import '../styles/App.css'

export default function App() {
  const [info, setInfo] = useState(propInfo);
  const [jobInfo, setJobInfo] = useState(propJobInfo);
  const [status, setStatus] = useState('form');

  const handleStatus = (type) => type == 'form' ? setStatus('form') : setStatus('display');

  const handleState = (addEntry) => {
    const form = document.querySelector('#general-form');
    const formData = new FormData(form);
    const jobForms = Array.from(document.querySelectorAll('.job-section > form'));
    const entryFormDatas = jobForms.map(form => new FormData(form));
    const newEntries = entryFormDatas.map(fd => processFD(fd));
    const newJobInfo = [...jobInfo];
    newEntries.forEach((entry, index) => newJobInfo[index] = entry);
    addEntry ? newJobInfo.push({... jobTemplate}) : null; 

    setInfo(processFD(formData));
    setJobInfo(newJobInfo);
  }

  const handleSubmit = function(e) {
    e ? e.preventDefault() : null;
    handleState()
    handleStatus('display');
  }

  if (status === 'form') {
    return (
      <>
      <form onSubmit={handleSubmit} id='general-form'>
        <Contacts info={info} />
        <Education info={info} />
      </form>
      <Job jobInfo={jobInfo} handleClick={handleState} />
      <button type='submit' form='general-form'>Submit</button>
      </>
    )
  }
  else {
    return <Display info={info} jobInfo={jobInfo} handleEdit={handleStatus}/>
  }
}

/*
  There are two things to keep in mind when building the appliacation
  How the state will be structured,
  How the interface with interact with said structure

  For most of the application, its very simple
  Information like contacts and school info can be kept in a simple array
  But, theres a job's section that can contact x number of entries that the user determines,
  and each entry has its own seperate rendering thats done

  I'm assuming the best way to go about storing it is to have a jobs array that contain objects of each
  job entry. but how do I retrive and display this information? in the form part, do I have a separate form element for each
  job entry? I think the best way is to use a seperate form element for each job entry. 1. it allows me to use the FormData api, and
  2. it allows me to seperate each one easily from the rest.

  Contacts and 

  The problem:
  Create a CV app in react that has three sections. One for contacts(name, email, phone), another for education(school, major, date from and to)
  and a last one for job experience(for each job, company, position, responsibilities, date from and to and key for react). This information should first be
  collected in a form, then displayed in plain HTML after said form is submitted. The user should be able to edit the CV afterwards, with the 
  previous info the user entered displayed.

  The problem in plain english, explain the project goals in 1-2 sentences
  I'm supposed to code a resume builder that takes a persons educational and professional experience and displays it on the page. 
  There are three sections a person can fill out: their contact and education info, and a list of their work experience.

  Plan: 

  Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
  There are two stages to the UI. The forms stage, and the display stage. The forms stage allows users to enter/edit their CV, the display
  displays the summary of the users experiences, and allows them to go back to edit.

  What inputs will your program have? Will the user enter data or will you get input from somewhere else?
  Inputs will be the submit button, the add job entry button and the edit buttons. Users enter data into the form's section, then
  submits it to be displayed in the display section. The edit button allows them to go back to the forms. The add job entry button
  adds another job entry

  What’s the desired output?
  Desired output from submitting the form is the form data saved into state and it being displayed.

  Small unit is the Input component. It has label and input elements. Props are label text, input type, value, id
  Second is Fieldset component. Returns a fieldet and legend element. Props are title and children of Inputs
  Indiviual section components. These will just be Fieldsets in their own component files. Props: data
  Job section component. This one will contain multiple form elements, each for indivual job entries. It will also contain the Add entry
  button. Props: jobs array, handleEntries callback.

  Create display first, with prop information.
  prop information object contents:
  info: {name, email, tel, school, major, dateTo, dateFrom}
  jobInfo: {jobEntry}
  entryTemplate: {company, position, duties, dateTo, dateFrom, key}

  User sumbits form
  Info parsed and saved into state
  Turn info object into array to interate through
  Display info in paragraphs, seperated by br tags
  Iterate through jobs array
  give each job a div with border around them
  Same as with general info 
*/