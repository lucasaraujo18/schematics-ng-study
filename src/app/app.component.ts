import { Component, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacaoComponent } from './components/confirmacao.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MatDialog]
})
export class AppComponent {
  title = 'schematics-study-project';

  constructor(
    @Optional() private dialog: MatDialog
  ) {}

  open(): void {
    this.dialog.open(ConfirmacaoComponent, {
      height: '400px',
      width: '600px',
      data: {
        titulo: 'title',
        mode: 'editar'
      }
    });
  }
}