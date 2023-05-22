import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-backend-result',
  templateUrl: './backend-result.component.html',
  styleUrls: ['./backend-result.component.css'],
})
export class BackendResultComponent {
  lang: string = '';
  translationData: { text: string; _id: string; targetLang: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const lang = localStorage.getItem('lang') || 'en';

    console.log('lang', lang);

    this.http
      .get('http://localhost:3000/translations')
      .subscribe((response: any) => {
        this.translationData = response.translationData;
        console.log(response);
        console.log(response.translationData[0].text);
      });
    console.log(this.translationData);
  }

  deleteTranslation(translationId: string): void {
    const apiUrl = `http://localhost:3000/translations/${translationId}`;

    this.http.delete(apiUrl).subscribe(
      () => {
        // Delete request successful, perform any necessary actions
        console.log(`Translation with ID ${translationId} deleted.`);
      },
      (error) => {
        // Handle the delete request error
        console.error('Delete request error:', error);
      }
    );
    window.location.reload();
  }
}
