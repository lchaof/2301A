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

// 查询申请列表
export const queryApprovals = (data)=>requery.put(requery.addurl(`/user/process/instance/${data.page}/${data.size}`))
// 获取所有权限点
export const queryPermission = ()=>requery.get(requery.addurl('/sys/permission'))
// 获取员工列表
export const queryUser = ()=>requery.get(requery.addurl('/sys/user'))
// 获取员工基本信息
export const queryUserId = (id)=>requery.get(requery.addurl(`/sys/user/${id}`))
// 给员工分配角色
export const queryAllotUser = (data)=>requery.get(requery.addurl('/sys/user/assignRoles'),data)

