import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	isMenuCollapsed = true;
	displayDark = false;

	constructor() {
	}

	ngOnInit(): void {
	}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
			document.getElementById('nav-bar').classList.add('fixed-nav');
			this.displayDark = true;
		} else {
			document.getElementById('nav-bar').classList.remove('fixed-nav');
			this.displayDark = false;
		}
	}

}
