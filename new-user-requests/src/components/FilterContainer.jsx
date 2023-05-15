import React from "react";
import Button from "./Button";
import {
  Accordion,
  AccordionDetails,
  Typography,
  AccordionSummary,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterContainer = () => {
  return (
    <div className=" sm:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        REFINE YOUR SEARCH
      </h5>
      <div className="my-6">
        <Accordion disableGutters={true} elevation={1}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>Business Area</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="IT" />
              <FormControlLabel control={<Checkbox />} label="Finance" />
              <FormControlLabel control={<Checkbox />} label="HR" />
              <FormControlLabel control={<Checkbox />} label="Housing" />
              <FormControlLabel control={<Checkbox />} label="Care" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </div>

      <Button>Search</Button>
    </div>
  );
};

export default FilterContainer;
