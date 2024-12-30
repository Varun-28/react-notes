import {useEffect} from 'react';

export default function useLogger(message: string) {
  useEffect(() => {
    console.log(message);
  }, [message]);
}