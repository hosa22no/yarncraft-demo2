"use client";

// Timer component
import { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null); // Use ref to hold the interval ID

  useEffect(() => {
    const savedTime = localStorage.getItem('timer');
    const savedActive = localStorage.getItem('isActive');

    if (savedTime) {
      setTime(Number(savedTime));
    }

    if (savedActive) {
      setIsActive(JSON.parse(savedActive));
    }
  }, []);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current); // Clear interval using ref
    }

    return () => {
      clearInterval(intervalRef.current); // Cleanup on unmount
    };
  }, [isActive]);

  useEffect(() => {
    localStorage.setItem('timer', time);
  }, [time]);

  useEffect(() => {
    localStorage.setItem('isActive', JSON.stringify(isActive));
  }, [isActive]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(false);
    localStorage.removeItem('timer');
    localStorage.removeItem('isActive');
  };
  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-gray-100 dark:bg-custom-blue dark:text-white">
      <h1 className="text-4xl font-bold mb-8">Timer</h1>
      <div className="text-6xl font-mono mb-8">
        <span>{String(Math.floor(time / 3600)).padStart(2, '0')}:</span>
        <span>{String(Math.floor((time % 3600) / 60)).padStart(2, '0')}:</span>
        <span>{String(time % 60).padStart(2, '0')}</span>
      </div>
      <div className="space-x-4">
        <button
          onClick={handleStartPause}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isActive? 'Pause' : 'Start'}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;