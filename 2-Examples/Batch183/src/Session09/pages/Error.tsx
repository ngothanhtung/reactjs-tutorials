import { useRouteError } from 'react-router-dom';

export default function Error() {
  let error = useRouteError();
  console.warn(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Oops! Something went wrong!</div>;
}
