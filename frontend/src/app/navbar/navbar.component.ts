import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  lang: string = 'en';
  word: string = '';
  savedWord: string = '';

  saveWord() {
    // this.savedWord = this.word;
    const data = {
      text: this.word,
      targetLang: this.lang,
    };
    this.http
      .post('http://localhost:3000/translations', data)
      .subscribe((response: any) => {
        // Handle the API response
        this.savedWord = response.text; // Assuming the API returns a property named 'text'
      });
    window.location.reload();
  }
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  changeLang(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    localStorage.setItem('lang', lang);
    console.log('Selected language: ' + lang);
  }
}
