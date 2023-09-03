import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

export default function Banner() {
  const navigate = useNavigate();
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
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            navigate('/');
          }}
          sx={{ color: 'limegreen' }}
        >
          Home
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            navigate('/campaign');
          }}
          sx={{ color: 'limegreen' }}
        >
          Campaign Info
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            navigate('/news');
          }}
          sx={{ color: 'limegreen' }}
        >
          News
        </Button>
        <Button
          variant="outlined"
          color="success"
          href=" https://nlgreens.org/support.html"
          target="_blank"
          sx={{ color: 'limegreen' }}
        >
          Get Involved
        </Button>
        <Button
          variant="outlined"
          color="success"
          href="https://nlgreens.org/about.html"
          target="_blank"
          sx={{ color: 'limegreen' }}
        >
          About NL Greens
        </Button>
        <Button
          variant="outlined"
          color="success"
          href="https://voterregistration.ct.gov/OLVR/welcome.do"
          target="_blank"
          sx={{ color: 'limegreen' }}
        >
          CT Voter Registration
        </Button>
      </Stack>
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
