import React from 'react';
import { Flipped } from 'react-flip-toolkit';

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

export default ExpandedListItem;
