import React from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";

const MetaDecorator = ({ title, description, imageUrl}) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description}/>
    <meta property="og:image" content={window.location.origin + imageUrl}/>
    <meta property="og:url" content={window.location.origin + window.location.pathname + window.location.search}/>
    <meta name="twitter:card" content="summary_large_image"/>
  </Helmet>
);

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MetaDecorator;