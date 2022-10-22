import React from 'react';
import { Box, ButtonBase } from '@mui/material';
import { Camera } from '@mui/icons-material';
/**
 *
 * @param {Object} obj
 * @param {[File]} obj.imgSrcs
 * @param {()=>void} obj.onClick
 * @param {import('@mui/material').SxProps} obj.containerSx
 * @returns
 */
const PhotoSelection = ({ imgSrcs, onClick, containerSx }) => {
  const defaultSx = {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    display: 'inline-block',
  };
  return (
    <Box
      sx={{
        overflowX: 'scroll',
        width: '100%',
        height: '120px',
        display: 'flex',
        ...containerSx,
      }}
    >
      {imgSrcs.map((file, index) => (
        <Box
          key={index}
          sx={{
            ...defaultSx,
            marginRight: '12px',
            '& img': { ...defaultSx, objectFit: 'cover', marginRight: '12px' },
          }}
        >
          <img src={URL.createObjectURL(file)} alt={`userpic-${index + 1}`} />
        </Box>
      ))}
      <ButtonBase
        onClick={onClick}
        TouchRippleProps={{ color: '#F7FAFD' }}
        sx={{
          ...defaultSx,
          minWidth: '100px',
          display: 'inline-block',
          backgroundColor: (theme) => theme.palette.primary[50],
        }}
      >
        <Camera color="primary" />
      </ButtonBase>
    </Box>
  );
};
export default PhotoSelection;
