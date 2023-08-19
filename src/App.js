import React, { useState } from 'react';
import './App.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import 'reactjs-popup';

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3];

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  function MyPopup() {
  return (
    <MyPopup trigger={<button>Trigger</button>} position="right center">
      <div>Popup content here</div>
    </MyPopup>
  );
}


  return (
    <div className="App">
      <div className="content">
        <h1>Hey there</h1>
        <p>This is some content for my website.</p>
      </div>
      <div className="slider">
        <img src={images[currentImage]} alt="slider" height={810} width={720} />
        <div className='buttonss'>
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
        <button onClick={MyPopup}>Contact us</button>
        </div>

        <p className='rhyme'><br></br>
          I'm not what I write,<br></br> I'm neither bright nor white,<br></br>
          I'm not what you think,<br></br> I'm not what gets sink,<br></br>
          I'm not what I seem,<br></br>I'm not what I've been,<br></br>
          I'm the one you can't discern,<br></br>I'm the light but I don't burn,<br></br>
          I'm the guy walking alone,<br></br>Under the Moon listening to songs,<br></br>
          I'm the guy who's not just one,<br></br>I'm many yet I'm the one.
        </p>
      </div>
    </div>
  );
}

export default App;