import { Component, OnInit } from '@angular/core';
import { PersonagensService } from './personagens.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

  personagens: Array<any> = []

  constructor(private service: PersonagensService) { }


  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.service.getList().subscribe(result =>{
      this.personagens = result.results;

    })
  }

}
