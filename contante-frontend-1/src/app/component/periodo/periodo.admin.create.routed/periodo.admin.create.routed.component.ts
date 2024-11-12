import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IPeriodo } from '../../../model/periodo.interface';
import { PeriodoService } from '../../../service/periodo.service';

declare let bootstrap: any;

@Component({
  standalone: true,
  selector: 'app-periodo.admin.create.routed',
  templateUrl: './periodo.admin.create.routed.component.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  styleUrls: ['./periodo.admin.create.routed.component.css'],
})
export class PeriodoAdminCreateRoutedComponent implements OnInit {
  id: number = 0;
  oPeriodoForm: FormGroup | undefined = undefined;
  oPeriodo: IPeriodo | null = null;
  strMessage: string = '';

  myModal: any;
message: any;

  constructor(private oPeriodoService: PeriodoService, private oRouter: Router) {}

  ngOnInit() {
    this.createForm();
    this.oPeriodoForm?.markAllAsTouched();
  }

  createForm() {
    this.oPeriodoForm = new FormGroup({
      debe: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d{1,4}(\\.\\d{1,4})?$'),
      ]),
      haber: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d{1,4}(\\.\\d{1,4})?$'),
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      comentarios: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      momentstamp: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}$'
        ),
      ]),
      orden: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?:-?(?:[0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-7]|128)|127)$'),
      ]),
      id_asiento: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d+$'),
      ]),
      id_subcuenta: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d+$'),
      ]),
      id_tipoPeriodo: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d+$'),
      ]),
    });
  }

  updateForm() {
    this.oPeriodoForm?.controls['debe'].setValue('');
    this.oPeriodoForm?.controls['haber'].setValue('');
    this.oPeriodoForm?.controls['descripcion'].setValue('');
    this.oPeriodoForm?.controls['comentarios'].setValue('');
    this.oPeriodoForm?.controls['momentstamp'].setValue('');
    this.oPeriodoForm?.controls['orden'].setValue('');
    this.oPeriodoForm?.controls['id_asiento'].setValue('');
    this.oPeriodoForm?.controls['id_subcuenta'].setValue('');
    this.oPeriodoForm?.controls['id_tipoPeriodo'].setValue('');
  }

  showModal(mensaje: string) {
    this.strMessage = mensaje;
    this.myModal = new bootstrap.Modal(document.getElementById('mimodal'), {
      keyboard: false,
    });
    this.myModal.show();
  }

  onReset() {
    this.updateForm();
    return false;
  }

  hideModal = () => {
    this.myModal.hide();
    this.oRouter.navigate(['/admin/Periodo/view/' + this.oPeriodo?.id]);
  };

  onSubmit() {
    
    if (this.oPeriodoForm?.invalid) {
      this.showModal('Formulario inválido');
      return;
    } else {
      this.oPeriodoService.create(this.oPeriodoForm?.value).subscribe({
        next: (oPeriodo: IPeriodo) => {
          this.oPeriodo = oPeriodo;
          this.showModal('Periodo creado con el id: ' + this.oPeriodo.id);
        },
        error: (err) => {
          this.showModal('Error al crear el Periodo');
          console.log(err);
        },
      });
    }
  }
}
