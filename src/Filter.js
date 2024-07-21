import React from 'react';
import {Tabs, Tab} from "@mui/material"

export const Filter = ({filters, selectedFilterIndex, setSelecetdFilterIndex}) => {

 const handleChange=(event, newValue)=>{
    selectedFilterIndex(newValue);
 };

 const a11yProps=(index)=>{
    return {
        id: `simple-tab ${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
 }
  
 return(
  <div>
    <Tabs value={selectedFilterIndex}
    onChange={handleChange}
    aria-label="basic tabs example"
    TabIndicatorProps={{style:{backgroundColor: "primrary"}}}
    >
        {
            filters.map((ele,idx)=>(
                <Tab className="tab" label={ele.label} {...a11yProps} />
            ))
        }
    </Tabs>
  </div>
 );
}



