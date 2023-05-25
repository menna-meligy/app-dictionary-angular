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
  }
}
