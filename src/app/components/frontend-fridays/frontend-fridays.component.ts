import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-frontend-fridays',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-fridays.component.html',
  styleUrl: './frontend-fridays.component.css'
})
export class FrontendFridaysComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
    this.projects = this.projects.map(project => ({
      ...project,
      iframeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(project.liveDemo)
    }));
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
      image: '',
      iframeUrl: null as SafeResourceUrl | null
    },
    {
      title: 'Animated Circular Progress Dashboard',
      description:
        '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://yashbansal08.github.io/ACPD/',
      github: 'https://github.com/YaShBaNsAl08/ACPD',
      image: '',
      iframeUrl: null as SafeResourceUrl | null
    },
    {
      title: 'Animated Gradient Buttons',
      description:
        '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://yashbansal08.github.io/AGB/',
      github: 'https://github.com/YaShBaNsAl08/AGB',
      image: '',
      iframeUrl: null as SafeResourceUrl | null
    },
    {
      title: 'Animated Gradient Border Card',
      description:
        '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://yashbansal08.github.io/AGBC/',
      github: 'https://github.com/YaShBaNsAl08/AGBC',
      image: '',
      iframeUrl: null as SafeResourceUrl | null
    }

  ];

}
