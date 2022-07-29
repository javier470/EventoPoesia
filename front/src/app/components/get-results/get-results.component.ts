import { Component, OnInit } from '@angular/core';
import { FormRestService } from 'src/app/services/formRest/form-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-results',
  templateUrl: './get-results.component.html',
  styleUrls: ['./get-results.component.css']
})
export class GetResultsComponent implements OnInit {
  results: any

  constructor(
    private formRest: FormRestService
  ) { }

  ngOnInit(): void {
    this.getResults()
  }

  getResults() {
    this.formRest.getResults().subscribe({
      next: (res: any) => this.results = res.forms,
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
