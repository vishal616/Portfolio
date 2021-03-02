import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	isMenuCollapsed = true;

	constructor() {
	}

	ngOnInit(): void {
	}

	clickedMenuItem(event) {
		event.stopPropagation();
	}

}
