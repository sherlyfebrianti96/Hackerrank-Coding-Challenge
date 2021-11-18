import React, {useState} from 'react';

function Slides({slides}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onRestart = () => {
    setCurrentSlide(0);
  };

  const onPrev = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const onNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const firstItem = currentSlide === 0;
  const lastItem = currentSlide === (slides.length - 1);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                  data-testid="button-restart"
                  className="small outlined"
                  disabled={firstItem}
                  onClick={onRestart}
                >
                  Restart
                </button>
                <button
                  data-testid="button-prev"
                  className="small"
                  disabled={firstItem}
                  onClick={onPrev}
                >
                  Prev
                </button>
                <button
                  data-testid="button-next"
                  className="small"
                  disabled={lastItem}
                  onClick={onNext}
                >
                  Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentSlide].title}</h1>
                <p data-testid="text">{slides[currentSlide].text}</p>
            </div>
        </div>
    );

}

export default Slides;
