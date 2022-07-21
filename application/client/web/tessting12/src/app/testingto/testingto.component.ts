import { Component, OnInit } from '@angular/core';
import { TestingtoService } from './testingto.service';

@Component({
  selector: 'app-testingto',
  templateUrl: './testingto.component.html',
  styleUrls: ['./testingto.component.scss'],
})

export class TestingtoComponent implements OnInit {
    public test = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        tst12: '',
    }

    constructor (
        private testingtoService: TestingtoService,
    ) { }

    ngOnInit() {
        this.test.created_by = sessionStorage.getItem('email') || ''; 
    }
}