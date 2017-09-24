import React from 'react';
import {
  MessageBar,
  MessageBarType,
} from 'office-ui-fabric-react/lib/MessageBar';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export default () => (
  <MessageBar
    onDismiss={() => {
      console.log('test');
    }}
    messageBarType={MessageBarType.warning}
    ariaLabel="Aria help text here"
    actions={
      <div>
        <DefaultButton>Yes</DefaultButton>
        <DefaultButton>No</DefaultButton>
      </div>
    }
  >
    WARNING - Expanding components inbound!
  </MessageBar>
);
