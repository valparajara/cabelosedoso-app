import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-campanha',
  templateUrl: './lista-campanha.component.html',
  styleUrls: ['./lista-campanha.component.css']
})
export class ListaCampanhaComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  	this.http.get('http://localhost:3000/campanha').subscribe(
	  	res => {
	  	console.log(res);
	  	}
  );
  }

}
