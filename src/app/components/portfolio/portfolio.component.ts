import {Component, OnInit} from '@angular/core';
import {Project} from '../project/project.component';
import {CATEGORIES_LIST, CATEGORY} from '../helpers/categories';
import {PROJECTS_LIST} from '../helpers/projectHelper';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

	projectList: Project[];
	categoriesList: {label: string, value: string}[];

	constructor() {
		this.projectList = PROJECTS_LIST;
		this.categoriesList = CATEGORIES_LIST;
	}

	ngOnInit(): void {
	}

	filterProjects(category: string) {
		if (category === 'all') {
			this.projectList = PROJECTS_LIST;
			return;
		}
		this.projectList = PROJECTS_LIST.map((project: Project) => {
			if (project && project.categories.includes(category)) {
				return project;
			}
		});
	}

}
