import React from 'react';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

type RecipeFormProps = {
  handleDelete: Function;
  handleChange: Function;
  position: number;
};

const RecipeIngredientForm = ({
  handleDelete,
  position,
  handleChange,
}: RecipeFormProps) => {
  return (
    <Grid rowSpacing={8} columnSpacing={2}>
      <Grid item xs={12} style={{ margin: '30px 0 10px' }}>
        <Divider>
          <Chip
            label={`Ingredient ${position + 1}`}
            onDelete={() => handleDelete(position)}
          />
        </Divider>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={6}>
          <TextField
            label='Quantity:'
            onChange={(event) =>
              handleChange(position, 'quantity', event.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Unit:'
            onChange={(event) =>
              handleChange(position, 'unit', event.target.value)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Description:'
            maxRows={4}
            multiline
            fullWidth
            onChange={(event) =>
              handleChange(position, 'description', event.target.value)
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecipeIngredientForm;
