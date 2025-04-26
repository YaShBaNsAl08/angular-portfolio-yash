import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import * as AOS from 'aos';
@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  ngAfterViewInit(): void {
    AOS.refresh();
  }
  certificates = [
    {
      title: 'Azure-204 Bootcamp',
      platform: 'Microsoft',
      link: '',
      imageUrl: '',
    },
    {
      title: 'AWS WebStorm Hackathon',
      platform: 'AWS',
      link: '',
      imageUrl: '',
    },
    {
      title: 'Python Basic',
      platform: 'HackerRank',
      link: '',
      imageUrl: '',
    },
    {
      title: 'Angular Basic',
      platform: 'HackerRank',
      link: '',
      imageUrl: '',
    },
    {
      title: 'Trailhead Ranger Badge',
      platform: 'Salesforce',
      link: '',
      imageUrl: '',
    }
  ];
}
