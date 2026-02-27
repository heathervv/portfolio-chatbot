/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-autofocus */
/* Event handler added to div for delight, not actual functionality */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';
import axios from 'axios';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';
import {
  apps,
  icons,
  initialResponse,
  changeInputResponse,
  API,
} from '../config';

import type {
  AppWindowId,
  ChatApiData,
  ChatHistoryItem,
  CuratedOptions,
  InputMode,
  WindowControlProps,
} from '../types/app';

import Toolbar from './toolbar';
import Message from './message';

import '../css/messenger.css';

const username = `Anon${Math.floor(Math.random() * (9999 - 1000) + 1000)}`;
const botName = 'HeatherBot';

const Messenger = ({
  updateActiveApp,
  closeApp,
  updateStartbar,
  openApps,
  minimizedApps,
  currentlyActiveApp,
  previouslyActiveApp,
}: WindowControlProps) => {
  const messenger = apps.messenger.toLowerCase() as AppWindowId;
  const dataView = openApps.indexOf(messenger) === -1 || minimizedApps.indexOf(messenger) !== -1 ? 'closed' : '';

  const messages = useRef<HTMLDivElement | null>(null);

  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [curatedOptions, setCuratedOptions] = useState<CuratedOptions>({
    visible: false,
    links: [
      'Who are you?',
      'Can I see your work?',
      'What do you like to code in?',
      "I'd like to get in touch with you",
    ],
  });

  // This is the final frontier. All message-based functions end with a call to this one
  // It updates the local array with whatever argument was passed to it
  const updateHistory = (message: string, id: string, user: string, bot = false) => {
    setChatHistory((prevChatHistory) => [...prevChatHistory, { user, id, message, bot }]);
  };

  useEffect(() => {
    // First message doesn't come from bot so we can introduce the app to the user
    const timer = window.setTimeout(() => {
      updateHistory(initialResponse, uuidv4(), botName, true);
      setIsTyping(false);
      setCuratedOptions((current) => ({
        ...current,
        visible: true,
      }));
    }, 2000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Always keep messenger window scrolled to last message
    if (openApps.indexOf(messenger) !== -1 && messages.current) {
      messages.current.scrollTop = messages.current.scrollHeight;
    }
  }, [chatHistory, openApps, messenger]);

  // This method listens to any successful response from the bot
  const handleResponse = (responseData: ChatApiData) => {
    const chatbotMessages = responseData.response;
    let delay = 1000;

    for (let i = 0; i < chatbotMessages.length; i += 1) {
      delay += i > 0 ? Math.floor(Math.random() * 2000) + 1000 : 0;

      window.setTimeout(() => {
        updateHistory(chatbotMessages[i], uuidv4(), botName, true);

        // If we're on the last response, trigger next step
        if (i === chatbotMessages.length - 1) {
          setIsTyping(false);

          // If user has curated options turned on, check for any new ones from the bot
          if (curatedOptions.visible && responseData.followUp) {
            setCuratedOptions({
              visible: true,
              links: responseData.followUp,
            });
          }
        }
      }, delay);
    }
  };

  // This method listens to any failed response from the bot
  const handleError = () => {
    updateHistory("Sorry, you've found a flaw in my code. I'll take this opportunity to grow!", uuidv4(), botName, true);
    setIsTyping(false);
  };

  const sendMessage = (directValue?: string) => {
    const message = directValue ?? inputValue;

    if (!message.trim()) {
      return;
    }

    // Pass user message into state
    updateHistory(message, uuidv4(), username);
    // Send user message to analytics
    window.dataLayer.push({ event: 'dialogflow', message });

    // Send off to bot
    setIsTyping(true);
    setInputValue('');

    axios
      .post<ChatApiData>(API, { message })
      .then((response) => handleResponse(response.data))
      .catch(handleError);
  };

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Toggle for user to use preselected messages or type their own to the bot
  const changeInput = (option: InputMode) => {
    updateHistory(changeInputResponse[option], uuidv4(), botName, true);

    setCuratedOptions((current) => ({
      ...current,
      visible: !current.visible,
    }));
  };

  return (
    <Draggable
      defaultPosition={{ x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50 }}
      handle=".toolbar"
      cancel=".button-small"
    >
      <div
        className={`
              messenger
              program
              ${currentlyActiveApp === messenger ? 'active' : ''}
              ${previouslyActiveApp === messenger ? 'previous-active' : ''}
            `}
        onClick={(event) => updateActiveApp(event, messenger)}
        data-view={dataView}
      >
        <Toolbar
          closeApp={closeApp}
          updateStartbar={updateStartbar}
          component={messenger}
          image={icons[messenger].url}
          title={apps.messenger}
        />

        <div className="messages content" ref={messages}>
          <TransitionGroup>
            {chatHistory.map((item) => (
              <CSSTransition key={item.id} timeout={500} classNames="message">
                <Message
                  key={item.id}
                  type={item.bot ? 'sent' : 'received'}
                  user={item.user}
                  content={item.message}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>

        <span className={`activeTyping ${isTyping ? 'visible' : ''}`}>Heather is typing...</span>

        <div className={`userInput ${isTyping ? 'hidden' : ''}`}>
          <div className="field">
            {curatedOptions.visible ? (
              <div className="buttonWrapper">
                <div>
                  {curatedOptions.links.map((link) => (
                    <button
                      key={link.replace(/\s+/g, '').toLowerCase()}
                      type="button"
                      className="button-medium"
                      onClick={() => sendMessage(link)}
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <input
                type="text"
                id="messageField"
                autoFocus
                value={inputValue}
                onChange={onInputChange}
                onKeyDown={onInputKeyDown}
              />
            )}
          </div>
          <button
            type="button"
            onClick={() => changeInput(curatedOptions.visible ? 'free' : 'options')}
            className="button-medium option-toggle"
          >
            {curatedOptions.visible ? 'Free type' : 'Curated'}
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default Messenger;
