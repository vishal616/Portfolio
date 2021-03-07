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
			name: 'Portfolio Website',
			image: '../../../assets/projects/portfolio.PNG',
			type: 'FrontEnd',
			status: 'In Progress',
			github: 'https://github.com/vishal616/Portfolio',
			briefInfo: 'This is my personal portfolio where i will be showing my own side projects',
			link: 'https://www.vishmish.in/',
			techStack: ['Angular', 'Node.js']
		}];
	}

	ngOnInit(): void {
	}

}
