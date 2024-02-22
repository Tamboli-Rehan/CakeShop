import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../stylesheets/style.css"

export default function AccordionExpandIcon(props) {
  return (
    <div>
      <Accordion style={{backgroundColor:"var(--dark-brown)", color:"white",...props.accordionStyle}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon style={{color:"white"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{fontSize:"25px"}}>{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"small"}}>
            {props.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
