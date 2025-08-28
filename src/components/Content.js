import {
  Box,
} from '@mui/material';
import ContentHeader from './ContentHeader';
import Chat from './Chat';
import Input from './Input';
import WarMsg from './WarMsg';
import { useEffect, useState } from 'react';

function Content({ theme }) {
  const [loading, setLoading] = useState(false);
  const [msgs, setMsgs] = useState(() => {
    const savedMsgs = localStorage.getItem('daisoAiMsg');
    if (savedMsgs) {
      return JSON.parse(savedMsgs);
    }else {
      return [{
        role: 'model',
        parts: [{ text: '안녕하세요! 다이소 AI 약사입니다. 무엇이 궁금하신가요?' }],
      }]
    }
  });
  // date: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: true })

  useEffect(() => {
    localStorage.setItem('daisoAiMsg', JSON.stringify(msgs));
  }, [msgs]);

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '70%' }, // 오른쪽 채팅 영역 너비
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.common.white,
      }}
    >
      <ContentHeader theme={theme} />
      <Chat msgs={msgs} theme={theme} loading={loading} />
      <Input msgs={msgs} setMsgs={setMsgs} theme={theme} loading={loading} setLoading={setLoading} />
      <WarMsg theme={theme} />
    </Box>
  )
}

export default Content;