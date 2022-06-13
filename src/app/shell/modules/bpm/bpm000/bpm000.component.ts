import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'bg-bpm000',
  templateUrl: './bpm000.component.html',
  styleUrls: ['./bpm000.component.scss']
})
export class Bpm000Component implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['../bpm001'], {relativeTo: this.route,});
    console.log(this.router);
  }

  // onClientClick(clientId:string) {
  //   this.router.navigate(['../bpm001'], {relativeTo: this.route,});
  //   console.log(this.router);
  // }
}
