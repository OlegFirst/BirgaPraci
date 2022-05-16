import { useState } from 'react';

import Header from '../../Header/Header';
import Button from '../../_commonComponents/Button/Button';
import InputWrapper from '../../_commonComponents/InputWrapper/InputWrapper';
import Footer from '../../Footer/Footer';

import { commonValidator } from '../../../services/validations';
import { resumeInfo } from '../../../constants/main';

// TO DO:
// - save
// - remove

const CV = () => {
	const data = {
		nameSurname: '',
		birthdayDate: '',
		phone: '',
		lookingForPosition: '',
		lookingForCity: '',
		
		company: '',
		position: '',
		dateStart: '',
		dateEnd: '',

		educationLevel: '',
		school: '',
		specialization: '',
		learningDataStart: '',
		learningDataEnd: ''
	};
	
	const dataProps = resumeInfo;
	
	const [input, setInput] = useState({...dataProps});
	
	const [errors, setErrors] = useState(null);
	
	const changeHandler = e => {
		const { name, value } = e.target;
		
		setInput(prev => ({
			...prev,
			[name]: value
		}));
	}
	
	const buttonSaveClickHandler = () => {
		console.log(input.nameSurname)
		
		let isAllCorrect = true;
		setErrors({...data});
		
		// Card ---------------------------------
		if (!commonValidator(input.nameSurname)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				nameSurname: 'Некоректні імя та чи прізвище'
			}));
		}
		
		if (!commonValidator(input.lookingForPosition)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				lookingForPosition: 'Некоректна посада'
			}));
		}
		
		if (!commonValidator(input.birthdayDate)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				birthdayDate: 'Некоректна дата'
			}));
		}
		
		if (!commonValidator(input.phone)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				phone: 'Некоректний номер телефону'
			}));
		}
		
		if (!commonValidator(input.lookingForCity)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				lookingForCity: 'Некоректнна назва міста'
			}));
		}
		
		// Experience ---------------------------------
		if (!commonValidator(input.company)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				company: 'Некоректнa інформація'
			}));
		}
		
		if (!commonValidator(input.position)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				position: 'Некоректнa інформація'
			}));
		}
		
		if (!commonValidator(input.dateStart)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				dateStart: 'Некоректнa інформація'
			}));
		}
		
		if (!commonValidator(input.dateEnd)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				dateEnd: 'Некоректнa інформація'
			}));
		}
		
		// Education ---------------------------------
		if (!commonValidator(input.educationLevel)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				educationLevel: 'Некоректнa інформація'
			}));
		}
		
		if (!commonValidator(input.school)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				school: 'Некоректнa інформація'
			}));
		}
		
		if (!commonValidator(input.specialization)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				specialization: 'Некоректнa інформація'
			}));
		}
		
		if (!commonValidator(input.learningDataStart)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				learningDataStart: 'Некоректнa інформація'
			}));
		}
		
		if (!commonValidator(input.learningDataEnd)) {
			isAllCorrect = false;
			setErrors(prev => ({
				...prev,
				learningDataEnd: 'Некоректнa інформація'
			}));
		}
		
		if (!isAllCorrect) {
			return;
		}
		
		console.log('Success!---------------------');
		
		// Set user role		
		// dispatch({
			// type: 'setUserRole',
			// value: forEmployee ? 'forEmployee' : 'forEmployer'
		// });
		
		// console.log(store.getState());
	};
	
	const buttonRemoveClickHandler = () => {
		
	};
	
	return (
		<section className="cv-edit">
			<Header />
		
			<main className="cv-edit__main main">
				<h2 className="main__title">Резюме редагування</h2>
				
				<section className="main__content content">
					<div className="content__title">
						<h4>Візитка</h4>
					</div>
					
					<ul className="content__items items">
						<li className="items__item">
							<span>Ім'я та прізвище:</span>
							
							<InputWrapper
								name='nameSurname'
								beginingValue={dataProps.nameSurname}
								onChange={changeHandler}
								errorMessage={errors?.nameSurname}
							/>
						</li>
						
						<li className="items__item">
							<span>Посада, на якій хочеш працювати:</span>
							
							<InputWrapper
								name='lookingForPosition'
								placeholder={dataProps.lookingForPosition}
								onChange={changeHandler}
								errorMessage={errors?.lookingForPosition}
							/>
						</li>
						
						<li className="items__item">
							<span>Дата народження:</span>
							
							<InputWrapper
								name='birthdayDate'
								placeholder={dataProps.birthdayDate}
								onChange={changeHandler}
								errorMessage={errors?.birthdayDate}
							/>
						</li>
						
						<li className="items__item">
							<span>Номер телефону:</span>
							
							<InputWrapper
								name='phone'
								placeholder={dataProps.phone}
								onChange={changeHandler}
								errorMessage={errors?.phone}
							/>
						</li>
						
						<li className="items__item">
							<span>Місто пошуку роботи:</span>
							
							<InputWrapper
								name='lookingForCity'
								placeholder={dataProps.lookingForCity}
								onChange={changeHandler}
								errorMessage={errors?.lookingForCity}
							/>
						</li>
					</ul>
				</section>
				
				<section className="main__content content">
					<div className="content__title">
						<h4>Досвід роботи</h4>
						
						<span className="content__sub-title">Додайте своє останнє місце роботи</span>
					</div>
					
					<ul className="content__items items">
						<li className="items__item">
							<span>Назва компанії:</span>
							
							<InputWrapper
								name='company'
								placeholder={dataProps.company}
								onChange={changeHandler}
								errorMessage={errors?.company}
							/>
						</li>
						
						<li className="items__item">
							<span>Посада:</span>
							
							<InputWrapper
								name='position'
								placeholder={dataProps.position}
								onChange={changeHandler}
								errorMessage={errors?.position}
							/>
						</li>
						
						<li className="items__item">
							<span>Період роботи з:</span>
							
							<InputWrapper
								name='dateStart'
								placeholder={dataProps.dateStart}
								onChange={changeHandler}
								errorMessage={errors?.dateStart}
							/>
						</li>
						
						<li className="items__item">
							<span>по:</span>
							
							<InputWrapper
								name='dateEnd'
								placeholder={dataProps.dateEnd}
								onChange={changeHandler}
								errorMessage={errors?.dateEnd}
							/>
						</li>
					</ul>
				</section>
				
				<section className="main__content content">
					<div className="content__title">
						<h4>Освіта</h4>
					</div>
					
					<ul className="content__items items">
						<li className="items__item">
							<span>Рівень освіти:</span>
							
							<InputWrapper
								name='educationLevel'
								placeholder={dataProps.educationLevel}
								onChange={changeHandler}
								errorMessage={errors?.educationLevel}
							/>
						</li>
						
						<li className="items__item">
							<span>Навчальний заклад:</span>
							
							<InputWrapper
								name='school'
								placeholder={dataProps.school}
								onChange={changeHandler}
								errorMessage={errors?.school}
							/>
						</li>
						
						<li className="items__item">
							<span>Спеціальність:</span>
							
							<InputWrapper
								name='specialization'
								placeholder={dataProps.specialization}
								onChange={changeHandler}
								errorMessage={errors?.specialization}
							/>
						</li>
						
						<li className="items__item">
							<span>Період навчання з:</span>
							
							<InputWrapper
								name='learningDataStart'
								placeholder={dataProps.learningDataStart}
								onChange={changeHandler}
								errorMessage={errors?.learningDataStart}
							/>
						</li>
						
						<li className="items__item">
							<span>по:</span>
							
							<InputWrapper
								name='learningDataEnd'
								placeholder={dataProps.learningDataEnd}
								onChange={changeHandler}
								errorMessage={errors?.learningDataEnd}
							/>
						</li>
					</ul>
				</section>
				
				<div className="main__button">
					<Button 
						text='Зберегти'
						clickHandler={buttonSaveClickHandler}
					/>
					
					<Button 
						text='Видалити'
						clickHandler={buttonRemoveClickHandler}
					/>
				</div>
			</main>
			
			<Footer />
		</section>
	);
}

export default CV;