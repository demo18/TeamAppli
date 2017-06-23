import { Injectable } from '@angular/core';
import { User } from './../users/user';
import { Http, Response, URLSearchParams,Headers,RequestOptions,RequestMethod,Request} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor (private http: Http) {}


  getAll(){
    return this.http.get('http://vps374029.ovh.net/TeamAppli/api.php/users?transform=1')
                    .map((res:Response) => res.json());                 
  }
  getByFbId(fbId){
    return this.http.get('http://vps374029.ovh.net/TeamAppli/api.php/users?filter=fbID,eq,'+fbId+'&transform=1')
                    .map((res:Response) => res.json());
  }
  getById(Id){
    return this.http.get('http://vps374029.ovh.net/TeamAppli/api.php/users/'+Id)
                    .map((res:Response) => res.json());
  }
  create(user: User) {
    return this.http.post('http://vps374029.ovh.net/TeamAppli/api.php/users',user).map((res:Response) => res.json());
  }
  update(Id,user: User){
      return this.http.put('http://vps374029.ovh.net/TeamAppli/api.php/users/'+Id,user).map((res:Response) => res.json());
  }
  delete(Id){
    return this.http.delete('http://vps374029.ovh.net/TeamAppli/api.php/users/'+Id).map((res:Response) => res.json());
  }

  }
