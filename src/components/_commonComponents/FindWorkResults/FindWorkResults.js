import { useState } from 'react';

import JobCard from '../../_commonComponents/JobCard/JobCard';
import Button from '../../_commonComponents/Button/Button';

// To do
const selectedCardInfo = {
	name: 'бухгалтер',
	salaryMin: 10000,
	salaryMax: 15000,
	type: 'full time',
	employer: 'Kurman',
	location: 'Lviv',
	phone: '+38024571241',
	requirements: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
	workingCondition: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
	responsibilities: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
}

const FindWorkResults = ({ data }) => {
	const [isSelectedShow, setIsSelectedShow] = useState(false);
	
	if (!data) {
		return;
	}
	
	if (data.length == 0) {
		return <h3 className="no-results">No results</h3>;
	}
	
	const jobCardSelected = (item) => {
		setIsSelectedShow(prev => !prev);
	};
	
	const items = data.map((item, index) => {
		const { position, salaryMin, salaryMax, type, description } = item;
		
		return (
			<li
				className="items__item item"
				key	={index}
				onClick={() => jobCardSelected(item)}
			>
				<JobCard
					name={position}
					salaryMin={salaryMin}
					salaryMax={salaryMax}
					type={type}
					description={description}					
				/>
			</li>
		);
	});
	
	const applyOffer = () => {
		setIsSelectedShow(false);
	};
	
	const cancel = () => {
		setIsSelectedShow(false);
	};
	
	return (
		<section className="find-work-results">
		{	!isSelectedShow
			&&
			<ul className="find-work-results__items items">				
				{items}
			</ul>
		}
			
			{	isSelectedShow
				&&			
				<div className="find-work-results__selected-outer">
					<div className="selected">
						<h4 className="selected__item selected__title">{selectedCardInfo.name}</h4>
				
						<p className="selected__item selected__salary">{selectedCardInfo.salaryMin} - {selectedCardInfo.salaryMax}</p>
						
						<p className="selected__item selected__type">{selectedCardInfo.type}</p>
						
						<p className="selected__item selected__employeer"><span className="bold">{selectedCardInfo.employer}</span></p>
						
						<div className="selected__item hr"/>
						
						<p className="selected__item selected__location">Розташування: {selectedCardInfo.location}</p>
						
						<p className="selected__item selected__phone">Телефон: {selectedCardInfo.phone}</p>
						
						<div className="selected__item hr"/>
						
						<p className="selected__item selected__requirements"><span className="bold">Вимоги:</span> {selectedCardInfo.requirements}</p>
						
						<p className="selected__item selected__workingCondition"><span className="bold">Умови роботи:</span> {selectedCardInfo.workingCondition}</p>
						
						<p className="selected__item selected__responsibilities"><span className="bold">Обов'язки:</span> {selectedCardInfo.responsibilities}</p>
						
						<div className="selected__button-wrapper">
							<Button
								text='Надіслати заявку'
								clickHandler={applyOffer}
							/>
							
							<Button
								text='Cancel'
								clickHandler={cancel}
							/>
						</div>
					</div>
				</div>
			}
		</section>
	);
}

export default FindWorkResults;