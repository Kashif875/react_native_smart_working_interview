import axios from 'axios';
import Constants from '../constants';
import { loaderRef } from '../refs/loaderRef';

const axiosInstance = axios.create({});

const request = async ({ url, method, data, isLoader = true, headers, showAlert = true }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const config = {
                url: url,
                method,
                data: data ? data : null,
            };

            if (isLoader) {
                loaderRef.current?.show();
            }

            const response = await axiosInstance(config);

            resolve(response?.data)
        } catch (error) {
            let { response } = error;
            if (response) {
                let { data } = error?.response;
                let { message } = data;
                reject(message || Constants.services.somethingWentWrong)
            } else {
                reject(Constants.services.somethingWentWrong)
            }

        } finally {
            if (isLoader) {
                loaderRef.current?.hide();
            }
        }
    })
};

export default request;
