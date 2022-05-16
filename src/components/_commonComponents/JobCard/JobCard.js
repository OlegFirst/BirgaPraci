const JobCard = ( props ) => {
	const { 
		name,
		salaryMin,
		salaryMax,
		type, 
		description 
	} = props;
	
	return (
		<div className="job-card">
			<h4 className="job-card__title">{name}</h4>
			
			<p>{salaryMin} - {salaryMax}</p>
			
			<p className="job-card__type">{type}</p>
			
			<p>{description}</p>
		</div>	
	);
}

export default JobCard;