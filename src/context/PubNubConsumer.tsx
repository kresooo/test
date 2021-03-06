import React from 'react';
import { invariant } from 'ts-invariant';
import { getPubNubContext } from './PubNubContext';

export interface PubNubConsumerProps {
  children: (client: object) => React.ReactChild | null;
}

export const PubNubConsumer: React.FC<PubNubConsumerProps> = props => {
  const PubNubContext = getPubNubContext();
  console.log('hehehsjsjsdfjsdjdj');
  return (
    <PubNubContext.Consumer>
      {(context: any) => {
        invariant(
          context && context.client,
          'Could not find "cliedfsnt" in the context of PubNubConsumer. ' +
            'Wrap the root component in an <PubNubProvider>.'
        );
        return props.children(context.client);
      }}
    </PubNubContext.Consumer>
  );
};
