import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './DeviceList.css';

import device from '../../TESTSTORE';

function DeviceList() {
  console.log(Object.keys(device[0]).map((key, index) => key));
  const [focused, setFocused] = useState(null);

  //RENAME OR REFACTOR LATER
  const shouldFlip = index => (prev, current) =>
    index === prev || index === current;

  function expandItem(index) {
    setFocused(focused === index ? null : index);
  }

  function ListItem({ device, index, onClick }) {
    return (
      <Flipped
        flipId={`listItem-${index}`}
        stagger="card"
        shouldInvert={shouldFlip(index)}
      >
        <div className="listItem" onClick={() => onClick(index)}>
          <Flipped inverseFlipId={`listItem-${index}`}>
            <div className="listItemContent">
              <Flipped
                flipId={`avatar-${index}`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
                delayUntil={`listItem-${index}`}
              >
                <div className="avatar" />
              </Flipped>
              <div className="description">
                <Flipped
                  flipId={`description-${index}-${1}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={index}
                >
                  <span>{`${device.make} ${device.model}`}</span>
                </Flipped>
                <Flipped
                  flipId={`description-${index}-${2}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={index}
                >
                  <span>{`${device.color} ${device.size}`}</span>
                </Flipped>
                <Flipped
                  flipId={`description-${index}-${3}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={index}
                >
                  <span>{`$${device.price}.00 @ ${device.location}`}</span>
                </Flipped>
              </div>
            </div>
          </Flipped>
        </div>
      </Flipped>
    );
  }

  function ExpandedListItem({ device, index, onClick }) {
    return <div>Expanded{device.model}</div>;
  }

  return (
    <Flipper
      flipKey={focused}
      className="staggered-list-content"
      spring="gentle"
      decisionData={focused}
      staggerConfig={{
        card: {
          reverse: focused !== null
        }
      }}
    >
      <ul className="list">
        {device.map((device, index) => (
          <li key={index}>
            {index === focused ? (
              <ExpandedListItem
                device={device}
                index={index}
                onClick={expandItem}
              />
            ) : (
              <ListItem device={device} index={index} onClick={expandItem} />
            )}
          </li>
        ))}
      </ul>
    </Flipper>
  );
}

export default DeviceList;
