import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisDetailsInterface } from '../interfaces/pais-detail.interface';
import { PaisInterface } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set('fields', 'name,region,population,capital,flags,alpha2Code');
  }

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<PaisInterface[]>{
    return this.http.get<PaisInterface[]>(`${this.apiUrl}/all`, {params: this.httpParams});
  }

  searchByName(termino: string):Observable<PaisInterface[]>{
    return this.http.get<PaisInterface[]>(`${this.apiUrl}/name/${termino}`, { params: this.httpParams});
  }

  searchByRegion(region: string):Observable<PaisInterface[]>{
    return this.http.get<PaisInterface[]>(`${this.apiUrl}/region/${region}`, { params: this.httpParams});
  }

  searchByAlpha(code: string): Observable<PaisDetailsInterface[]>{
    return this.http.get<PaisDetailsInterface[]>(`${this.apiUrl}/alpha?codes=${code}`);
  }
}
