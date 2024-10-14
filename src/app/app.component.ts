
import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { locale as enLang } from './modules/i18n/vocabs/en';
import { locale as thLang } from './modules/i18n/vocabs/th';
import {TranslationModule , TranslationService} from './modules/i18n/';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslationModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multi-lang';
  lang: string = 'en';
  constructor(private translationService: TranslationService) {
    this.translationService.loadTranslations(enLang, thLang);
    this.lang = this.translationService.getSelectedLanguage();
  }

  changeLanguage(lang: any) {
    this.translationService.setLanguage(lang.target.value);
  }

  ngOnInit() {
  }
}
interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}


const languages = [
  {
    lang: 'en',
    name: 'English',
    flag: './assets/media/flags/united-states.svg',
  },
  {
    lang: 'th',
    name: 'Thai',
    flag: './assets/media/flags/thai.svg',
  }
];
