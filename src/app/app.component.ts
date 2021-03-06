import { Component, OnInit } from '@angular/core';

import { Entry } from './entry';
import { EntryService } from './entry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entries: Entry[];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.getEntries();
  }

  trackByEntries(index: number, entry: Entry): string { return entry.targetGuid; }

  getEntries() {
    this.entryService.getEntries()
        .subscribe(entries => this.entries = entries);
  }

}
