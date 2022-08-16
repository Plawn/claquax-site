import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';


import React from "react";
import { UnDebile } from "./lesDebiles";
import TextRating from "./rating";

type Props = {
  debile: UnDebile;
};

export function Debile(props: Props) {
  const { debile } = props;

  return (
    <div
      style={{
        position: "relative",
        marginTop: "4em",

      }}>
      <Avatar
        sx={{width: '4em', height: '4em'}}
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          top: "-3.1em",
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow:  "1px 5px 20px -7px ",

        }}
        src={debile.photoUrl}
      />
      <Card
        style={{
          width: "30ch",
          maxWidth: '95%',
          borderRadius: "1em",
          boxShadow:  "1px 5px 20px -7px ",
        }}
      >
        <CardHeader title={debile.name} />
        <CardContent>
          <Typography>
            {debile.bio}
            <TextRating value={debile.score}></TextRating>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}