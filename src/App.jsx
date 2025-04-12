import React, { useState, useRef } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Toolbar,
  Typography,
} from '@mui/material';
import theme from './theme';
import checklist from './data/checklist.js';
import ChecklistPhase from './components/ChecklistPhase';

function App() {
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [resetKey, setResetKey] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const contentRef = useRef(null);

  const handlePhaseExpand = (phase) => {
    setExpandedPhase(expandedPhase === phase ? null : phase);
    if (phase !== expandedPhase) {
      setTimeout(() => {
        const phaseElement = document.getElementById(`phase-${phase}`);
        if (phaseElement) {
          const headerHeight = 64; // Altura do AppBar
          const elementPosition = phaseElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  const handleReset = () => {
    setOpenDialog(true);
  };

  const confirmReset = () => {
    setResetKey(prev => prev + 1);
    setExpandedPhase(null);
    setOpenDialog(false);
  };

  const handleCheck = () => {
    const phases = Object.keys(checklist.FLIGHT_PHASES);
    
    for (const phase of phases) {
      const items = Object.keys(checklist.FLIGHT_PHASES[phase]);
      
      for (const itemId of items) {
        const itemElement = document.querySelector(`[data-item-id="${itemId}"]`);
        const checkbox = itemElement?.querySelector('input[type="checkbox"]');
        
        if (checkbox && !checkbox.checked) {
          // Expande a fase
          setExpandedPhase(phase);
          
          setTimeout(() => {
            const element = document.querySelector(`[data-item-id="${itemId}"]`);
            if (element) {
              // Rola até o item
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              
              // Aplica a animação
              element.classList.add('highlight-animation');
              setTimeout(() => {
                element.classList.remove('highlight-animation');
              }, 2000);
              
              // Simula o clique no elemento inteiro
              const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
              });
              element.dispatchEvent(clickEvent);
            }
          }, 300);
          
          return;
        }
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={{ 
            bgcolor: 'background.paper',
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Toolbar>
            <Typography 
              variant="h6" 
              component="h1"
              sx={{
                width: '100%',
                textAlign: 'center',
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              Daher TBM 930 Checklist
            </Typography>
          </Toolbar>
        </AppBar>

        <Box 
          ref={contentRef}
          component="main"
          sx={{ 
            flexGrow: 1,
            mt: '64px', // Altura do AppBar
            mb: '72px', // Altura do footer
            overflowY: 'auto',
            bgcolor: 'background.default',
          }}
        >
          <Box key={resetKey}>
            {Object.entries(checklist.FLIGHT_PHASES).map(([phase, items]) => (
              <ChecklistPhase
                key={phase}
                id={`phase-${phase}`}
                title={phase.replace(/_/g, ' ')}
                items={items}
                isExpanded={expandedPhase === phase}
                onToggle={() => handlePhaseExpand(phase)}
              />
            ))}
          </Box>
        </Box>

        <Box
          component="footer"
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'background.paper',
            borderTop: 1,
            borderColor: 'divider',
            p: 2,
            zIndex: 2,
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            maxWidth: '100%',
            mx: 'auto',
          }}>
            <Button
              variant="contained"
              color="inherit"
              onClick={handleReset}
              sx={{ 
                bgcolor: 'rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.3)',
                }
              }}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleCheck}
            >
              Check
            </Button>
          </Box>
        </Box>

        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
        >
          <DialogTitle>Confirm Reset</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to uncheck all items in the checklist?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="inherit">
              Cancel
            </Button>
            <Button onClick={confirmReset} color="error" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}

export default App; 