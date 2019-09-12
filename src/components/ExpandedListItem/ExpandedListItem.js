import React from 'react';
import { Flipped } from 'react-flip-toolkit';
import './ExpandedListItem.css';

function ExpandedListItem({ device, index, onClick, shouldFlip, iphone }) {
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
            <div className="description expanded">
              <Flipped
                flipId={`description-${index}-${0}`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
                delayUntil={index}
              >
                <div>
                  <h2 className="device-make expanded">{device.make}</h2>
                  <h3 className="device-model expanded">{device.model}</h3>
                </div>
              </Flipped>
              <Flipped
                flipId={`description-${index}-${1}`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
                delayUntil={index}
              >
                <span className="device-price expanded">{`$${device.price}`}</span>
              </Flipped>
            </div>
            <div className="additional-content">
              <p>
                <span>Location: </span>
                {device.location}
              </p>
              <p>
                <span>Carrier: </span>
                {device.carrier}
              </p>
              <p>
                <span>Condition: </span>
                {device.condition}
              </p>
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
}

export default ExpandedListItem;
