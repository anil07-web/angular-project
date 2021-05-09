import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LandingserviceService } from 'src/app/service/landingservice.service';
import { userservice } from 'src/app/service/userservice';

@Component({
  selector: 'app-landingview',
  templateUrl: './landingview.component.html',
  styleUrls: ['./landingview.component.css']
})
export class LandingviewComponent implements OnInit {

  constructor(private service: LandingserviceService) { }
  public users: any;
  public use: any;
  favourite:userservice[]=[];
  condition: boolean = false;
 
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() { //getting all the users
    this.service.getUser().subscribe(data => {
      this.users = data;
    })
  }
  search(user: any) { //searching the user based on firstname
    this.condition = true;
    this.service.search(user.value).subscribe(data => {
      this.use = data;
    });
  }

  public onclick(id: any) { //adding to favourites from main page
    this.users.filter((res: { id: any; }) => {// searching the id in the  users data
      if (res.id == id) { 
        this.service.favourite.push(res);//pushing into the  favourite array
      }
    })
    
  }


}





