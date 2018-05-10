import React from 'react';
import styled from 'styled-components';


  const Product = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.6s;
    width: 30%;
    height: 480px;
    background: gray;
    margin: 5px 5px 5px 5px;
    border-radius: 10px;
    cursor: pointer;
    transform-style: preserve-3d;
`;

  const Front = styled.div`
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 480px;
  `;

  const CardImage = styled.img`
    width: 100%;
    border-radius: 10px 10px 0 0;
  `;

  const Description = styled.div`
    padding: 2px 16px;
    background: white;
    border-radius: 0 0 10px 10px;
  `;

  const Price = styled.h3`
    color: green;
    font-weight: 800;
    font-size: 35px;
    text-shadow: 0px 0px 5px rgba(0,0,0,0.42);
  `;

  export default () => {
    return(
      <Product>
        <Front>
          <CardImage src="/static/nextjs.png" alt="Avatar" />
          <Description>
            <h3>Windows 10 Pro 64 <hr/> 7th Generation Intel® Xeon® processor E3-1270
              <hr/> Up to 64GB memory <hr/> Up to 1TB storage <hr/> NVIDIA® Quadro® P5000
              <Price>24.99€</Price></h3>
          </Description>
        </Front>
    </Product>

    );
  };
  
