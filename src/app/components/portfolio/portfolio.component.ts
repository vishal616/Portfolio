import {Component, OnInit} from '@angular/core';
import {Project} from '../project/project.component';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

	project1: Project;

	constructor() {
		this.project1 = {
			name: 'Website',
			image: '../../../assets/projects/project-1.jpg',
			type: 'Front-end',
			briefInfo: 'helps you find stock photos',
			link: 'https://www.pexels.com/'
		};
	}

	ngOnInit(): void {
	}

}
