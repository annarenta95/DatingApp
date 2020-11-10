import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_services/user.service';
import {User} from '../../_models/user';
import {AlertifyService} from '../../_services/alertify.service';
import {ActivatedRoute} from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
  private userService: UserService,
   private alertify:AlertifyService, 
   private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.data.subscribe(data => {
       this.user = data['user'];
    });
     this.galleryOptions=][
       {
          
       }
     ]

  }
  //members/4
  //+ converts to int
  // loadUser(){
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user:User) =>{
  //        this.user=user;    
  //        }, error=>{
  //          this.alertify.error(error);
  //        });
  // }

}