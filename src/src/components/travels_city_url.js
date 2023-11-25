import { InView } from 'react-intersection-observer'
import { Blur, Fade } from 'transitions-kit'
import React, { useState, inView } from "react";

/*export const Image = ({ src }) => {
  const [status, setStatus] = useState('loading')

  return (
    <>
      <Fade appear={false} in={status === 'loading'} unmountOnExit>
        <div >loading...</div>
      </Fade>

      {inView && (
        <Fade in={status === 'loaded'}>
          <img 
            {...imageProps}
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('failed')}
          />
        </Fade> 
      )}

      <Fade in={status === 'failed'} mountOnEnter unmountOnExit>
        <div>error</div>
      </Fade>
    </>
  )
}

export const AsyncImage = (imageProps) => {
  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <div ref={ref}>
          <Image inView={inView} {...imageProps} />
        </div>
      )}
    </InView>
  )
}*/

function TravelCityUrl(props) {
    return (
      <div className="city_url">
        <a href={props.url}>
          <div>
          <img
                    src={props.img}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                />
            <br/>
            {props.name}
              {props.comment &&
                <p className="city_comment">{props.comment}</p>
              }
          </div>
        </a>
      </div>
    );
  }
  
  export default TravelCityUrl;
  