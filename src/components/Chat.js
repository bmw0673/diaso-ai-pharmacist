import {
  Box,
  Card,
  Typography
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import CircularProgress from '@mui/material/CircularProgress';

function Chat({ theme, msgs, loading }) {

  return (
    <Box
      sx={{
        flexGrow: 1, // 남은 공간 모두 차지
        p: 2,
        overflowY: 'auto', // 내용이 넘치면 스크롤
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {
        msgs.map((msg, i)=>(
          <Box key={i} sx={{ display: 'flex', alignItems: msg.role === 'model' ? 'flex-start' : 'flex-end', flexFlow: 'column' }}>
            <Card sx={{
              maxWidth: '70%',
              bgcolor: '#e0f7fa', // 연한 하늘색 배경
              p: 1.5,
              borderRadius: msg.from === 'ai' ? '16px 16px 16px 4px' : '16px 16px 4px 16px', // 말풍선 모양
              boxShadow: 'none',
            }}>
              <Typography variant="body2" sx={{ display: 'flex', gap: 0.5, whiteSpace: 'pre-wrap' }}>
                {
                  msg.role === 'model'
                  ? <SmartToyIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                  : <PersonIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                }
                {msg.parts[0].text}
              </Typography>
            </Card>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5}}>
              {msg.date}
            </Typography>
          </Box>
        ))
      }
      {
        loading
        ?
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>
            <Card sx={{
              maxWidth: '70%',
              bgcolor: '#e0f7fa', // 연한 하늘색 배경
              p: 1.5,
              borderRadius: '16px 16px 16px 4px', // 말풍선 모양
              boxShadow: 'none',
            }}>
              <Typography variant="body2" sx={{ display: 'flex', gap: 0.5, whiteSpace: 'pre-wrap' }}>
                <SmartToyIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                <CircularProgress size={16}/>
                잠시만 기다려주세요.
              </Typography>
            </Card>
          </Box>
        : null
      }
    </Box>
  )
}

export default Chat;