import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './DeviceList.css';
import iphone from '../../img/apple-iphone-6-space-gray.jpg';

import device from '../../TESTSTORE';

function DeviceList() {
  //   console.log(Object.keys(device[0]).map((key, index) => key));
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
        flipId={`list-item-${index}`}
        stagger="card"
        shouldInvert={shouldFlip(index)}
      >
        <div className="list-item" onClick={() => onClick(index)}>
          <Flipped inverseFlipId={`list-item-${index}`}>
            <div className="list-item-content">
              <Flipped
                flipId={`avatar-${index}`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
                delayUntil={`list-item-${index}`}
              >
                <div className="avatar">
                  <img src={iphone} alt="iphone" />
                </div>
              </Flipped>
              <div className="description">
                <Flipped
                  flipId={`description-${index}-${0}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={index}
                >
                  <div>
                    <h2>{`${device.make} ${device.model}`}</h2>
                  </div>
                  {/* <span>{`${device.make} ${device.model}`}</span> */}
                </Flipped>
                {/* <Flipped
                  flipId={`description-${index}-${1}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={index}
                >
                  <span>{`${device.color} ${device.size}`}</span>
                </Flipped> */}
                <Flipped
                  flipId={`description-${index}-${2}`}
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
    return (
      <Flipped
        flipId={`list-item-${index}`}
        stagger="card"
        onStart={el => {
          setTimeout(() => {
            el.classList.add('animated-in');
          }, 400);
        }}
      >
        <div className="expanded-list-item" onClick={() => onClick(index)}>
          <Flipped inverseFlipId={`listItem-${index}`}>
            <div className="expanded-list-item-content">
              <Flipped
                flipId={`avatar-${index}`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
                delayUntil={`listItem-${index}`}
              >
                <div className="avatar avatar-expanded">
                  <img src={iphone} alt="iphone" />
                </div>
              </Flipped>
              <div className="description">
                <Flipped
                  flipId={`description-${index}-${0}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={index}
                >
                  <div>
                    <h2>{`${device.make} ${device.model}`}</h2>
                  </div>
                  {/* <span>{`${device.make} ${device.model}`}</span> */}
                </Flipped>
                {/* <Flipped
                  flipId={`description-${index}-${1}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={index}
                >
                  <span>{`${device.color} ${device.size}`}</span>
                </Flipped> */}
                <Flipped
                  flipId={`description-${index}-${2}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={index}
                >
                  <span>{`$${device.price}.00 @ ${device.location}`}</span>
                </Flipped>
              </div>
              <div className="additional-content">{device.condition}</div>
            </div>
          </Flipped>
        </div>
      </Flipped>
    );
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
