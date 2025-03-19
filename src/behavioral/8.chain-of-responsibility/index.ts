import { RequestHandlersChain } from './chains/RequestHandlersChain.js';
import { AuthHandler } from './handlers/AuthHandler.js';
import { RouteHandler } from './handlers/RouteHandler.js';
import { UserInfoHandler } from './handlers/UserInfoHandler.js';
import { Request } from './objects/Request.js';
import { User } from './objects/User.js';

const service = new RequestHandlersChain();
service.register(
  new AuthHandler([
    new User('user1', 'password1', 'User 1', 'user1@example.com', 'male', new Date('2000-01-01')),
    new User('user2', 'password2', 'User 2', 'user2@example.com', 'female', new Date('1999-01-01')),
    new User('user3', 'password3', 'User 3', 'user3@example.com', 'male', new Date('1995-01-01')),
  ]),
);
service.register(
  new RouteHandler([
    // Get user info
    ['/user/info', UserInfoHandler],
  ]),
);

console.log();
// -----------------------

const getUserInfoRequest = new Request('/user/info', {
  username: 'user1',
  password: 'password1',
});
service.handle(getUserInfoRequest);

console.log();
// -----------------------

const getUserInfoRequestWithWrongPassword = new Request('/user/info', {
  username: 'user1',
  password: 'wrong-password',
});
service.handle(getUserInfoRequestWithWrongPassword);

console.log();
// -----------------------

const notFoundRouteRequest = new Request('/some/other/route', {
  username: 'user1',
  password: 'password1',
});
service.handle(notFoundRouteRequest);
