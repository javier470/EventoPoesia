import { Component, OnInit } from '@angular/core';
import { FormModel } from 'src/app/model/form.mode';
import { FormRestService } from 'src/app/services/formRest/form-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.css']
})
export class SendFormComponent implements OnInit {

  ngOnInit(): void {
  }

  formModule: FormModel

  constructor(
    private formRest: FormRestService
  ) {
    this.formModule = new FormModel('', '', '', '', '', '', new Date(''), '', '', new Date(''), new Date(''))
  }

  sendForm(form: any) {
    this.formRest.sendForm(this.formModule).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton: true
        })
        form.reset();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          showConfirmButton: true
        })
      }
    })
  }
}
