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
  formModule: FormModel
  gender: any
  themeGender: any

  constructor(
    private formRest: FormRestService
  ) {
    this.formModule = new FormModel('', '', '', '', '', '', new Date(''), '', '', new Date(''), new Date(''));
    this.gender = [{ type: 'femenino' }, { type: 'masculino' }];
    this.themeGender = [{ theme: 'lírica' }, { theme: 'épica' }, { theme: 'dramática' }];
  }


  ngOnInit(): void {
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
