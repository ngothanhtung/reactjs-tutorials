import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button } from 'reactstrap';

class GalleryItem extends Component {
	render() {
		const item = this.props.image;
		return (
			<Card>
				<CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
				<CardBody style={{ minHeight: 120 }}>
					<CardTitle>{item.title}</CardTitle>
					<CardSubtitle>{item.subTitle}</CardSubtitle>
					<CardText className="text-justify">{item.text}</CardText>
				</CardBody>
				<CardFooter>
					<Button size="sm" color="primary">Details</Button>
				</CardFooter>
			</Card>
		);
	}
}

export default GalleryItem;
