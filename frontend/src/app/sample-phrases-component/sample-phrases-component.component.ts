// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-sample-phrases-component',
//   templateUrl: './sample-phrases-component.component.html',
//   styleUrls: ['./sample-phrases-component.component.css'],
// })
// export class SamplePhrasesComponentComponent {
//   @Input() samplePhrases!: string[]; // Replace 'string[]' with the actual type of sample
// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedDataService } from '../shared-data-service.service';

@Component({
  selector: 'app-sample-phrases-component',
  templateUrl: './sample-phrases-component.component.html',
  styleUrls: ['./sample-phrases-component.component.css'],
})
export class SamplePhrasesComponentComponent implements OnInit {
  word!: string;
  samplePhrases!: any[];

  constructor(
    private apiService: ApiService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.word = this.sharedDataService.getWord();
    //this.getSamplePhrases();
  }

  // getSamplePhrases(): void {
  //   if (this.word) {
  //     this.apiService.getSamplePhrases(this.word).subscribe(
  //       (response) => {
  //         this.samplePhrases = response.def[0]?.tr[0]?.ex;
  //       },
  //       (error) => {
  //         console.error('Error fetching sample phrases:', error);
  //       }
  //     );
  //   }
  // }
}
