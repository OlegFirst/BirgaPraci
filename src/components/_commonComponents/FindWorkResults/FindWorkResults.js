import { useState } from 'react';

import JobCard from '../../_commonComponents/JobCard/JobCard';
import Button from '../../_commonComponents/Button/Button';

const FindWorkResults = ({ data }) => {	
	const [isSelectedShow, setIsSelectedShow] = useState(false);
	const [selectedCardInfo, setSelectedCardInfo] = useState({});
	
	if (!data) {
		return;
	}
	
	if (data.length == 0) {
		return <h3 className="no-results">No results</h3>;
	}
	
	const jobCardSelected = (item) => {
		setSelectedCardInfo(item);
		setIsSelectedShow(true);
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
						<h4 className="selected__item selected__title">{selectedCardInfo?.position}</h4>
						
						<p className="selected__item selected__employeer"><span className="bold">{selectedCardInfo?.eployeerName}</span></p>
						
						<p className="selected__item selected__phone">Телефон: {selectedCardInfo?.number}</p>
						
						<p className="selected__item selected__location">Розташування: {selectedCardInfo?.place}</p>
						 
						<p className="selected__item selected__salary">Заробітна плата: {selectedCardInfo?.salaryMin} - {selectedCardInfo?.salaryMax}</p>
						
						<p className="selected__item selected__type">{selectedCardInfo?.type}</p>
						
						<p className="selected__item selected__requirements">{selectedCardInfo?.description}</p>
						
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