import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import "./MyCard.scss";

export default function MyCard({ title, content1, content2 }) {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          프로젝트 개요
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          책임자: {content1}
        </Typography>
        <Typography variant="body2">기간: {content2}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">자세히 보기</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="my-card">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}
