import { Grid, Skeleton } from '@mui/material'; 

interface IProps {
    num :number
}


const Skeletons = ({ num }: IProps) => {
  const renderSkeletons = () => {
    return [...Array(num)].map((_, index) => (
      <Grid key={index} item xs={6} sm={2}>
        <Skeleton variant="rounded" width={"100%"} height={'100px'} />
        <Skeleton />
      </Grid>
    ));
  };

  return (
    <Grid container spacing={2} sx={{pt:5}}>
      {renderSkeletons()}
    </Grid>
  );
};

export default Skeletons;
