import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const MyCard = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://www.kiemtien.com/wp-content/uploads/2015/11/nhung-dau-moc-dang-nho-trong-cuoc-doi-va-su-nghiep-cua-bill-gates.jpeg"
    />
    <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
      <img src="https://cdn.uploadvr.com/wp-content/uploads/2016/04/Bill-Gates-VR-Education.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default MyCard;
