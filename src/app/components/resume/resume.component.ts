import {Component, OnInit} from '@angular/core';
import {Job} from '../job/job.component';
import {Education} from '../education/education.component';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

	jobList: Job[];
	educationList: Education[];

	constructor() {
		this.jobList = [
			{
				company: 'Societe Generale',
				location: 'Bangalore',
				from: 'June 2019',
				to: 'Present',
				title: 'Software Engineer',
				type: 'FULLTIME'
			},
			{
				company: 'IDeaS Revenue Solutions',
				location: 'Pune',
				from: 'July 2018',
				to: 'December 2018',
				title: 'Software Engineer',
				type: 'INTERN'
			}
		];
		this.educationList = [
			{
				degree: 'Masters (Hons.) in Chemistry',
				from: 'August 2014',
				to: 'June 2019',
				university: 'BITS Pilani'
			},
			{
				degree: 'Bachelors (Hons.) in Chemical',
				from: 'August 2014',
				to: 'June 2019',
				university: 'BITS Pilani'
			}
		];
	}

	ngOnInit(): void {
	}

}
