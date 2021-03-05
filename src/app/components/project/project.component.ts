import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProjectDetailComponent} from '../project-detail/project-detail.component';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

	@Input() project: Project;

	constructor(private modalService: NgbModal,
				private activeModal: NgbActiveModal) {
	}

	ngOnInit(): void {
	}

	openProjectModal() {
		console.log('executing')
		const modalRef = this.modalService.open(ProjectDetailComponent, {
			keyboard: false,
			size: 'lg'
		});
		modalRef.componentInstance.project = this.project;
	}

}

export interface Project {
	name: string;
	type: string;
	image: string;
	briefInfo: string;
	link: string;
	github?: string;
	status?: string;
}
