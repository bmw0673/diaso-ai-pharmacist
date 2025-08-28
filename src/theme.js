import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // MUI 기본 primary 색상
    },
    secondary: {
      main: '#dc004e', // MUI 기본 secondary 색상
    },
    background: {
      default: '#f4f6f8', // 회색 배경
    }
}});

export default theme;