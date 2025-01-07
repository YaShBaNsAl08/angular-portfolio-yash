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
        'The app is designed to simplify task management by allowing users to easily track, update, and organize their daily tasks.',
      technologies: ['Angular', 'TypeScript'],
      liveDemo: 'https://yashbansal08.github.io/todo-list/',
      github: 'https://github.com/YaShBaNsAl08/todo-list',
      image: 'to-do.jpeg',
    },
    {
      title: 'Investment Calculator',
      description:
        'The app is designed to calculate the investment by allowing user to easily get know about their investments and returns.',
      technologies: ['Angular', 'TypeScript'],
      liveDemo: 'https://yashbansal08.github.io/Investment-Calculator/',
      github: 'https://github.com/YaShBaNsAl08/Investment-Calculator',
      image: 'investment.png',
    },
    {
      title: 'Text Tweakr',
      description:
        'TextTweakr is a web application which provides a suite of text manipulation features, making it easy to transform and analyze text efficiently.',
      technologies: ['ReactJs', 'JavaScript'],
      liveDemo: 'https://drive.google.com/file/d/1Xrj8lZxqaVLCDNnts0Q6WcIb2_py6xLp/view?usp=drive_link',
      github: 'https://github.com/YaShBaNsAl08/text-tweakr',
      image: 'Text tweakr.png',
    },
    {
      title: 'Farewell Card',
      description:
        'The Farewell Card Website offers creative, heartfelt farewells with sleek design and smooth animations.',
      technologies: ['HTML', 'CSS'],
      liveDemo: 'https://yashbansal08.github.io/Farewell_MIT/',
      github: 'https://github.com/YaShBaNsAl08/Farewell_MIT',
      image: 'Farewell Card.png',
    },
    {
      title: 'Birthday Wish',
      description:
        'A personalized birthday wish built using HTML, CSS, JavaScript, featuring a coundown timer, interactive carousel, festive animation, and background music to create a memorable and engaging experience.',
      technologies: ['HTML', 'CSS','JavaScript'],
      liveDemo: 'https://yashbansal08.github.io/Birthday-Template/',
      github: 'https://github.com/YaShBaNsAl08/Birthday-Template',
      image: 'birthday-wish.png',
    },
    {
      title: 'Weather App',
      description:
        'This weather application, developed using HTML, CSS, and JavaScript, offers a modern and user-friendly interface for accessing real-time weather information.',
      technologies: ['HTML', 'CSS'],
      liveDemo: 'https://yashbansal08.github.io/Weather-App/',
      github: 'https://github.com/YaShBaNsAl08/Weather-App',
      image: 'Weather.png',
    },
    {
      title: 'Calculator',
      description:
        'Explore our interactive calculator, built with HTML5, CSS3, and JavaScript, offering sleek design and smooth functionality.',
      technologies: ['HTML', 'CSS'],
      liveDemo: 'https://yashbansal08.github.io/CALCULATOR/',
      github: 'https://github.com/YaShBaNsAl08/CALCULATOR',
      image: 'Calculator.png',
    },
    {
      title: 'Store Helper Project',
      description:
        'A data analysis tool that provides customer insights to help businesses improve decision-making and boost revenue.',
      technologies: ['Python', 'Pandas', 'Data Analysis'],
      liveDemo: '',
      github: 'https://github.com/YaShBaNsAl08/STORE-HELPER',
      image: 'Customer.png',
    },
    {
      title: 'Email Fraud Detection Tool',
      description:
        'A desktop application built with Python to detect fraudulent emails in real time using machine learning.',
      technologies: ['Python', 'Naive Bayes', 'Tkinter'],
      liveDemo: '',
      github: 'https://github.com/YaShBaNsAl08/IBM_Intership',
      image: 'Email.jpg',
    },
  ];

}
