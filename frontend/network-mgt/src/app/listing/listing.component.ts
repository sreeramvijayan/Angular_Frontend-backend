import { Component, OnInit } from '@angular/core';
import { NetworkMgtService } from '../network-mgt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  data: any;
  length: any;
  constructor(private service: NetworkMgtService, private router: Router) {

  }
  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.service.getAll().subscribe(data => {
      console.log(data);
      this.data = data;
      this.length =  data.length
    }, err => {
      console.log(err);
    })
  }
  sendDetails(res: any) {
    console.log(res)
    this.router.navigate(['details'], { queryParams: res });
  }

  tocreate() {
    this.router.navigate(['create'])
  }
  deleteRecord(id: any) {
    this.service.delete(id).subscribe(_data => {
      alert('Successfully Deleted');
      this.getdata();
    }, err => {
      console.log(err)
      alert('Error');
    })
  }
  edit(res: any) {
    this.router.navigate(['edit'], { queryParams: res });
  }
}
