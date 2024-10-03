import React, { useEffect, useState } from 'react';
import '../Game/Game.css';
import { Box } from '@chakra-ui/react';

export const Rabitrun = (prop) => {
  const [className, setClassName] = useState('');

  useEffect(() => {
    console.log('prop.styles:', prop.styles);
    setClassName(prop.styles == 'play' ? 'noplay' : 'play');
  }, [prop.styles]);

  return (
    <>
      <Box className={className} paddingRight={3}>
        <iframe
          src={prop.game}
          className='game'
          title="Iframe "
        ></iframe>

      </Box>
    </>
  );
};
