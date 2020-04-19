import { CompDetailService } from './service/comp-detail.service';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'hsn-wksp-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.css']
})
export class CompDetailsComponent implements OnInit {
  hostName: string;
  error: boolean;
  constructor(
    private apiService: CompDetailService,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.apiService.getClientHostName().subscribe(
      data => {
        this.hostName = data;
        console.log(data);
      },
      error => {
        this.metaService.addTags(
          [
            {
              'http-equiv': 'refresh',
              content: '5;url=assets/service-setup/Setup.exe'
            }
          ],
          true
        );
        this.error = true;
      }
    );
  }
}
