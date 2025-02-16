import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPeriodo } from '../../../model/periodo.interface';
import { PeriodoService } from '../../../service/periodo.service';

@Component({
  selector: 'app-periodo.admin.view.routed',
  templateUrl: './periodo.admin.view.routed.component.html',
  styleUrls: ['./periodo.admin.view.routed.component.css'],
})
export class PeriodoAdminViewRoutedComponent implements OnInit {
  id: number = 0;
  route: string = '';
  oPeriodo: IPeriodo = {
    id: 0,
    anyos: 0,
    descripcion: '',
    comentarios: '',
    cerrado: false,
  };
  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oPeriodoService: PeriodoService
  ) {}

  ngOnInit() {
    this.id = this.oActivatedRoute.snapshot.params['id'];
    this.getOne();
  }
getOne() {
    this.oPeriodoService.getOne(this.id).subscribe({
      next: (data: IPeriodo) => {
        this.oPeriodo = data;
      },
    });
  }
}
