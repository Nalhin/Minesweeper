import Game from '../views/Game';

export const routes = [
  { path: '/', name: 'game', component: Game },
  {
    path: '/score',
    name: 'scores',
    component: () => import('../views/Scores'),
  },
];
