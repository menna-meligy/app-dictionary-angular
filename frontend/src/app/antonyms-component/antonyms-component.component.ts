// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-antonyms-component',
//   templateUrl: './antonyms-component.component.html',
//   styleUrls: ['./antonyms-component.component.css'],
// })
// export class AntonymsComponentComponent {
//   @Input() antonyms!: string[]; // Replace 'string[]' with the actual type of antonyms array
// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedDataService } from '../shared-data-service.service';

@Component({
  selector: 'app-antonyms-component',
  templateUrl: './antonyms-component.component.html',
  styleUrls: ['./antonyms-component.component.css'],
})
export class AntonymsComponentComponent implements OnInit {
  word!: string;
  antonyms!: any[];

  constructor(
    private apiService: ApiService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.word = this.sharedDataService.getWord();
    //this.getAntonyms();
  }

  // getAntonyms(): void {
  //   if (this.word) {
  //     this.apiService.getAntonyms(this.word).subscribe(
  //       (response) => {
  //         this.antonyms = response.response;
  //       },
  //       (error) => {
  //         console.error('Error fetching antonyms:', error);
  //       }
  //     );
  //   }
  // }
}
