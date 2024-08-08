import { Webchat, WebchatProvider, useClient } from '@botpress/webchat';

import './style.css';
import { theme } from './theme';

const clientId = 'bfaf7c32-f481-4cf7-99ab-0ffe76b6e322';

export default function App() {
  const client = useClient({ clientId });

  return (
    <WebchatProvider client={client} theme={theme}>
      <Webchat />
    </WebchatProvider>
  );
}
