import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import { firebaseHelper as firebase } from "../../config/constants";
import { client } from '../../client';
const url = '/addImage';

class GalleryManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div style={{ "marginBottom": "30px" }}>
        <h1>Gallery Management</h1>
        <div style={{ "marginBottom": "30px" }}>
          <input type="file" id="file" name="file" />
        </div>
        <Button color="primary" onClick={() => {
          var myDiv = document.getElementById('file');
          ReactDOM.findDOMNode(myDiv);
          var file = myDiv.files[0];

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

            console.log('File available at', snapshot.downloadURL);

            var data = { title: 'Sài gòn', subTitle: 'Thành phố Hồ Chí Minh', text: '', imageUrl: snapshot.downloadURL };
            client.post(url, data).then(res => {
              console.log(res);
              this.setState({ loading: false });
            }).catch(error => {
              console.log(error);
            });


          }).catch((error) => {
            // [START onfailure]
            console.error('Upload failed:', error);
            // [END onfailure]
          });
          // [END oncomplete]

          console.log(file);



        }}>Create data</Button>
      </div>);

  }
}

export default GalleryManagement;