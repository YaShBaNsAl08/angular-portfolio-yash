import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frontend-fridays',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-fridays.component.html',
  styleUrl: './frontend-fridays.component.css'
})
export class FrontendFridaysComponent implements OnInit {

  constructor() {
  
  }
  ngOnInit(): void {

  }
  projects = [
    {
      title: 'Blurred Background Loader',
      description:
        '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://yashbansal08.github.io/ABBL/',
      github: 'https://github.com/YaShBaNsAl08/ABBL',
      image: 'FF/ABBL.png',     
    },
    {
      title: 'Animated Circular Progress Dashboard',
      description:
        '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://yashbansal08.github.io/ACPD/',
      github: 'https://github.com/YaShBaNsAl08/ACPD',
      image: 'FF/ACPD.png',      
    },
    {
      title: 'Scroll Progress Indicator',
      description:
        '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://yashbansal08.github.io/SPI/',
      github: 'https://github.com/YaShBaNsAl08/SPI',
      image: 'FF/SPI.png',      
    },  
    {
      title: 'Animated Gradient Buttons',
      description:
        '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://yashbansal08.github.io/AGB/',
      github: 'https://github.com/YaShBaNsAl08/AGB',
      image: 'FF/AGB.png',      
    },
    {
      title: 'Animated Gradient Border Card',
      description:
        '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://yashbansal08.github.io/AGBC/',
      github: 'https://github.com/YaShBaNsAl08/AGBC',
      image: 'FF/AGBC.png',      
    },
    {
      title: 'Glass Weather Widget',
      description:
        '',
      technologies: ['HTML', 'CSS'],
      liveDemo: 'https://yashbansal08.github.io/GWW/',
      github: 'https://github.com/YaShBaNsAl08/GWW',
      image: 'FF/GWW.png',      
    },
    {
      title: 'Liquid Fill Loader',
      description:
        '',
      technologies: ['HTML', 'CSS'],
      liveDemo: 'https://yashbansal08.github.io/LFL/',
      github: 'https://github.com/YaShBaNsAl08/LFL',
      image: 'FF/LFL.png',      
    },
    {
      title: 'Pricing-Cards',
      description:
        '',
      technologies: ['HTML', 'CSS'],
      liveDemo: 'https://yashbansal08.github.io/Pricing-Cards/',
      github: 'https://github.com/YaShBaNsAl08/Pricing-Cards',
      image: 'FF/Pricing-Cards.png',      
    },  

  ];

}
