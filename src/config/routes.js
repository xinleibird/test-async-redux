const routesConfig = [
  {
    title: '用户登录',
    path: '/login',

    component: 'Login',
  },
  {
    title: '登录信息',
    path: '/loginInfo',
    allow: ['admin', 'ROLE_superAdmin'],
    component: 'LoginInfo',
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
  {
    title: '合同查询',
    path: '/contractList',

    component: 'ContractList',
  },
  {
    title: '部门信息',
    path: '/departmentList',

    component: 'DepartmentList',
  },
  {
    title: '职位信息',
    path: '/positionList',

    component: 'PositionList',
  },
  {
    title: '项目信息',
    path: '/projectList',

    component: 'ProjectList',
  },
  {
    title: '打卡信息',
    path: '/punchTheClockList',

    component: 'PunchTheClockList',
  },
  {
    title: '采购信息',
    path: '/purchaseList',

    component: 'PurchaseList',
  },
  {
    title: '离职员工信息',
    path: '/quitList',

    component: 'QuitList',
  },
  {
    title: '报废和维修信息',
    path: '/scrapAndRepairList',

    component: 'ScrapAndRepairList',
  },
  {
    title: '项目人员信息',
    path: '/staffAndProjectList',

    component: 'StaffAndProjectList',
  },
  {
    title: '人员信息',
    path: '/staffList',

    component: 'StaffList',
  },
];

export default routesConfig;
