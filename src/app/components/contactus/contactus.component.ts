import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  forma : FormGroup

  constructor(private fb:FormBuilder, private validatorService:ValidatorsService) {
    this.forma = this.fb.group({});
    this.crearForm(); 
   }

  ngOnInit(): void {
  }

  crearForm(){
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      comentario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
    })
  }

  guardar(){
    console.log(this.forma);    
  }

}
