import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

const App = () => {
  return (
    <>
      <Helmet>
        <title>COLLECTION</title>
      </Helmet>
      <Route component={Home} path={'/'} exact />
      {/* <Route component={AnimationHome} path='/animation' /> */}
      {/* <Route component={RegisterPage} path='/register' />
      <Route component={WritePage} path='/write' />
      <Route component={PostPage} path='/@:username/:postId' /> */}
    </>
  );
};

export default App;
