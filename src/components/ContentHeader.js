import {
  Typography,
  Box,
} from '@mui/material';
function ContentHeader({ theme }) {

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: theme.palette.primary.main, // 진한 파란색
        color: theme.palette.common.white,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        AI 상담 채팅
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        다이소 건강기능식품을 추천해드립니다.
      </Typography>
    </Box>
  )
}

export default ContentHeader;