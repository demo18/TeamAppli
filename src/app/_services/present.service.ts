import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PresentService {

  constructor (private http: Http) {}




  getAll(){
    return this.http.get('http://vps374029.ovh.net/TeamAppli/api.php/present?transform=1')
                    .map((res:Response) => res.json());                 
  }
  getId(userId,eventId){
    return this.http.get('http://vps374029.ovh.net/TeamAppli/api.php/present?filter[]=userId,eq,'+userId+'&filter[]=eventId,eq,'+eventId+'&transform=1')
                    .map((res:Response) => res.json());
  }
  create(userId,eventId) {
    return this.http.post('http://vps374029.ovh.net/TeamAppli/api.php/present',{"userId":userId,"eventId":eventId}).map((res:Response) => res.json());
  }
  delete(Id){
    return this.http.delete('http://vps374029.ovh.net/TeamAppli/api.php/present/'+Id).map((res:Response) => res.json());
  }

  }
