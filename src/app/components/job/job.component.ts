import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-job',
	templateUrl: './job.component.html',
	styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

	@Input() job: Job;

	constructor() {
	}

	ngOnInit(): void {
	}

}

export interface Job {
	title: string;
	company: string;
	location: string;
	type: string;
	from: string;
	to: string;
}

