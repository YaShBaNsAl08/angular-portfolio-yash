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
      title: 'Tiptap Notes',
      description:
        'A real-time notes application with Firebase integration, enabling secure data storage, instant updates and seamless user experience.',
      technologies: ['ReactJs', 'JavaScript','Firebase'],
      liveDemo: 'https://tiptapnote.web.app/',
      github: '',
      image: 'Tiptap.png',
    },
    {
      title: 'Text Tweakr',
      description:
        'Perform text transformations and analysis with a fast and user-friendly interface.',
      technologies: ['ReactJs', 'JavaScript'],
      liveDemo: 'https://drive.google.com/file/d/1Xrj8lZxqaVLCDNnts0Q6WcIb2_py6xLp/view?usp=drive_link',
      github: 'https://github.com/YaShBaNsAl08/text-tweakr',
      image: 'Text tweakr.png',
    },
    {
      title: 'To-Do List',
      description:
        'Track and manage daily tasks with a clean, responsive UI and real-time updates.',
      technologies: ['Angular', 'TypeScript'],
      liveDemo: 'https://yashbansal08.github.io/todo-list/',
      github: 'https://github.com/YaShBaNsAl08/todo-list',
      image: 'to-do.jpeg',
    },
    {
      title: 'Investment Calculator',
      description:
        'Calculate investment returns instantly with dynamic inputs and real-time results.',
      technologies: ['Angular', 'TypeScript'],
      liveDemo: 'https://yashbansal08.github.io/Investment-Calculator/',
      github: 'https://github.com/YaShBaNsAl08/Investment-Calculator',
      image: 'investment.png',
    },
    {
      title: 'Farewell Card',
      description:
        'Create personalized farewell messages with smooth animations and a modern design.',
      technologies: ['HTML', 'CSS'],
      liveDemo: 'https://yashbansal08.github.io/Farewell_MIT/',
      github: 'https://github.com/YaShBaNsAl08/Farewell_MIT',
      image: 'Farewell Card.png',
    },
    {
      title: 'Birthday Wish',
      description:
        'Interactive birthday experience with countdown timer, animations and music for a memorable feel.',
      technologies: ['HTML', 'CSS','JavaScript'],
      liveDemo: 'https://yashbansal08.github.io/Birthday-Template/',
      github: 'https://github.com/YaShBaNsAl08/Birthday-Template',
      image: 'birthday-wish.png',
    },
    {
      title: 'Weather App',
      description:
        'Get real-time weather updates with a clean, responsive and user-friendly interface.',
      technologies: ['HTML', 'CSS'],
      liveDemo: 'https://yashbansal08.github.io/Weather-App/',
      github: 'https://github.com/YaShBaNsAl08/Weather-App',
      image: 'Weather.png',
    },
    {
      title: 'Calculator',
      description:
        'Interactive calculator with smooth UI and real-time calculations for a seamless user experience.',
      technologies: ['HTML', 'CSS'],
      liveDemo: 'https://yashbansal08.github.io/CALCULATOR/',
      github: 'https://github.com/YaShBaNsAl08/CALCULATOR',
      image: 'Calculator.png',
    },
    {
      title: 'Store Helper Project',
      description:
        'Analyze customer data to generate insights that improve decision-making and boost business revenue.',
      technologies: ['Python', 'Pandas', 'Data Analysis'],
      liveDemo: '',
      github: 'https://github.com/YaShBaNsAl08/STORE-HELPER',
      image: 'Customer.png',
    },
    {
      title: 'Email Fraud Detection Tool',
      description:
        'Detect fraudulent emails in real-time using machine learning and intelligent pattern analysis.',
      technologies: ['Python', 'Naive Bayes', 'Tkinter'],
      liveDemo: '',
      github: 'https://github.com/YaShBaNsAl08/IBM_Intership',
      image: 'Email.jpg',
    },
  ];

}
