import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button';

export default function MediaControlCard({elem}) {
  const theme = useTheme();

  return (
    <>
    <Card style={{width:"415px",marginTop:"50px", margin:'auto'}}sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          {elem.username}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      <Button variant="contained" style={{margin:"5px"}}>Confirm</Button>
    <Button variant="outlined">
  Delete
</Button>

      </Box>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: "200px" }}
      image="https://hips.hearstapps.com/seventeen/assets/16/12/1458835169-4071343-2895889394-the-a.jpg"
      alt="Live from space album cover"
    />
  </Card></>
    
  );
}