import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class Banner extends Component {
    render() {
        const { img, children } = this.props;
        return (
            <Carousel className="layer layer-banner">
                <Carousel.Item>
                    <img className="d-block w-100" alt="Banner Zone" src={img} />
                    {children || (
                        <Carousel.Caption>
                            <h3>介绍</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    )}
                </Carousel.Item>
            </Carousel>
        );
    }
}
