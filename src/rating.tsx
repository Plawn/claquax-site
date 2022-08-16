import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: string]: string } = {
  0.5: 'Useless-',
  1: 'Useless',
  1.5: 'Useless+',
  2: 'Poor-',
  2.5: 'Poor',
  3: 'Poor+',
  3.5: 'Good-',
  4: 'Good',
  4.5: 'Good+',
  5: 'Excellent',
};

interface Rating {
    value: number
}

export default function TextRating(props:Rating) {

  return (
    <Box
      sx={{
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={props.value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box>{labels[props.value]}</Box>
    </Box>
  );
}