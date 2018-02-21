import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nova-campanha',
  templateUrl: './nova-campanha.component.html',
  styleUrls: ['./nova-campanha.component.css']
})

export class NovaCampanhaComponent implements OnInit {

	public items: string[] = [];
	public campanhaForm: FormGroup;


  constructor(private http: HttpClient ) { }

  ngOnInit() {
  	this.addItem();
  }

  addItem() {
  	this.items.push('');
  }

  doCreate() {
  	this.http.post('http://localhost:3000/campanha', {
  		campanha: this.campanha,
  		itens: this.items
  	}).subscribe(
  		res => {

  		}
  	);
  }
}
