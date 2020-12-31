const routesConfig = [
  {
    title: '用户登录',
    path: '/login',
    component: 'Login',
  },
  {
    title: '用户信息',
    path: '/user',
    component: 'UserInfo',
  },
  {
    title: '员工考核',
    path: '/assessment',
    component: 'AssessmentList',
  },
  {
    title: '用户列表',
    path: '/users',
    component: 'UserList',
  },
  // {
  //   title: '目录1',
  //   path: '/com1',
  //   routes: [
  //     {
  //       title: '目录 1-1',
  //       path: '/com1/1',
  //       component: 'Some2',
  //     },
  //     {
  //       title: '目录 1-2',
  //       path: '/com1/2',
  //       component: 'Some2',
  //     },
  //   ],
  // },
];

export default routesConfig;
