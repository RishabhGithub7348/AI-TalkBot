import React, { useState ,useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {BiMicrophone,BiMicrophoneOff} from 'react-icons/bi'
import { FaTelegramPlane} from "react-icons/fa";
import { AI } from '../assets';
import { Loading, Grid } from "@nextui-org/react";

const Ai_Chatbot = () => {
  const navigate = useNavigate();
  const [transcription, setTranscription] = useState('');
  const [error, setError] = useState('');
  const [answer, setAnswer] = useState('');
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        const chunks = [];
        recorder.start();
        recorder.addEventListener('dataavailable', (event) => {
          chunks.push(event.data);
        });
        recorder.addEventListener('stop', () => {
          const blob = new Blob(chunks, { type: 'audio/mpeg' });
          setAudioBlob(blob);
          setRecording(false);
        });
        setRecording(true);
        setTimeout(() => {
          recorder.stop();
        }, 5000);
      })
      .catch((error) => {
        console.error(error);
      }); 
  };

  useEffect(() => {
    if(audioBlob){
      handleprompt();
    }
  }, [audioBlob]);

  const handleprompt = async () => {
    try{
      if (!audioBlob) {
        setError('Please record audio first');
        return;
      }
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.mp3');
  
      const transcriptionResponse = await fetch('https://ai-voice-chatbot.onrender.com/transcribe', {
        method: 'POST',
        body: formData,
      });
      if (!transcriptionResponse.ok) {
        throw new Error(`Failed to transcribe audio: ${transcriptionResponse.statusText}`);
      }
      const { transcription } = await transcriptionResponse.json();
      console.log(transcription);
      setTranscription(transcription);
    }catch (error) {
      console.error(error);
      setError('Error getting AI response');
    }
  }

  const handleUpload = async () => {
    try {
      const aiResponse = await fetch('https://ai-voice-chatbot.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: transcription }),
      });
      const responseJson = await aiResponse.json();
      console.log(responseJson); // add this line to check the response body
      if (!aiResponse.ok) {
        throw new Error(`Failed to get AI response: ${aiResponse.statusText}`);
      }
      const message = responseJson.answer;
     console.log(message);
     setAnswer(message);

     const audioResponse = await fetch('https://ai-voice-chatbot.onrender.com/text-to-speech', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message }),
    });
    const blob = await audioResponse.blob();
    const url = URL.createObjectURL(blob);
    audioRef.current.src = url;
    audioRef.current.play();
    } catch (error) {
      console.error(error);
      setError('Error getting AI response');
    }
  };
 
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] dark:text-slate-200 text-[32px]">Chat AI With Voice</h1>
        <p className="mt-2 text-[#666e75] text-[14px] dark:text-slate-400 max-w-[500px]">Generate an answer through DALL-E AI </p>
      </div>
    <div className='grid grid-cols-10 gap-7'>
       <div className='col-span-10 md:col-span-6 lg:col-span-6'>
      <div className='flex flex-col items-start justify-center mt-3'>
    <div className="w-full h-96 p-4 text-[#e2e8f0]  bg-[#111827] border border-gray-200 dark:border-none rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400">
    {answer}
    </div> 
    <div className='flex p-2 items-center w-full justify-center h-12 mt-4  bg-[#111827]  rounded-md'>
        <div className='flex-none items-center justify-center'>
        <button onClick={handleStartRecording} disabled={recording}>  
        {recording ? <BiMicrophone style={{color:'#1976D2', fontSize: 30} }/> : <BiMicrophoneOff style={{color:'#1976D2', fontSize: 30} }/>}
        </button>
        </div>
        <div className="flex-1 p-5  text-[#e2e8f0]  items-center justify-center     ">
        {transcription}
        </div>
        <div>
          <button className='flex-none items-center justify-center'onClick={() => handleUpload()} >
          <FaTelegramPlane style={{color:'#1976D2', fontSize: 30} }/>
          </button>
        </div>
      </div>   
    </div> 
    <div className='mt-5'>
      {answer &&   <audio ref={audioRef} controls />}
    </div>
      </div>
         <div className='md:col-span-4 lg:col-span-4 hidden md:block lg:block '>
        <div className='flex items-center justify-center'>
        <img src={AI} alt="" className='rounded-md '  />
        </div>
      </div>
    </div>
    {/* */}
    </section>
  )
}

export default Ai_Chatbot
