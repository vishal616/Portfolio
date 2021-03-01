import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	skillsList: {name: string, level: number}[];

	constructor() {
		this.skillsList = [
			{name: 'React', level: 90},
			{name: 'Angular', level: 80},
			{name: 'Spring Boot', level: 60},
			{name: 'HTML & CSS', level: 90},
			{name: 'JAVA', level: 75},
		];
	}

	ngOnInit(): void {
	}

}
