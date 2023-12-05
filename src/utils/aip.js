import requery from './httpRequest'

/**登录接口 */
export const querylogin = (data) =>
  requery.post(requery.addurl('/sys/login'), data)

/**获取用户基本资料 */
export const queryprofile = () => requery.post(requery.addurl('/sys/profile'))

// 查询企业的部门列表
export const querydepartment = () => requery.get(requery.addurl('/company/department'))

// 添加部门
export const addframework=(data)=>requery.post(requery.addurl('/company/department'),data)

// 根据ID修改部门详情
export const bjframework=(id)=>requery.get(requery.addurl(`/company/department/${id}`))

// 修改部门详情
export const querybjframework=(data)=>requery.put(requery.addurl(`/company/department/${data.id}`),data)
// 根据ID删除部门  DELETE
export const queryDelframework =(id)=>requery.delete(requery.addurl(`/company/department/${id}`))
