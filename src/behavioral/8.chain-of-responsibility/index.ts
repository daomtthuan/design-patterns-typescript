import { RequestHandlersChain } from './chains/RequestHandlersChain.js';
import { AuthHandler } from './handlers/AuthHandler.js';
import { RouteHandler } from './handlers/RouteHandler.js';
import { UserInfoHandler } from './handlers/UserInfoHandler.js';
import { Request } from './objects/Request.js';
import { RequestMethod } from './objects/RequestMethod.js';
import { User } from './objects/User.js';

const service = new RequestHandlersChain();
service.register(
  new AuthHandler([
    new User('user1', 'password1', 'User 1', 'user1@example.com'),
    new User('user2', 'password2', 'User 2', 'user2@example.com'),
    new User('user3', 'password3', 'User 3', 'user3@example.com'),
  ]),
);
service.register(new RouteHandler(new Map([[`${RequestMethod.GET} /user/info`, UserInfoHandler]])));

console.log();
// -----------------------

const authHeader = {
  username: 'user1',
  password: 'password1',
};

service.handle(new Request(RequestMethod.GET, '/user/info', authHeader));

console.log();
// -----------------------

service.handle(
  new Request(RequestMethod.GET, '/user/info', {
    ...authHeader,
    password: 'wrong-password',
  }),
);

console.log();
// -----------------------

service.handle(new Request(RequestMethod.GET, '/some/other/route', authHeader));
