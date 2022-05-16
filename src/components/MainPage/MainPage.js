import { useState } from 'react';
import { useSelector } from 'react-redux';
import useRequest from '../../services/loadingHook';

import Header from '../Header/Header';
import FindWork from '../_commonComponents/FindWork/FindWork';
import Footer from '../Footer/Footer';
import FindWorkResults from '../_commonComponents/FindWorkResults/FindWorkResults';

const MainPage = () => {
	const vacancies = useSelector(state => state.vacancies);
	const [findWorkResults, setFindWorkResults] = useState(null);
	
	// Getting vacancies from server
	const { isLoading } = useRequest({
		url: '/vacancies',
		type: 'setVacancies',
		dataKey: 'vacancies'
	});
	
	if (isLoading) {
		return <h3>Loading...</h3>;
	}
	
	// Work searching results
	const findWorkResponseHandler = data => {
		setFindWorkResults(data);
	};
	
	return (
		<section className="main-page">
			<Header />
		
			<main className="main-page__main main">
				<h1 className="main__title">Пошук роботи для біженців</h1>
				
				<div className="main__find">
					<FindWork
						vacanciesList={vacancies}
						findWorkResponse={findWorkResponseHandler}
					/>
				</div>
				
				<div className="main__find-results">
					<FindWorkResults
						data={findWorkResults}
					/>
				</div>
			</main>
			
			<Footer />
		</section>
	);
}

export default MainPage;