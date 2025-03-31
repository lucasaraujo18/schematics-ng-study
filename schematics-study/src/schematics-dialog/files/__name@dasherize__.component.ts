import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
})

export class <%= classify(name) %>Component implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  constructor(
     public dialogRef: MatDialogRef<<%= classify(name) %>Component>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('data => ', this.data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  close(): void {
    this.dialogRef.close();
  }
}