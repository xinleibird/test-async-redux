const routes = [
  {
    title: '目录1',
    path: '/com1',
    routes: [
      {
        title: '目录 1-1',
        path: '/com1/1',
        component: 'Some2',
      },
      {
        title: '目录 1-2',
        path: '/com1/2',
        component: 'Some2',
      },
    ],
  },
  {
    title: '目录2',
    path: '/com2',
  },
];

export default routes;
