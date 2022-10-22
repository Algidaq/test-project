import React from 'react';
import PhotoSelection from '../../../../components/PhotoSelection/PhotoSelection';
/**
 *
 * @param {Object} obj
 * @param {[File]} obj.imgSrcs
 * @param {()=>void} obj.onClick
 * @param {string} obj.name
 * @param {React.RefObject} obj.fileRef
 * @param {(files:[File])=>void} obj.onChange
 * @param {import('@mui/material').SxProps} obj.containerSx
 * @returns
 */
const PhotoSelectionInput = ({
  imgSrcs,
  onClick,
  name,
  fileRef,
  onChange,
  containerSx,
}) => {
  return (
    <>
      <PhotoSelection
        imgSrcs={imgSrcs}
        onClick={onClick}
        containerSx={containerSx}
      />
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileRef}
        accept="image/*"
        name="name"
        min="4"
        max="6"
        multiple
        onChange={(e) => {
          const _files = e.target.files;
          if (_files.length < 1) return;
          const files = [];
          for (let i = 0; i < _files.length; i++) {
            files.push(_files.item(i));
          }
          onChange(files);
        }}
      />
    </>
  );
};

export default PhotoSelectionInput;
