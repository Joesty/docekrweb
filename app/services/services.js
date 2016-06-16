import attachService from './attach/attach';
import usersService from './users/users';

export default app => {
  INCLUDE_ALL_MODULES([usersService, attachService], app);
}
