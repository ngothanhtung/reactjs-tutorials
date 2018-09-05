import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import PropertyExamples from './components/PropertyExamples';
import ValidatingPropsExample from './components/PropertyExamples/validating_props';
import StateExample from './components/StateExamples';
import StateAndPropsExample from './components/PropertyExamples/state_props';
import UpdateElements from './components/UpdateElements';
import EventExample from './components/EventExamples';
import ComponentAPIExample from './components/ComponentAPIExamples';
import LifecycleExample from './components/LifecycleExamples';
import RefsExample from './components/RefsExamples';
import ListsAndKeysExamples from './components/ListsAndKeysExamples';
import FormExample from './components/FormExamples';
import TranslationExamples from './components/TranslationExamples';
import AxiosExamples from './components/AxiosExamples';
import CallExpressjsAPIExamples from './components/AxiosExamples/CallExpressjsAPIExamples';
import RouterExamples from './components/RouterExamples';
import ChatExamples from './components/ChatExamples';
import AudioPlayerExamples from './components/AudioPlayerExamples';

// import MaterialDesign from './components/MaterialDesign';

let component = <CallExpressjsAPIExamples />;
ReactDOM.render(component, document.getElementById('root'));

registerServiceWorker();
