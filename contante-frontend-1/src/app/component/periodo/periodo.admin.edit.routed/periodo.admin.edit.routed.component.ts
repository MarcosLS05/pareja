import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PeriodoService } from '../../../service/periodo.service';
import { IPeriodo } from '../../../model/periodo.interface';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


declare let bootstrap: any;

@Component({
  selector: 'app-periodo-admin-edit-routed',
  templateUrl: './periodo.admin.edit.routed.component.html',
  styleUrls: ['./periodo.admin.edit.routed.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class PeriodoAdminEditRoutedComponent implements OnInit {
  id: number = 0;
  oPeriodoForm: FormGroup | undefined = undefined;
  oPeriodo: IPeriodo | null = null;
  message: string = '';
  myModal: any;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oPeriodoService: PeriodoService,
    private oRouter: Router
  ) {
    this.oActivatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.createForm();
    this.get();
    this.oPeriodoForm?.markAllAsTouched();
  }

  createForm() {
    this.oPeriodoForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
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
      
    });
  }

  

  onReset() {
    this.oPeriodoService.get(this.id).subscribe({
      next: (oPeriodo: IPeriodo) => {
        this.oPeriodo = oPeriodo;
        this.updateForm();
      },
      error: (error) => {
        console.error(error);
      },
    });
    return false;
  }

  updateForm() {
    this.oPeriodoForm?.controls['id'].setValue(this.oPeriodo?.id);
    this.oPeriodoForm?.controls['anyos'].setValue(this.oPeriodo?.anyos);
    this.oPeriodoForm?.controls['descripcion'].setValue(this.oPeriodo?.descripcion);
    this.oPeriodoForm?.controls['comentarios'].setValue(this.oPeriodo?.comentarios);
    this.oPeriodoForm?.controls['cerrado'].setValue(this.oPeriodo?.cerrado);

  }

  get() {
    this.oPeriodoService.get(this.id).subscribe({
      next: (oPeriodo: IPeriodo
      ) => {
        this.oPeriodo = oPeriodo;
        this.updateForm();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  showModal(mensaje: string) {
    this.message = mensaje;
    this.myModal = new bootstrap.Modal(document.getElementById('mimodal'), {
      keyboard: false,
    });
    this.myModal.show();
  }

  hideModal = () => {
    this.myModal.hide();
    this.oRouter.navigate(['/admin/periodo/view/' + this.oPeriodo?.id]);
  };

  onSubmit() {
    if (!this.oPeriodoForm?.valid) {
      this.showModal('Formulario no válido');
      return;
    } else {
      this.oPeriodoService.update(this.oPeriodoForm?.value).subscribe({
        next: (oPeriodo: IPeriodo) => {
          this.oPeriodo = oPeriodo;
          this.updateForm();
          this.showModal('Periodo ' + this.oPeriodo.id + ' actualizado');
        },
        error: (error) => {
          this.showModal('Error al actualizar el Periodo');
          console.error(error);
        },
      });
    }
  }
}
