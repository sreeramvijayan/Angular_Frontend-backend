import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.data = params;
    });
  }
  goback() {
    this.router.navigate(['/'])
  }
}
