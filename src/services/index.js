import axios from 'axios';
import { url } from '../constants/main';

// Sign in / up
export const sign = ({ urlPoint, props }, readed) => {
	console.log(urlPoint, props);
	
	axios
		.post(url + urlPoint, props)
		.then(res => {
			console.log(res, res.data)
			
			readed({
				isSuccess: true,
				data: res.data
			});
		})
		.catch(err => {
			readed({
				isSuccess: false,
				data: err
			});
		});
};

// Get method HOOK
export const instance = axios.create({
	baseURL: url
});

// Get method
export const get = ({ urlPoint, token }, readed) => {
	console.log(url + urlPoint, token);
		
	axios
		.get(url + urlPoint, {
			headers: {
				Authorization: 'Bearer ' + token
			}
			})
			.then(res => {
				readed({
					isSuccess: true,
					data: res.data
				});
			})
			.catch(err => {
				readed({
					isSuccess: false,
					data: err
				});
			});
};

// Post method
export const post = ({ urlPoint, props, token }, readed) => {
	console.log(urlPoint, props, token);
	
	axios
		.post(url + urlPoint, props, {
			headers: {
				Authorization: 'Bearer ' + token
			}
		})
		.then(res => {
			readed({
				isSuccess: true,
				data: null
			});
		})
		.catch(err => {
			readed({
				isSuccess: false,
				data: err
			});
		});
};

// Delete method
export const deleteMethod = ({ urlPoint, token }, readed) => {
	console.log(url + urlPoint, token);
	
	
	axios
		.delete(url + urlPoint, {
			headers: {
				Authorization: 'Bearer ' + token
			}
		})
		.then(res => {
			readed({
				isSuccess: true,
				data: null
			});
		})
		.catch(err => {
			readed({
				isSuccess: false,
				data: err
			});
		});
};