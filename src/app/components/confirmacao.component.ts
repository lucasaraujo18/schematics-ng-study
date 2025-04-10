import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.scss'],
})

export class ConfirmacaoComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public title!: string;
  public mode!: string;

  constructor(
     public dialogRef: MatDialogRef<ConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('data', data);
    this.title = this.data.titulo;
    this.mode = this.data.mode;
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }

  close(): void {
    this.dialogRef.close();
  }
}