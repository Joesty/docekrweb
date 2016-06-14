import ipAddComponent from './ipAdd/ipAdd';
import attachContainerComponent from './attachContainer/attachContainer';
import homeComponent from './home/home';
import heroComponent from './hero/hero';

export default app => {
  INCLUDE_ALL_MODULES([homeComponent, heroComponent, attachContainerComponent, ipAddComponent], app);
}
