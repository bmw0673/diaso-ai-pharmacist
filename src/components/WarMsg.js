import {
  Alert,
  Typography
} from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function WarMsg({ theme }) {

  return (
    <Alert
      severity="warning"
      sx={{ mt: 1, bgcolor: 'transparent' }} // 배경 투명
      icon={<WarningAmberIcon fontSize="inherit" sx={{ color: theme.palette.warning.main }} />}
    >
      <Typography variant="caption" color="text.secondary">
        이 서비스는 정보 제공 목적이며, 전문의 진료를 대체할 수 없습니다.
      </Typography>
    </Alert>
  )
}

export default WarMsg;