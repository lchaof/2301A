import requery from './httpRequest'

/**登录接口 */
export const querylogin = (data) =>
  requery.post(requery.addurl('/sys/login'), data)

/**获取用户基本资料 */
export const queryprofile = () => requery.post(requery.addurl('/sys/profile'))

// 查询企业的部门列表
export const querydepartment = () => requery.get(requery.addurl('/company/department'))
