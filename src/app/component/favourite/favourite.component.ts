import { Component, OnInit } from '@angular/core';
import { LandingserviceService } from 'src/app/service/landingservice.service';
import { userservice } from 'src/app/service/userservice';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  favourites:any[] =[]
  removearray:userservice[]=[];
  constructor(private service:LandingserviceService) { }

  ngOnInit(): void {
    this.favouritedisplay();
  }
  public favouritedisplay() {
    this.favourites = this.service.favourite;
   
  }
  
  public count:number=0;


  public removeUser(id1:any){
    this.favourites.filter((res:any)=>{ //searching id in favourites array
      if(id1==res.id){
        this.favourites.splice(this.count,1);//splice method is used to remove the element
      }this.count=this.count+1;
    })
    this.count=0;
}
}
