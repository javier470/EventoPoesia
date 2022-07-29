import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormModel } from './model/form.mode';
import { FormRestService } from './services/formRest/form-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';


  constructor(
    private formRest: FormRestService
  ) {
  }


}
