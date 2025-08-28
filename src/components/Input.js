import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useState } from 'react';
import { prompt } from '../gemini/prompt';


function Input({ theme, msgs, setMsgs, loading, setLoading }) {

  const [userMsg, setUserMsg] = useState('');
  const sendMsg = async (text) => {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

    // 1. Body로 보낼 데이터 객체
    const body = {
      "contents": [
        ...msgs,
        {
          "role": 'user',
          "parts": [{
            "text": prompt + '\n' + text
          }
          ],
        }
      ]
    }


    // 2. Headers를 포함한 config 객체
    const config = {
      headers: {
        'X-goog-api-key': process.env.REACT_APP_GEMINI_API_KEY
      }
    };

    try {
      setLoading(true);

      // axios.post(URL, 데이터, 설정) 순서로 전달
      console.log(body);
      const response = await axios.post(url, body, config);
      const aiResponseText = response.data.candidates[0].content.parts[0].text;
      return aiResponseText;

    } catch (error) {
      console.error('에러 발생:', error);
      return '에러가 발생하였습니다. 잠시후 다시 시도해주시기 바랍니다.'

    } finally {
      setLoading(false);
    }
  }

  const handleSend = () => {
    if (loading) return false;
    if (userMsg === '') return false;
    if (userMsg === '/초기화') {
      setMsgs(
        [{
          role: 'model',
          parts: [{ text: '안녕하세요! 다이소 AI 약사입니다. 무엇이 궁금하신가요?' }],
        }]
      )
      setUserMsg('');
      return false;
    }

    const newMsg = {
      "role": 'user',
      "parts": [{
        "text": userMsg
      }
      ]
    }

    setMsgs([...msgs, newMsg]);
    setUserMsg('');

    setTimeout(async () => {
      const aiResponseText = await sendMsg(userMsg);

      const newAiMsg = {
        "role": 'model',
        "parts": [{
          "text": aiResponseText
        }
        ]
      }
      setMsgs(prevMsgs => [...prevMsgs, newAiMsg]);
    }, 0)

  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (

    <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0', backgroundColor: theme.palette.background.paper }}>
      <TextField
        value={userMsg}
        onChange={(e) => { setUserMsg(e.target.value) }}
        onKeyDown={handleKeyDown}
        fullWidth
        placeholder="건강상태를 입력하세요. 증상에 맞는 건강기능식품을 추천해드립니다."
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color={loading ? theme.palette.background.default : "primary"} onClick={handleSend}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2, // 둥근 입력창
            backgroundColor: theme.palette.background.default,
            paddingRight: 0.5,
          },
        }}
      />
    </Box>
  )
}

export default Input;