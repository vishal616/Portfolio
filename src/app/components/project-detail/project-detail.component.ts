import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Project} from '../project/project.component';


@Component({
	selector: 'app-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

	@Input() project: Project;

	constructor(private activeModal: NgbActiveModal) {
	}

	ngOnInit(): void {
	}

	closeModal() {
		this.activeModal.close();
	}

}
