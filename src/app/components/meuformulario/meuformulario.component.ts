import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meuformulario',
  standalone: true,
  imports: [AppComponent, ReactiveFormsModule],
  templateUrl: './meuformulario.component.html',
  styleUrl: './meuformulario.component.css'
})
export class MeuformularioComponent implements OnInit {
  meuFormulario: any

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.meuFormulario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    this.meuFormulario.patchValue({
      name: 'Nancy',
      email: 'thiago@gmail.com'
    });

  }

  submitForm() {
    if (this.meuFormulario.valid) {
      // Faça alguma coisa com os dados do formulário
      console.log(this.meuFormulario.value);
    } else {
      // Exibir mensagens de erro, etc.
    }
  }

  limpaFomrulario() {
    this.meuFormulario.reset()
  }

  get formControls() {
    return this.meuFormulario.controls;
  }
}
