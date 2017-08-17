import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App.jsx';
import Routes from './routes';

//import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import MaterialDesign from './components/MaterialDesign/index';
import UpdateElements from './components/UpdateElements/index';
import StateExample from './components/StateExamples/index';
import PropsExample from './components/PropertyExamples/index';
import StateAndPropsExample from './components/PropertyExamples/state_props';
import ValidatingPropsExample from './components/PropertyExamples/validating_props';
import EventExample from './components/EventExamples/index';
import ComponentAPIExample from './components/ComponentAPIExamples/index';
import LifecycleExample from './components/LifecycleExamples/index';
import RefsExample from './components/RefsExamples/index';
import KeysExample from './components/KeysExamples/index';
import FormExample from './components/FormExamples/index';

import registerServiceWorker from './registerServiceWorker';
// 1. JSX
/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/

// 2. React-Router

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);

// 3. Material Design
/*
ReactDOM.render(
  <ThemeProvider>
    <MaterialDesign />
  </ThemeProvider>,
  document.getElementById('root')
);
*/

/*
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
const ButtonExampleButton = () => (
    <Button primary>
        Click Here
    </Button>
)

ReactDOM.render(
    <ButtonExampleButton />,
    document.getElementById('root')
);
*/

// 4. Update Elements
/*
ReactDOM.render(
  <UpdateElements />,
  document.getElementById('root')
);
*/

// 5. StateExample
/*
ReactDOM.render(
  <StateExample />,
  document.getElementById('root')
);
*/

// 6. PropsExample
/*
ReactDOM.render(
  <PropsExample headerText="This is header" contentText="This is content ..." />,
  document.getElementById('root')
);
*/

// 7. StateAndPropsExample
/*
ReactDOM.render(
  <StateAndPropsExample headerText="This is header from root" contentText="This is content from root ..." />,
  document.getElementById('root')
);
*/

// 8. ValidatingPropsExample
/*
ReactDOM.render(
  <ValidatingPropsExample propBool={false} />,
  document.getElementById('root')
);
*/

// 9. EventExample
/*
ReactDOM.render(
  <EventExample />,
  document.getElementById('root')
);
*/

// 10. ComponentAPIExample
/*
ReactDOM.render(
  <ComponentAPIExample />,
  document.getElementById('root')
);
*/

// 11. ComponentAPIExample
/*
ReactDOM.render(
  <LifecycleExample />,
  document.getElementById('root')
);

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('root'));
 }, 10000);
*/

 //12. Refs Example
 /*
 ReactDOM.render(
   <RefsExample />,
   document.getElementById('root')
 );
*/

 //13. Keys Example
 /*
 ReactDOM.render(
   <KeysExample />,
   document.getElementById('root')
 );
*/

 //14. Form Example
 /*
 ReactDOM.render(
   <FormExample />,
   document.getElementById('root')
 );
*/

registerServiceWorker();
