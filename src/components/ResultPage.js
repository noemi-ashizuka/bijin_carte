import React, { useEffect } from 'react';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, PinterestIcon, FacebookIcon, TwitterIcon} from 'react-share';
import '../styles/resultpage.scss';


const ResultPage = ({result}) => (
  <div>
    {useEffect(() => {
      window.scrollTo(0, 0)
    }, [])}
    {result === "Result 1" && 
      <div className="result-page-container">
        <h1 className="result-page-main-title">乾燥肌タイプ</h1>
        <img src="https://res.cloudinary.com/dtewjoisz/image/upload/v1597625744/bijin%20carte/sample_ygyaev.png" alt="乾燥肌タイプ" className="result-page-image" />
        <h2 className="result-page-title">特徴</h2>
        <p className="result-page-text">加齢と共に増える傾向にある肌タイプ。水分と、油分のバランスのくずれからバリア機 能も低下しがちなため、刺激に弱く、肌トラブルを起こしやすい。</p>
        <h2 className="result-page-title">お手入れポイント</h2>
        <p className="result-page-text">油分も水分も足りていない状態なので、どちらもバランスよく補給すること。ただし、刺激には弱いため、新しい化粧品を試すときはパッチテストを行う。生理前は避けるなど、様子を見ながら行う。</p>
        
       <div className="result-page-icons">
       <h2 className="result-page-icons-title">結果をシェアする</h2>
       <FacebookShareButton children={<FacebookIcon size={40} className="share-icon" />} />
       <TwitterShareButton children={<TwitterIcon size={40} className="share-icon" />} />
       <PinterestShareButton children={<PinterestIcon size={40} className="share-icon" />} />
      </div>
      </div>
    }
    {result === "Result 2" && 
      <h2>This is result 2</h2>
    }
    {result === "Result 3" && 
      <h2>This is result 3</h2>
    }
    {result === "Result 4" && 
      <h2>This is result 4</h2>
    }
    {result === "Result 5" && 
      <h2>This is result 5</h2>
    }
  </div>
)

export default ResultPage;