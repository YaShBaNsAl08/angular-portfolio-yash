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
      title: 'Python Basic',
      platform: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/e86282a61517',
      imageUrl: 'certificates/Python(Basic).jpg',
    },
    {
      title: 'Angular Basic',
      platform: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/bee58557318a',
      imageUrl: 'certificates/Angular(Basic).jpg',
    },
    {
      title: 'Azure-204 Bootcamp',
      platform: 'CloudThat',
      link: 'https://drive.google.com/file/d/15uf_kFnFmJEaXp3-qRrv_hP4VH5dzsRH/view?usp=drive_link',
      imageUrl: 'certificates/AZ-204.jpg',
    },
    {
      title: 'Azure-400 Bootcamp',
      platform: 'CloudThat',
      link: 'https://drive.google.com/file/d/1683wcgCrRMX2nxwEl5ns-BsWBPU2lzge/view?usp=drive_link',
      imageUrl: 'certificates/AZ-400.jpg',
    },
    {
      title: 'Bootcamp-AWS',
      platform: 'CloudThat',
      link: 'https://drive.google.com/file/d/1683wcgCrRMX2nxwEl5ns-BsWBPU2lzge/view?usp=drive_link',
      imageUrl: 'certificates/AWS-Bootcamp.jpg',
    },
    // {
    //   title: 'Trailhead Ranger Badge',
    //   platform: 'Salesforce',
    //   link: '',
    //   imageUrl: '',
    // }
  ];
}
