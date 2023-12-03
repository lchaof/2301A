import requery from './httpRequest'

export const querylogin = (data) => requery.post(requery.addurl('/sys/login'), data)
