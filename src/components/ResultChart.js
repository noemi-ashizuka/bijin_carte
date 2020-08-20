import React, { useEffect } from 'react';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, PinterestIcon, FacebookIcon, TwitterIcon} from 'react-share';
import '../styles/resultchart.scss';

function refreshPage() {
  window.location.reload(false);
}
  
const ResultChart = ({resultData}) => (
  
  <div className="result-wrapper">
    {useEffect(() => {
      window.scrollTo(0, 0)
    }, [])}
    <div className="result-bg-marble"></div>
    <div className="result-top" style={{backgroundColor: `${resultData[0].backgroundColor}`}}>
      <h1 className="result-main-title">{resultData[0].title}</h1>
      <img src={resultData[0].mainImgUrl} alt="seasonal flower" className="result-image" />
      <div className="result-text">
        <p>{resultData[0].firstBox}</p>
      </div>
    </div>
    <h1 className="result-subtitle">Your Keywords</h1>
    <div className="focus-box">
      <p className="result-text">{resultData[0].keywords}</p>
    </div>
    <div className="result-main-content">
      <h3>{resultData[0].secondBox.title}</h3>
      <p>{resultData[0].secondBox.text}</p>
      <img src={resultData[0].paletteUrl} alt="color-palette" className="result-palette" />
      <h3>{resultData[0].thirdBox.title}</h3>
      <p>{resultData[0].thirdBox.text}</p>
      <h3>{resultData[0].fourthBox.title}</h3>
      <p>{resultData[0].fourthBox.text}</p>
    </div>
    <div className="result-diagram-box">
      {resultData[0].colorImagesUrls.map((url, index) => 
        <img src={url} alt="color description" key={index} className="result-diagram" />
      )}
    </div>
    <div className="quiz-icons-wrapper">
      <h3 className="quiz-icons-title">結果をシェアする</h3>
      <FacebookShareButton
        url="http://google.com"
        children={<FacebookIcon size={40} className="quiz-share-icon" />}
        quote={`${resultData[0].title}キーワード: ${resultData[0].keywords}`}
        hashtag="findyourbeauty"
      />
      <TwitterShareButton
        url="http://google.com"
        children={<TwitterIcon size={40} className="quiz-share-icon" />}
        className="quiz-result-title"
        title={`${resultData[0].title}キーワード: ${resultData[0].keywords}`}
        via="bijin_carte"
        hashtags={["bijincarte", "findyourbeauty"]}
      />
      <PinterestShareButton
        url="http://google.com"
        children={<PinterestIcon size={40} className="quiz-share-icon" />}
        media={resultData[0].mainImgUrl}
        description={`${resultData[0].title}キーワード: ${resultData[0].keywords}`}
      />
    </div>
        <button onClick={refreshPage} className="quiz-button-result">もう一度診断する</button>
  </div>
)

export default ResultChart;