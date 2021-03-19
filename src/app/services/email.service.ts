import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EmailService {

	constructor(private http: HttpClient) {
	}

	sendEmail(emailBody) {
		return this.http.post('https://blooming-castle-57252.herokuapp.com/sendEmail', emailBody);
	}
}
