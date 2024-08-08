import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
import React, { useEffect, useRef } from 'react';
import { Webchat, WebchatProvider, useClient } from '@botpress/webchat';

import './style.css';
import { theme } from './theme';

const clientId = 'bfaf7c32-f481-4cf7-99ab-0ffe76b6e322';

export default function App() {
  const client = useClient({ clientId });
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      // Scrollt zum Ende des Containers, wenn eine neue Nachricht hinzukommt
      const observer = new MutationObserver(() => {
        chatContainer.scrollTo({
          top: chatContainer.scrollHeight,
          behavior: 'smooth',
        });
      });

      observer.observe(chatContainer, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <WebchatProvider client={client} theme={theme}>
      <div ref={chatContainerRef} className="bpw-chat-container">
        <Webchat />
      </div>
    </WebchatProvider>
  );
}
