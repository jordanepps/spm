import React, { useState } from 'react';
import { Flipper } from 'react-flip-toolkit';
import ListItem from '../ListItem/ListItem';
import ExpandedListItem from '../ExpandedListItem/ExpandedListItem';
import './DeviceList.css';
import iphone from '../../img/apple-iphone-6-space-gray.jpg';

import device from '../../TESTSTORE';

function DeviceList() {
  const [focused, setFocused] = useState(null);

  const shouldFlip = index => (prev, current) =>
    index === prev || index === current;

  function expandItem(index) {
    setFocused(focused === index ? null : index);
  }

  return (
    <Flipper
      flipKey={focused}
      className="staggered-list-content"
      spring="stiff"
      decisionData={focused}
    >
      <ul className="list">
        {device.map((device, index) => (
          <li key={index} tabIndex={0}>
            {index === focused ? (
              <ExpandedListItem
                device={device}
                index={index}
                onClick={expandItem}
                shouldFlip={shouldFlip}
                iphone={iphone}
              />
            ) : (
              <ListItem
                device={device}
                index={index}
                onClick={expandItem}
                shouldFlip={shouldFlip}
                iphone={iphone}
              />
            )}
          </li>
        ))}
      </ul>
    </Flipper>
  );
}

export default DeviceList;
