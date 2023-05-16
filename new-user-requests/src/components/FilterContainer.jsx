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

const FilterContainer = ({
  changedChecked,
  businessAreas,
  FetchSearchTermsFromApi,
}) => {
  return (
    <div className=" sm:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        REFINE YOUR SEARCH
      </h5>

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
            {businessAreas.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => changedChecked(item.id)}
                    checked={item.checked}
                  />
                }
                label={item.label}
                key={item.id}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <div className="mt-6" onClick={FetchSearchTermsFromApi}>
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default FilterContainer;
