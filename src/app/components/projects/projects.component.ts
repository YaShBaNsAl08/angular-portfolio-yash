import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'To-Do List',
      description:
        'A web platform built with Angular and TypeScript for testing and evaluating applications efficiently.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      liveDemo: '', // Add live demo link if available
      github: 'https://github.com/your-repo/quicktest-platform',
      image: 'to-do.jpeg', // Add a relevant screenshot
    },
    {
      title: 'Text Tweakr',
      description:
        'A data analysis tool that provides customer insights to help businesses improve decision-making and boost revenue.',
      technologies: ['Python', 'Pandas', 'Data Analysis'],
      liveDemo: '',
      github: 'https://github.com/your-repo/store-helper',
      image: 'Text tweakr.png',
    },
    {
      title: 'Farewell Card',
      description:
        'A data analysis tool that provides customer insights to help businesses improve decision-making and boost revenue.',
      technologies: ['Python', 'Pandas', 'Data Analysis'],
      liveDemo: '',
      github: 'https://github.com/your-repo/store-helper',
      image: 'Farewell Card.png',
    },
    {
      title: 'Calculator',
      description:
        'A data analysis tool that provides customer insights to help businesses improve decision-making and boost revenue.',
      technologies: ['Python', 'Pandas', 'Data Analysis'],
      liveDemo: '',
      github: 'https://github.com/your-repo/store-helper',
      image: 'Calculator.png',
    },
    {
      title: 'Store Helper Project',
      description:
        'A data analysis tool that provides customer insights to help businesses improve decision-making and boost revenue.',
      technologies: ['Python', 'Pandas', 'Data Analysis'],
      liveDemo: '',
      github: 'https://github.com/your-repo/store-helper',
      image: 'Customer.png',
    },
    {
      title: 'Email Fraud Detection Tool',
      description:
        'A desktop application built with Python to detect fraudulent emails in real time using machine learning.',
      technologies: ['Python', 'Naive Bayes', 'Tkinter'],
      liveDemo: '',
      github: 'https://github.com/your-repo/email-fraud-detection',
      image: 'Email.jpg',
    },
  ];

}
