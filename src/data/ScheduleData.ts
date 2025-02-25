import type { Schedule } from '../index';

export const allData: Schedule = [
  {
    title: 'Module 1 - What is p5.js?',
    activities: [
      {
        name: 'Getting Started',
        duration: '15',
        actType: 'coreskill',
        links: [
          {
            displayText: 'Slides',
            linkURL:
              'https://docs.google.com/presentation/d/1XaZrq8lAkKhfnbNfW9YKqq8oWrajOI6b9E23oRTKSJs/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'Intro to p5',
        duration: '15',
        actType: 'lecalonject',
        links: [
          {
            displayText: 'Lecture',
            linkURL:
              'https://docs.google.com/presentation/d/1UcXrg-FHzM8rlX63F-P0rA-jHUkEPagO34ykHUHBlo0/edit?usp=drive_link',
          },
          {
            displayText: 'Codealong',
            linkURL:
              'https://docs.google.com/document/d/1MS9azdXsl7VcRbZ5dyo5_YFXltoLGI8XLWKhJz_2j1Q/edit?usp=drive_link',
          },
          {
            displayText: 'Project: Draw that game',
            linkURL:
              'https://docs.google.com/document/d/1eBp-VIwElx4SnjaGv_D6SFiksLJ2amFL5yvY9tQyop8/edit',
          },
          {
            displayText: 'Optional Project: What would you draw?',
            linkURL:
              'https://docs.google.com/document/d/1AEN6kHpqm0Gz6S_AskQhn6c6eEmW-g0fSDmsG9uYMi4/edit',
          },
        ],
      },
      {
        name: 'Submit your project!',
        duration: '15',
        actType: 'survey',
        links: [{ displayText: 'Submit here', linkURL: 'https://google.com' }],
      },
    ],
  },
];
