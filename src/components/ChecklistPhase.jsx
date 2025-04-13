import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Collapse,
  IconButton,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import ChecklistItem from './ChecklistItem';

export default function ChecklistPhase({ id, title, items, isExpanded, onToggle }) {
  const [checkedItems, setCheckedItems] = useState({});
  const [isPhaseComplete, setIsPhaseComplete] = useState(false);

  useEffect(() => {
    const allChecked = Object.values(items).every(item => checkedItems[item.id]);
    setIsPhaseComplete(allChecked);
  }, [checkedItems, items]);

  const handleItemToggle = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <Box
      id={id}
      sx={{ 
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: isExpanded ? 'rgba(0, 0, 0, 0.15)' : 'transparent',
      }}
    >
      <Box
        onClick={onToggle}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          py: 2,
          cursor: 'pointer',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.05)',
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: isPhaseComplete ? 'success.main' : 'text.primary',
            fontWeight: 500,
            letterSpacing: 1,
            fontSize: '1rem',
            transition: 'color 0.3s ease',
          }}
        >
          {title}
        </Typography>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          sx={{
            color: 'text.secondary',
            transform: isExpanded ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      
      <Collapse in={isExpanded} timeout="auto">
        <Box>
          {Object.values(items).map((item) => (
            <ChecklistItem
              key={item.id}
              id={item.id}
              itemId={item.id}
              title={item.title}
              value={item.value}
              isChecked={checkedItems[item.id] || false}
              onToggle={() => handleItemToggle(item.id)}
            />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
} 