import ky from 'ky'

const api = ky.create({ prefixUrl: 'http://localhost:1337/api' })

export { api }
