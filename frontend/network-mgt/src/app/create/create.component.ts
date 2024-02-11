import { Component, OnInit } from '@angular/core';
import { NetworkMgtService } from '../network-mgt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  network = {
    name: '',
    brand: '',
    version: '',
    description: ''
  }
  constructor(private service: NetworkMgtService, private router: Router) {

  }
  ngOnInit() { }
  submit() {
    const data = {
      name: this.network.name,
      brand: this.network.brand,
      version: this.network.version,
      description: this.network.description
    }
    console.log(data)
    this.service.save(data).subscribe(res => {
      console.log(res);
      this.network.name = '';
      this.network.brand = '';
      this.network.version = '';
      this.network.description = '';
      alert('Success');
      this.router.navigate(['/'])
    }, err => {
      console.log(err);
      alert('error')
    })
  }
}
