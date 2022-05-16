import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../../Header/Header';
import Button from '../../_commonComponents/Button/Button';
import InputWrapper from '../../_commonComponents/InputWrapper/InputWrapper';
import TextareaWrapper from '../../_commonComponents/TextareaWrapper/TextareaWrapper';

import { 
	get,
	deleteMethod
} from '../../../services';

let id = null;

const JobInfo = () => {	
	const data = {
		eployeerName: '',
		number: '',
		position: '',
		salarMax: '',
		type: '',
		place: '',
		description: ''
	};
	
	const [jobInfo, setJobInfo] = useState({...data});
	const [isCreated, setIsCreated] = useState(false);
	
	const token = useSelector(state => state.token);
	
	useEffect(() => {
		const request = {
			urlPoint: '/vacancies',
			token
		};
		
		get(request, ({ isSuccess, data }) => {
			if (isSuccess) {				
				const vacancies = data.vacancies;
				
				console.log(vacancies)
				
				if (vacancies.length > 0) {
					setIsCreated(true);
					setJobInfo(data.vacancies[0]);
					
					id = vacancies[0]._id;
				} else {
					id = null;
				}
			} else {
				alert(`Can't load data. ${data.response.data.message}`);
			}
		});
	}, []);
	
	const deleteButtonHandler = e => {
		// e.preventDefault();
		
		// const request = {
			// urlPoint: '/candidates/' + cvId,
			// token
		// };
		
		// deleteMethod(request, ({ isSuccess, data }) => {
			// if (isSuccess) {
				// alert('Succuss!');
			// } else {				
				// alert(`Can't delete. ${data.response.data.message}`);
			// }
		// });
	};
	
	// Edit
	const buttonClickHandler = () => {}
	
	return (
		<section className="job-info">
			<Header />
		
			<main className="job-info__main main">
				{	!setIsCreated
						&&
						<h2 className="main__title">Резюме порожнє</h2>
					}
					
				{	setIsCreated
					&&
					<>
					
						<div className="main__block block">
							<p className="block__position">{jobInfo.position}</p>
							
							<p className="block__salary">{jobInfo.salaryMax} грн.</p>
							
							<p className="block__type">{jobInfo.type}</p>
							
							<p className="block__employer">{jobInfo.eployeerName}</p>
						</div>
						
						<div className="hr" />
						<div className="main__block block">
							<p className="block__location">Розташування: {jobInfo.place}</p>
							
							<p className="block__phone">Телефон: {jobInfo.number}</p>
						</div>
						<div className="hr" />
						
						<div className="main__block block others">
							<span className="bold">Примітка: </span>
							<span>{jobInfo.description}</span>
						</div>
						
						<div className="main__button-wrapper">
							<div className="main__button">
								<Link
									to={'/'}
									className="button"
								>
									OK
								</Link>
							</div>
							
							<div className="main__button">
								<Link
									to={'#'}
									className="button"
									onClick={deleteButtonHandler}
								>
									Delete
								</Link>
							</div>
						</div>
					</>
				}
			</main>
		</section>
	);
}

export default JobInfo;

// <div className="main__block block edit">
					// <Button 
						// text='Редагувати'
						// clickHandler={buttonClickHandler}
					// />
				// </div>
				
				
				// <div className="main__block block others">
							// <span className="bold">вимоги: </span>
							// <span>{jobInfo.description}</span>
						// </div>
						
						// <div className="main__block block others">
							// <span className="bold">умови роботи: </span>
							// <span>{}</span>
						// </div>
						
						// <div className="main__block block others">
							// <span className="bold">зобов'язання: </span>
							// <span>{}</span>
						// </div>