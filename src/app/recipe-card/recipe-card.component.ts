import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
  providers: [ ApiClientService ]
})
export class RecipeCardComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
  }

}
