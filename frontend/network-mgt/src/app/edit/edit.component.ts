import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NetworkMgtService } from '../network-mgt.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  network = {
    name: '',
    brand: '',
    version: '',
    description: ''
  }
  constructor(private route: ActivatedRoute, private router: Router, private service: NetworkMgtService) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Access the data from queryParams
      console.log(params);
      this.id = params['id'];
      this.network.name = params['name'];
      this.network.brand = params['brand'];
      this.network.version = params['version'];
      this.network.description = params['description'];
      console.log(this.id);
      console.log(this.network);
      // Use the receivedData in Component B
    });
  }
  editsave() {
    this.service.update(this.id, this.network).subscribe(data => {
      console.log(data)
      alert('Successfully Updated');
      this.router.navigate(['/']);
    }, err => {
      console.log(err)
      alert('Error');
    })
  }
}
