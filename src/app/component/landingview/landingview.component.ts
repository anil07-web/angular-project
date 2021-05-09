import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LandingserviceService } from 'src/app/service/landingservice.service';

@Component({
  selector: 'app-landingview',
  templateUrl: './landingview.component.html',
  styleUrls: ['./landingview.component.css']
})
export class LandingviewComponent implements OnInit {
 
  constructor(private service:LandingserviceService) { }
  public users: any;
  public use:any;
  condition:boolean=false;
  // parentposts:any[]=[];
  ngOnInit(): void {
   this.getUsers();
  }

  getUsers(){
    this.service.getUser().subscribe(data=>{
      this.users=data;
    })
  }
  search(user: any)
  {
    this.condition=true;
    this.service.search(user.value).subscribe(data =>
    {
      console.log(data);
      this.use = data;
    });
  }

  // @Output()
  // public childEvent=new EventEmitter();

  // onClick(profile: any){
  //   this.parentposts.push(this.profile)
  // }

}
