import { Controller } from './contract/Controller'

export class ErrorController implements Controller {
    index = async () => {
        return "404 Not Found"
    }
}
