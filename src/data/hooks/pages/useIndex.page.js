import { useState, useMemo } from "react";
import { useApi } from '../useApi'
import { ApiService } from "../../services/ApiService";
import { mutate } from "swr";

export function useIndex() {
  const maxLength = 125;
  const [text, setText] = useState('');
  const tweetList = useApi('tweets').data;
  const sortedTweetList = useMemo(() => {
    return (tweetList || []).sort((a,b) => 
      a.data.date < b.data.date ? 1 : -1
    );
  }, [tweetList]);

  const user = {
    name: 'Wesley Gado',
    username: '@wesleygado',
    picture: 'https://github.com/wesleygado.png'
  }

  const tweet = {
    date: new Date(),
    text: text,
    user,
  }

  function onTextChange(event) {
    const text = event.target.value;
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  async function sendTweet() {
    await ApiService.post('tweets', {
      data: {
        date: new Date().toISOString(),
        text: text,
        user,
      }
    });
    setText('');
    mutate('tweets');
  }

  console.log(sortedTweetList)

  return {
    text,
    onTextChange,
    maxLength,
    sendTweet,
    sortedTweetList,
  }
}