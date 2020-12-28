const result = {
  data: {
    authenticated: true,
    authorities: [{ authority: 'ROLE_superAdmin' }],
    details: { remoteAddress: '192.168.110.182' },
    name: '12312',
    principal: {
      accountNonExpired: true,
      accountNonLocked: true,
      authorities: [{ $ref: '$.data.authorities[0]' }],
      credentialsNonExpired: true,
      enabled: true,
      username: '12312',
    },
  },
  errorCode: 200,
  errorMsg: '成功',
  success: true, // success false
  // 2007 不存在
  // 2003 密码错
};
