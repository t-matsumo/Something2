import http from 'http'

import { HOSTNAME, PORT } from './settings/env'
import { routing } from './settings/routing'

import { Action } from './controllers/contract/Controller'

http.createServer((request, response) => {
    console.log('request ', request.url)

    const url = new URL(request.url!, `http://${request.headers.host}`);
    const pathArray = url.pathname.split('/')

    const routeName = pathArray[1] ?? 'error'
    const route = routing[routeName] ?? routing['error']

    var method: Action | undefined
    switch (request.method) {
        case 'GET':
            if (pathArray.length == 2) {
                method = route.index
            } else if (pathArray.length == 3) {
                method = route.show
            }
            break;
        case 'POST':
            method = route.create
            break;
        case 'PUT':
            method = route.update
            break;
        case 'DESTROY':
            method = route.destroy
            break;
    }

    const sendResponse200 = (contents: Object) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(contents));
    }
    const sendResponse404 = () => {
        response.writeHead(404, { 'Content-Type': 'application/octet-stream' });
        response.end("404 not found", 'utf-8');
    }

    if (method !== undefined) {
        method(url).then(sendResponse200).catch(sendResponse404)
    } else {
        sendResponse404()
    }
}).listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
})
