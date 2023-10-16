import React from 'react';
import ThankYou from 'components/commercetools-ui/thank-you';

const ThankYouTastic = ({ data }) => {
  return <ThankYou title={data.title} text={data.text} image={data.image} />;
};

export default ThankYouTastic;
