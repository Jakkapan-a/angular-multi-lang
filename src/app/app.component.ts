import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multi-lang';
  lang: string = 'en';
  constructor(private translate: TranslateService) {
    if (typeof localStorage !== 'undefined') {
      this.lang = localStorage.getItem('lang') || 'en';
      console.log('lang', this.lang);
      this.translate.use(this.lang);
    }
  }
  changeLanguage(lang: any) {
    const selectedLang = lang.target.value;
    localStorage.setItem('lang', selectedLang);
    this.lang = selectedLang;
    this.translate.use(this.lang);
  }

  ngOnInit() {

    // if (typeof localStorage !== 'undefined') {
    //   this.lang = localStorage.getItem('lang') || 'en';
    //   console.log('lang', this.lang);
    //   this.translate.use(this.lang);
    // }
  }
}
