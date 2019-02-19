import { Component, OnInit } from '@angular/core';
import { VerrekenCalculator } from './logic/VerrekenCalculator';
import { Kasboek } from './models/kasboek';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Deelnemer } from './models/deelnemer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Verrekenapp van Thijs';

  deelnemerForm: FormGroup;
  deelnemers: Deelnemer[] = [];
  calc = new VerrekenCalculator();
  kasboek: Kasboek;

  ngOnInit() {
    this.deelnemerForm = new FormGroup({
      'naamControl': new FormControl(null, [Validators.required, this.validNaam.bind(this)]),
      'inlegControl': new FormControl(null, [Validators.required, this.validInleg.bind(this)])
    })
  }
  constructor() { }

  onSubmit() {
    const naam: string = this.deelnemerForm.value['naam'];
    const inleg: number = parseFloat(this.deelnemerForm.value['inleg']);

    const deelnemer = new Deelnemer(naam, inleg);
    this.deelnemers.push(deelnemer);
    this.kasboek = new VerrekenCalculator().verreken(this.deelnemers);
  }

  validNaam(control: FormControl): { [s: string]: boolean } {
    const naam = control.value;
    const regexp = new RegExp('^[a-zA-Z]([a-zA-Z0-9]){2,14}');
    if (regexp.test(naam) !== true) {
      return { naam: false };
    } else {
      return null;
    }
  }

  validInleg(control: FormControl): { [s: string]: boolean } {
    const inleg = control.value;
    const regexp = new RegExp('^[0-9]+(\.[0-9]{1,2})?$');
    if (regexp.test(inleg) !== true) {
      return { inleg: false };
    } else {
      return null;
    }
  }

  bereken() {
    let calc = new VerrekenCalculator();
    this.kasboek = calc.verreken([]);
    console.log(this.kasboek);
  }
}
