import _ from 'lodash';
import { throwError, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import config from '../utils/config'


const apiResquest = <T>({
    path,
    method,
    body,
}: any): Observable<T> => {

    let url = `${config.BASE_URL}${path}?api_key=${config.API_KEY}`
    const settings = {
        method,
        url,
        body
    } 
    return ajax(settings).pipe(
        catchError(({ message, status, response}) => {
            const error = {
                message,
                code: String(status),
            };
            if (response) {
                error.code = response.code;
                error.message = response.message;
            }
            console.log(`Error from API ${path} ====> `, error);
            return throwError(error);
             
        }),
        map(({ response }) => {
            console.log(`BO Response: POST ${path} ====> `, response);
            if (!response) {
                return {
                    code: '500',
                    message: 'Internal Server Error',
                };
            }
            return response;
        })
    )
}

export default apiResquest;