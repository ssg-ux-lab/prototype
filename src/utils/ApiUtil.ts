import axios from 'axios';
import URL from '../constants/url';

class ApiUtil {
	apiRoot = URL.API_ROOT;

	async get(path: string, data?: any) {
		try {
			return (await axios.get(this.apiRoot + path, { params: data })).data;
		} catch (e) {
			console.log(e);
			return null;
		}
	}
	async post(path: string, data?: any) {
		try {
			return (await axios.get(this.apiRoot + path, data)).data;
		} catch (e) {
			console.log(e);
			return null;
		}
	}
	async put(path: string, data?: any) {
		try {
			return (await axios.get(this.apiRoot + path, data)).data;
		} catch (e) {
			console.log(e);
			return null;
		}
	}
	async delete(path: string, data?: any) {
		try {
			return (await axios.get(this.apiRoot + path, data)).data;
		} catch (e) {
			console.log(e);
			return null;
		}
	}
}

export default new ApiUtil();
