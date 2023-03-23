
import { useState, useEffect } from "react";
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../assets/data/Songs';
import Player from "../components/Player";
import "../Player.css";

export default function NewGoal() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > Songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className='w-100 mt-5'>
       <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={Songs}
      />
    </div>
  )
}
