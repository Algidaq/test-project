import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider/';
import { Stack, Box, Typography, Skeleton, Button } from '@mui/material';
import useProfilePageState from './profile-page-state/useProfilePage';
import ProfileService from './ProfileService/ProfileService';
import { logout } from '../../utils/utils';

const imgs = [
  'https://pbs.twimg.com/profile_images/1473403802963304450/A891_yu7_400x400.jpg',
  'https://pbs.twimg.com/profile_images/1473403802963304450/A891_yu7_400x400.jpg',
  'https://pbs.twimg.com/profile_images/1473403802963304450/A891_yu7_400x400.jpg',
];
const ProfilePage = () => {
  const { state } = useProfilePageState({ service: new ProfileService() });

  return (
    <Stack>
      <Box
        height="400px"
        position={'relative'}
        sx={{
          backgroundColor: '#F7FAFD',
          '& .rsis-image': { backgroundSize: 'cover !important' },
        }}
      >
        {state.user?.photos.length > 0 && (
          <SimpleImageSlider
            width="100%"
            height={400}
            images={state.user?.photos}
            showBullets={true}
            showNavs={true}
          />
        )}
        <Button
          variant="text"
          onClick={() => logout()}
          sx={{
            position: 'absolute',
            right: '16px',
            left: '16px',
            color: 'black',
            width: 'fit-content',
          }}
        >
          Logout
        </Button>
        <Box
          sx={{
            position: 'absolute',
            bottom: '-60px',
            left: '16px',
            width: '120px',
            height: '120px',
            border: '4px solid white',
            borderRadius: '50%',
            '& img': {
              width: '120px',
              height: '120px',
              borderRadius: '50%',
            },
          }}
        >
          <img
            src={
              'https://pbs.twimg.com/profile_images/1473403802963304450/A891_yu7_400x400.jpg'
            }
            alt="avatar"
          />
        </Box>
      </Box>
      {state.user ? (
        <>
          <Typography variant="h6" mt="56px" mx="16px" mb="0px">
            {state.user.firstName} {state.user.lastName}
          </Typography>
          <Typography variant="caption" mx="24px">
            Algidaq94@gmail.com
          </Typography>
        </>
      ) : (
        <>
          <Skeleton
            width="200px"
            height="32px"
            sx={{ marginTop: '64px', mx: '16px' }}
          />
          <Skeleton width="189px" height="24px" sx={{ mx: '24px' }} />
        </>
      )}
    </Stack>
  );
};

export default ProfilePage;
