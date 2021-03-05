import {Component, OnInit} from '@angular/core';
import {Project} from '../project/project.component';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

	projectList: Project[];

	constructor() {
		this.projectList = [{
			name: 'Website',
			image: '../../../assets/projects/project-1.jpg',
			type: 'Front-end',
			status: 'Completed',
			github: 'https://github.com/vishal616',
			briefInfo: 'helps you find stock photos',
			link: 'https://www.pexels.com/'
		},
			{
				name: 'Website',
				image: '../../../assets/projects/project-1.jpg',
				type: 'Front-end',
				briefInfo: 'helps you find stock photos',
				link: 'https://www.pexels.com/'
			},
			{
				name: 'Website',
				image: '../../../assets/projects/project-1.jpg',
				type: 'Front-end',
				briefInfo: 'helps you find stock photos',
				link: 'https://www.pexels.com/'
			},
			{
				name: 'Website',
				image: '../../../assets/projects/project-1.jpg',
				type: 'Front-end',
				briefInfo: 'helps you find stock photos',
				link: 'https://www.pexels.com/'
			}];
	}

	ngOnInit(): void {
	}

}
