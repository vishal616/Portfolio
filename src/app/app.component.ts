import {Component, HostListener, Input} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@Input() closeNavBar = true;

	@HostListener('click')
	clicked() {
		this.closeNavBar = !this.closeNavBar;
	}
}
