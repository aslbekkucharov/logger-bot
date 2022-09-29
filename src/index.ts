import { sendLogMessage } from './lib'

const message = await sendLogMessage({ message: 'Ошибка в приложении' })
console.log(message)