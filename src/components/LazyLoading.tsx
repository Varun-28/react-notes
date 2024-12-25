import './App.css'
import { Suspense, lazy } from 'react';

// Define a component that will be lazily loaded

const LazyComponent = lazy(() =>
    import('./StateHook').then((module) => ({ default: module.StateHook })) // Map named export to default
);

/* 
use the below code if the component is default export otherwise use the above way.
const LazyComponent = lazy(() => import('./List'));
*/

// Create your regular React component
const App = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      {/* Wrap the lazy-loaded component with Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Use the lazy-loaded component */}
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;

