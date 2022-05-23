const JobCard = ( props ) => {
	const { 
		eployeerName,
		salaryMin,
		salaryMax,
		type, 
		description 
	} = props;
	
	return (
		<div className="job-card">
			<h4 className="job-card__title">{eployeerName}</h4>
			
			<p>{salaryMin} - {salaryMax}</p>
			
			<p className="job-card__type">{type}</p>
			
			<p>{description}</p>
		</div>	
	);
}

export default JobCard;