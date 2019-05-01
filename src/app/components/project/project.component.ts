import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public formControl : FormControl;
  model = new Project();

  constructor(public sidenavService: SidenavService) {
    this.formControl = new FormControl();
    this.model.id = 3;
    this.model.name = 'Foobar';
  }

  public save() {
  }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
