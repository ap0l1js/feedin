import { PostProperties } from '../components/post';

export const posts: PostProperties[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ap0l1js.png',
      name: 'Apolinario Manuel',
      role: 'CTO @TransferEasy',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz recentemente. O nome do projeto é FeedIn 🚀',
      },
      { type: 'link', content: 'apoli.dev/feedin' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/apolinario-manuel.png',
      name: 'Rafael Gomes',
      role: 'Content Creator @TransferEasy',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz recentemente. O nome do projeto é FeedIn 🚀',
      },
      { type: 'link', content: 'apoli.dev/feedin' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];
