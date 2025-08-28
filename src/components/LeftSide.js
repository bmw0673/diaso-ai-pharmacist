import {
  Box,
  Avatar,
  Typography,
  Alert,
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WarningAmberIcon from '@mui/icons-material/WarningAmber'; 
function LeftSide({ theme }) {

  return (
    <Box
      sx={{
        width: '30%', // 왼쪽 사이드바 너비
        backgroundColor: '#e3f2fd', // 연한 파란색 배경
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // 세로 중앙 정렬
        padding: 3,
        gap: 2,
        textAlign: 'center',
      }}
    >
      <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 80, height: 80 }}>
        <SmartToyIcon sx={{ fontSize: 40 }} />
      </Avatar>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: theme.palette.primary.dark }}>
        다이소 AI 약사
      </Typography>
      <Typography variant="body2" color="text.secondary">
        다이소에서 판매하는 건강기능식품만 취급합니다.
      </Typography>
      <Alert
        severity="warning"
        icon={<WarningAmberIcon fontSize="inherit" />}
        sx={{ width: '100%', mt: 2, bgcolor: '#fff3e0' }} // 경고 메시지 배경색
      >
        <Typography variant="caption" color="error">
          응급 상황시 119에 신고하세요
        </Typography>
      </Alert>
    </Box>
  )
}

export default LeftSide;