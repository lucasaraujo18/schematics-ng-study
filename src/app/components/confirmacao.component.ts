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

  constructor(
     public dialogRef: MatDialogRef<ConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('data => ', this.data);
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }

  close(): void {
    this.dialogRef.close();
  }
}