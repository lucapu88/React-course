import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

const Component = () => {
  let element = useRoutes(routes);

  return element;
};

export default Component;
