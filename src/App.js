import './App.css';
import {
  Box,
  Container,
  useTheme,

} from '@mui/material';
import LeftSide from './components/LeftSide';
import Content from './components/Content';

function App() {
  const theme = useTheme();


  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '90%',
            height: { xs: '90vh', md: '80vh' },
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            overflow: 'hidden', // 내부 내용 스크롤을 위해
          }}>
          <LeftSide theme={theme} />
          <Content theme={theme} />
        </Box>
      </Container>
    </>
  )
}

export default App;
