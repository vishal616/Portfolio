import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailService} from '../../services/email.service';
import {ToastrService} from 'ngx-toastr';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	contactForm: FormGroup;

	constructor(private formBuilder: FormBuilder,
				private emailService: EmailService,
				private toastrService: ToastrService) {
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

		if (!this.contactForm.valid) {
			this.toastrService.error('Please fill all the fields', 'Error!');
			return;
		}

		this.emailService.sendEmail(this.contactForm.value).subscribe((response) => {
			this.toastrService.success('Email sent successfully', 'Success!');
			this.contactForm.reset();
		}, (error) => {
			this.toastrService.error('Error in sending email', 'Error!');
		});

	}

}
