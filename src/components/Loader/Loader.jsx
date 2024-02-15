import React from 'react';
import { DNA } from 'react-loader-spinner';
import { LoadWrapper } from './Loader.styled'

export  const Loader = () => {
  return (
    <LoadWrapper>
      <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
    </LoadWrapper>
  );
};