import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

	@Input() education: Education;

	constructor() {
	}

	ngOnInit(): void {
	}

}

export interface Education {
	degree: string;
	from: string;
	to: string;
	university: string;
}
