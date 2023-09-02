import { Box, Button, ButtonGroup, Typography } from '@mui/material';

export default function Banner() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '30vh',
        backgroundColor: 'darkslateblue',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'limegreen',
          textTransform: 'uppercase',
          textShadow: '2px 2px 2px black',
          paddingTop: '10px',
        }}
      >
        Keith Kimball for Board of Ed
      </Typography>
      <ButtonGroup
        variant="text"
        size="large"
        aria-label="text button group"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10px',
        }}
      >
        <Button sx={{ color: 'limegreen' }}>Home</Button>
        <Button sx={{ color: 'limegreen' }}>Bio</Button>
        <Button sx={{ color: 'limegreen' }}>News</Button>
        <Button sx={{ color: 'limegreen' }}>Get Involved</Button>
        <Button sx={{ color: 'limegreen' }}>About NL Greens</Button>
        <Button sx={{ color: 'limegreen' }}>CT Voter Registration</Button>
      </ButtonGroup>

      <Typography
        variant="h3"
        sx={{
          color: 'limegreen',
          textTransform: 'uppercase',
          textShadow: '2px 2px 2px black',
          paddingTop: '10px',
          fontStyle: 'italic',
        }}
      >
        Vote for me on November 7th!
      </Typography>
    </Box>
  );
}
