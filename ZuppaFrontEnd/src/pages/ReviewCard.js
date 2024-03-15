import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Review.css'


const ReviewCard = ({list}) => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
      setShow(!show);
    };
  return (
    <div>

<Card className='card-container' sx={{ maxWidth: 345 }} >
    <CardContent>
      
    <Typography className='card-name'> {list.name}  <PersonIcon className='personlogo' color="primary" fontSize="large"/>
     </Typography>
     <Typography variant='h6'>{list.company}</Typography>
    <hr/> 
    
    <button onClick={handleToggle}>
        {show ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large"/>}  
      </button>
      <p>{list.rating}</p>
      <div>
        {show ?  <p className='paratag'>{list.description}</p> : null }
      </div>
   
    </CardContent>
    </Card>

    </div>
  )
}

export default ReviewCard;