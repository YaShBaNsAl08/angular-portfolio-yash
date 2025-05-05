import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { trigger,style,transition,animate } from '@angular/animations';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,RouterLink,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations:[trigger('fadeIn',[transition(':enter',[style({opacity:0}),animate('1s ease-in', style({opacity:1}))])])]
})
export class HomeComponent implements OnInit{
text='';
f_text='A passionate Front-end Web Developer';
i=0;
constructor(){
  this.typetext();
}
  ngOnInit(): void {
    AOS.init();
  }
typetext(){
  if(this.i<this.f_text.length){
    setTimeout(()=>{
    this.text+=this.f_text[this.i];
    this.i++;
    this.typetext();
  },100);
}
}
}
