import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

	@Input() project: Project;

	constructor() {
	}

	ngOnInit(): void {
	}

}

export interface Project {
	name: string;
	type: string;
	image: string;
	briefInfo: string;
	link: string;
}
