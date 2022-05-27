import React, { Suspense } from 'react';
// import Comments from './components/Comments';
// import Photos from './components/Photos';
import Spinner from './components/Spinner';

const Photos = React.lazy(() => import('./components/Photos'));
const Comments = React.lazy(() => import('./components/Comments'));

const Component = () => {
  return (
    <div className="container ">
      <h2 className="text-center">Suspense</h2>
      <Suspense fallback={<Spinner></Spinner>}>
        <Photos></Photos>
        <Comments></Comments>
      </Suspense>
    </div>
  );
};

export default Component;
