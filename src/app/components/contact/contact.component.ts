import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	contactForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.contactForm = this.formBuilder.group({
			firstName: [null, [Validators.required, Validators.maxLength(15)]],
			lastName: [null, [Validators.required, Validators.maxLength(15)]],
			email: [null, Validators.required],
			message: [null, Validators.required]
		});
	}

	ngOnInit(): void {
	}

	submit() {
		console.log(this.contactForm);
		console.log(this.contactForm.value);
		console.log(this.contactForm.valid)
	}

}
