import React from 'react';
import {
  Box,
  ButtonBase,
  Typography,
  Checkbox,
} from '@mui/material';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

const ChecklistItem = ({ title, value, isChecked, onToggle, itemId }) => {
  return (
    <ButtonBase
      onClick={onToggle}
      data-item-id={itemId}
      sx={{
        width: '100%',
        justifyContent: 'flex-start',
        textAlign: 'left',
        py: 1.5,
        borderBottom: 1,
        borderColor: 'divider',
        '&:hover': {
          bgcolor: 'action.hover',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', px: 3 }}>
        <Checkbox
          checked={isChecked}
          icon={<RadioButtonUnchecked />}
          checkedIcon={<CheckCircle />}
          sx={{
            color: 'text.secondary',
            '&.Mui-checked': {
              color: 'success.main',
            },
          }}
        />
        <Typography 
          sx={{ 
            flex: 1, 
            ml: 1,
            color: 'text.primary',
            fontSize: '0.9rem',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontWeight: 500,
            letterSpacing: '0.5px',
            fontSize: '0.85rem',
          }}
        >
          {value}
        </Typography>
      </Box>
    </ButtonBase>
  );
};

export default ChecklistItem; 