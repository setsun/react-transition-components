import React from 'react';
import {
  Persona,
  PersonaSize,
  PersonaPresence,
} from 'office-ui-fabric-react/lib/Persona';

const examplePersona = {
  imageUrl:
    'https://s-media-cache-ak0.pinimg.com/736x/bc/ec/7d/bcec7dac3022d86950e0d771b2bb3f96.jpg',
  imageInitials: 'HBC',
  primaryText: 'Heavy Breathing Cat',
  secondaryText: 'Mouth Breather',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  showSecondaryText: true,
};

export default () => (
  <Persona
    {...examplePersona}
    size={PersonaSize.large}
    presence={PersonaPresence.blocked}
    style={{ display: 'inline-flex' }}
  />
);
