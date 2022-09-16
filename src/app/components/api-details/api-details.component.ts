import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-api-details',
  templateUrl: './api-details.component.html',
  styleUrls: ['./api-details.component.css'],
})
export class ApiDetailsComponent implements OnInit {
  details: any = [];
  name: string = '';
  charactersFilter: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params['name'];
    this.apiService.getCharacterByName(this.name).subscribe(result => {
      this.details = result;
      this.charactersFilter = result;
    });
  }

  filterCharacters(charactersFilterName: string) {
    this.charactersFilter = this.details.filter(
      (person: any) =>
        person.name
          .toLocaleLowerCase()
          .includes(charactersFilterName.toLocaleLowerCase()) ||
        person.status
          .toLocaleLowerCase()
          .includes(charactersFilterName.toLocaleLowerCase()) ||
        person.species
          .toLocaleLowerCase()
          .includes(charactersFilterName.toLocaleLowerCase()) ||
        person.type
          .toLocaleLowerCase()
          .includes(charactersFilterName.toLocaleLowerCase()) ||
        person.gender
          .toLocaleLowerCase()
          .includes(charactersFilterName.toLocaleLowerCase())
    );
  }

}
