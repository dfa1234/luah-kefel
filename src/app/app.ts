import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [CommonModule, FormsModule],
})
export class AppComponent {
  title = 'לוח כפל';
  validate = 'אישור';

  result: number | null = null;
  first = 0;
  second = 0;

  hasStarted = false;
  hasResponded = false;

  yes = '!נכון';
  no = 'לא נכון';

  newBtn = 'חדש';

  isCorrect = true;

  response = '';

  onValidate() {
    this.hasResponded = true;
    if (this.result === this.first * this.second) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }

  createNew() {
    this.hasResponded = false;
    this.hasStarted = true;
    this.result = 0;
    this.first = Math.floor(Math.random() * 10) + 1;
    this.second = Math.floor(Math.random() * 10) + 1;
  }

  selectAll($event: any) {
    $event?.target?.select();
  }
}
