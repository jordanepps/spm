import React from 'react';
import { Flipped } from 'react-flip-toolkit';
import './ListItem.css';

function ListItem({ device, index, onClick, shouldFlip, iphone }) {
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
                  <h2 className="device-make">{device.make}</h2>
                  <h3 className="device-model">{device.model}</h3>
                </div>
              </Flipped>
              <Flipped
                flipId={`description-${index}-${1}`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
                delayUntil={index}
              >
                <span className="device-price">{`$${device.price}`}</span>
              </Flipped>
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
}

export default ListItem;
