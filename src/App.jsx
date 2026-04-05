import { useState } from 'react'
import './App.css'
import { GeneralInfo } from './GeneralInfo';
import { Education } from './Education';
import { Experience } from './Experience';

function App() {
	const [edit, setEditStatus] = useState(true);
	const [generalInfo, setGeneralInfo] = useState({
		name: '',
		email: '',
		phone: ''
	});
	const [educationInfo, setEducationInfo] = useState({
		school: '',
		degree: '',
		date: ''
	});
	const [experienceInfo, setExperienceInfo] = useState({
		company: '',
		role: '',
		responsibility: '',
		date: ''
	});


	return (
		<>
			<GeneralInfo data = {generalInfo} setData = {setGeneralInfo} editStatus = {edit}/>
			<Education data = {educationInfo} setData = {setEducationInfo} editStatus = {edit}/>
			<Experience data = {experienceInfo} setData = {setExperienceInfo} editStatus = {edit}/>
			<button onClick={() => setEditStatus(!edit)}>
				{edit ? 'Submit' : 'Edit'}
			</button>
		</>
	)
}

export default App
