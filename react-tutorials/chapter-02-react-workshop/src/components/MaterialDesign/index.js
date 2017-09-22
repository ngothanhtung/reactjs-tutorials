import React, {
  Component
} from 'react';
import './style.css';
import MyButton from './MyButton';
import MyCard from './MyCard';
import MyList from './MyList';
import MyTable from './MyTable';
import MySimpleDialog from './MySimpleDialog';
import MyModalDialog from './MyModalDialog';

// Touch events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class MaterialDesign extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({
        users
      }));
  }

  render() {
    return (
      <div style={{display: 'block'}}>
          <MyButton />
          <MyList />
          <MyTable />
          <MyCard />
          <MySimpleDialog />
          <MyModalDialog />
      </div>
    );
  }
}
export default MaterialDesign;
