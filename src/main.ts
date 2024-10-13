import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { GeorgeButtonComponent } from './app/george-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GeorgeButtonComponent],
  template: `
    <h1>メンズコーチ ジョージ ボタン</h1>
    <app-george-button></app-george-button>
  `,
})
export class App {}

bootstrapApplication(App);