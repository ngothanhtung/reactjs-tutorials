import React from "react";
import { firebaseHelper as firebase } from "../../config/constants";

import { Button, ButtonGroup } from 'reactstrap';

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "firebaseAppToken";

export default class Storage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      loading: true
    }
  }
  componentWillMount() {
    // Get a reference to the storage service, which is used to create references in your storage bucket
    var storage = firebase.storage();

    // Create a storage reference from our storage service
    var storageRef = storage.ref('images');
    // Create a reference to the file we want to download
    var imageRef = storageRef.child('cau-thuan-phuoc.jpg');

    const component = this;
    // Get the download URL
    imageRef.getDownloadURL().then(function (url) {
      // Insert url into an <img> tag to "download"      
      component.setState({ imageUrl: url });
      component.setState({ loading: false });
    }).catch(function (error) {
      console.log(error);
    });
  }

  handleFile = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();

    var file = evt.target.files[0];
    var metadata = {
      'contentType': file.type
    };

    // Push to child path.
    // [START oncomplete]
    // Get a reference to the storage service, which is used to create references in your storage bucket
    var storage = firebase.storage();

    // Create a storage reference from our storage service
    var storageRef = storage.ref('images');
    const component = this;
    storageRef.child(file.name).put(file, metadata).then((snapshot) => {
      console.log('Uploaded', snapshot.totalBytes, 'bytes.');
      console.log(snapshot.metadata);
      var url = snapshot.downloadURL;
      console.log('File available at', url);
      // [START_EXCLUDE]
      component.setState({ imageUrl: url });
      component.setState({ loading: false });
      // [END_EXCLUDE]
    }).catch((error) => {
      // [START onfailure]
      console.error('Upload failed:', error);
      // [END onfailure]
    });
    // [END oncomplete]

    console.log(file);
  }

  render() {
    if (this.state.loading === false) {
      return (
        <div style={{ "marginBottom": "30px" }}>
          <h6>Firebase - Storage Examples</h6>
          <div>
            <div style={{ "marginBottom": "30px" }}>
              <input type="file" id="file" name="file" onChange={this.handleFile} />
            </div>
            <h6>This is image from storage</h6>
            <img src={this.state.imageUrl} style={{ width: '100%' }} />
          </div>
        </div>
      );
    } else {
      return (
        <p>Loading ...</p>
      );
    }
  }
}