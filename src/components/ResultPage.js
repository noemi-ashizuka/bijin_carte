// Result component for shindan B

import React, { useEffect } from 'react';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, PinterestIcon, FacebookIcon, TwitterIcon} from 'react-share';
import '../styles/resultpage.scss';


const ResultPage = ({result}) => (
  <div>
    {useEffect(() => {
      window.scrollTo(0, 0)
    }, [])}
    <h1 className="result-page-top-title">Your Type</h1>
    {result === "Result 1" && 
      <div className="result-page-container">
        <h1 className="result-page-main-title">乾燥肌タイプ</h1>
        <img src="https://res.cloudinary.com/dtewjoisz/image/upload/v1597909353/bijin%20carte/%E4%B9%BE%E7%87%A5%E8%82%8C_matrix_for_hada_shindan__%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9B%E3%82%99%E3%83%BC%E3%83%88%E3%82%99_1_fyzji7.svg" alt="乾燥肌タイプ" className="result-page-image" />
        <p className="result-page-text">皮脂も水分も少なめ。<br></br>かさつきが気になるタイプ。</p>
        <h2 className="result-page-title">特徴</h2>
        <p className="result-page-text">年齢を重ねるにつれ、なりやすい肌タイプ。バリア機能が低下しがちなため、刺激に弱く、肌トラブルを起こしやすい</p>
        <h2 className="result-page-title">お手入れポイント</h2>
        <p className="result-page-text">油分も水分もたっぷり補給してあげる事が大切です。ただし、刺激には弱いため、新しい化粧品を試すときはパッチテストを行う。生理前は避けるなど、様子を見ながら行いましょう。オススメ時期は排卵日のちょっと前。肌の調子が良いタイミングなので、新しい化粧品の効果も分かりやすく、トラブルにもなりにくい時期です。排卵日は一般的に生理開始後14日と言われています。ただし個人差あり。</p>
        <h2 className="result-page-title">一言メモ</h2>
        <p className="result-page-text">「お風呂で保湿」のススメお風呂に入る時は、体中に保湿できる絶好のタイミング！なるべく湯船に浸かる事がオススメです。湯船に入るのが難しい場合は、バスルームに入る少し前からシャワーを出しで、空間をミストで満たしましょう◎ 肌が乾燥しにくくなります。またバスルームから出たら、すぐ保湿クリームで肌に蓋をすることで、潤った肌をキープできます。お顔はクリームではなく、コットンパックなどで更なる保湿と、肌の熱を取る事がオススメ＊</p>
        <div className="result-page-icons">
          <h2 className="result-page-icons-title">結果をシェアする</h2>
          <FacebookShareButton children={<FacebookIcon size={40} className="share-icon" />} />
          <TwitterShareButton children={<TwitterIcon size={40} className="share-icon" />} />
          <PinterestShareButton children={<PinterestIcon size={40} className="share-icon" />} />
        </div>
      </div>
    }
    {result === "Result 2" && 
       <div className="result-page-container">
       <h1 className="result-page-main-title">混合肌タイプ</h1>
       <img src="https://res.cloudinary.com/dtewjoisz/image/upload/v1597909353/bijin%20carte/%E6%B7%B7%E5%90%88%E8%82%8C_%E6%B0%B4%E5%88%86%E5%A4%9A%E3%81%84_matrix_for_hada_shindan__%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9B%E3%82%99%E3%83%BC%E3%83%88%E3%82%99_1_bmyhcs.svg" alt="混合肌タイプ" className="result-page-image" />
       <p className="result-page-text">（皮脂少・水分多タイプ）<br></br>みずみずしく透明感はあるが、敏感に反応しやすい</p>
       <h2 className="result-page-title">特徴</h2>
       <p className="result-page-text">潤いはあるが皮脂が少なくデリケートな肌で、季節や環境などの影響を受けやすいタイプ。摩擦・乾燥などの外からの刺激に弱く、痒みを感じやすい。</p>
       <h2 className="result-page-title">お手入れポイント</h2>
       <p className="result-page-text">油分が少ないので、洗浄力が強すぎない洗顔料を使用しましょう。保湿効果が高く、とろみのあるものや、油分の入った化粧水で、しっかり保湿する事が大切。化粧水の後もクリームなどで蓋をし、水分を逃さず適度な油分を与えましょう。</p>
       <h2 className="result-page-title">一言メモ</h2>
       <p className="result-page-text">いろいろなタイプがあるスキンケアアイテム。化粧水やジェルなど、様々な商品があり、どんなタイプを選べば良いか迷ってしまいますよね。一般的に、オイル＞クリーム＞ジェル＞化粧水の順で油分がの含有量が多いです。季節や自分の肌タイプに合わせてどのタイプの化粧品を使うと良いのか、しっかり選べるといいですね！</p>
       <div className="result-page-icons">
         <h2 className="result-page-icons-title">結果をシェアする</h2>
         <FacebookShareButton children={<FacebookIcon size={40} className="share-icon" />} />
         <TwitterShareButton children={<TwitterIcon size={40} className="share-icon" />} />
         <PinterestShareButton children={<PinterestIcon size={40} className="share-icon" />} />
       </div>
     </div>
    }
    {result === "Result 3" && 
      <div className="result-page-container">
        <h1 className="result-page-main-title">普通肌タイプ</h1>
        <img src="https://res.cloudinary.com/dtewjoisz/image/upload/v1597909353/bijin%20carte/%E6%99%AE%E9%80%9A%E8%82%8C_matrix_for_hada_shindan__%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9B%E3%82%99%E3%83%BC%E3%83%88%E3%82%99_1_uwmymz.svg" alt="普通肌タイプ" className="result-page-image" />
        <p className="result-page-text">水分、皮脂のバランスが整っている状態</p>
        <h2 className="result-page-title">特徴</h2>
        <p className="result-page-text">バリア機能もバッチリ＊　肌トラブルが少ない健やかな肌</p>
        <h2 className="result-page-title">お手入れポイント</h2>
        <p className="result-page-text">肌が安定しているので、新しい化粧品や美容機器などもいろいろ試すのもgood＊美容効果以外の香りなど、プラスアルファの要素でお気に入りの化粧品を探してみては？！</p>
        <h2 className="result-page-title">一言メモ</h2>
        <p className="result-page-text">新しい化粧品って、いつ試すといいのだろう？健やか肌の場合でも、ホルモンランスなどで、肌状態は日々変化しています。新しい化粧水を試すなら、排卵日のちょっと前に試してみるのがオススメ＊肌の調子が良いタイミングなので、新しい化粧品の効果も分かりやすく、トラブルにもなりにくい時期です。（排卵日は一般的生理開始後14日と言われています。ただし個人差あり。）</p>
        <div className="result-page-icons">
          <h2 className="result-page-icons-title">結果をシェアする</h2>
          <FacebookShareButton children={<FacebookIcon size={40} className="share-icon" />} />
          <TwitterShareButton children={<TwitterIcon size={40} className="share-icon" />} />
          <PinterestShareButton children={<PinterestIcon size={40} className="share-icon" />} />
        </div>
      </div>
    }
    {result === "Result 4" && 
      <div className="result-page-container">
      <h1 className="result-page-main-title">混合肌タイプ</h1>
      <img src="https://res.cloudinary.com/dtewjoisz/image/upload/v1597909353/bijin%20carte/%E6%B7%B7%E5%90%88%E8%82%8C_%E6%B2%B9%E5%88%86%E5%A4%9A%E3%81%84_matrix_for_hada_shindan__%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9B%E3%82%99%E3%83%BC%E3%83%88%E3%82%99_1_krti9u.svg" alt="混合肌タイプ" className="result-page-image" />
      <p className="result-page-text">（皮脂多・水分少タイプ）<br></br>皮脂に比べて、水分量が少なめ。部分的に差が大きいため、ケアを迷いがち</p>
      <h2 className="result-page-title">特徴</h2>
      <p className="result-page-text">T ゾーンはベタつくのに頬や口元、目の周りはカサついてしまう。水分と油分のバランスが崩れており、バリア機能が低下しがちです。水分量が少ない事をカバーするために、必要以上に水分を分泌してしまっていることも！</p>
      <h2 className="result-page-title">お手入れポイント</h2>
      <p className="result-page-text">水分量が十分でない事が多いため、保湿効果の高い化粧品でまずは水分補給を！特にお風呂から出たらすぐに化粧水で肌の温度を下げて、肌内部からの水分の蒸発を防いであげることもオススメT ゾーンには、化粧水をたっぷりつけても乳液は控えめにし、逆に頬は乳液を重ねづけするなど、部分ごとの肌状態に合わせて調整を！</p>
      <h2 className="result-page-title">一言メモ</h2>
      <p className="result-page-text">保湿成分として有名なヒアルロン酸！薬局で買えるお手頃な製品から高級なものにまで配合されています。一体何が違うの？？と感じることもズバリ、一口にヒアルロン酸と言っても、いくつも種類があるんです！ヒアルロン酸Naや、加水分解ヒアルロン酸など。。。何から得られたヒアルロン酸なのか？どのぐらいサイズを小さくしているのか？など、様々な種類のヒアルロン酸が作られています。種類によって、浸透率や効果に違いがあるんです◎購入の際は、配合されてるヒアルロン酸の名前を検索してみると、より自分にぴったりの化粧水と出会えるかも＊</p>
      <div className="result-page-icons">
        <h2 className="result-page-icons-title">結果をシェアする</h2>
        <FacebookShareButton children={<FacebookIcon size={40} className="share-icon" />} />
        <TwitterShareButton children={<TwitterIcon size={40} className="share-icon" />} />
        <PinterestShareButton children={<PinterestIcon size={40} className="share-icon" />} />
      </div>
    </div>
    }
    {result === "Result 5" && 
      <div className="result-page-container">
      <h1 className="result-page-main-title">脂性肌タイプ</h1>
      <img src="https://res.cloudinary.com/dtewjoisz/image/upload/v1597909355/bijin%20carte/%E8%84%82%E6%80%A7%E8%82%8C_matrix_for_hada_shindan__%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9B%E3%82%99%E3%83%BC%E3%83%88%E3%82%99_1_vbmnle.svg" alt="脂性肌タイプ" className="result-page-image" />
      <p className="result-page-text">水分量も皮脂量も多く、お顔全体的に脂っぽさが目立ちます</p>
      <h2 className="result-page-title">特徴</h2>
      <p className="result-page-text">うるおいがあるため、洗顔後もツッパリ感を感じにくく、毛穴つまり、毛穴開き、ニキビなど、過剰な皮脂の汚れが原因の肌トラブルを起こしやすい</p>
      <h2 className="result-page-title">お手入れポイント</h2>
      <p className="result-page-text">丁寧な洗顔と、引き締め効果のある化粧品で、皮脂を抑えるスキンケアを。</p>
      <h2 className="result-page-title">一言メモ</h2>
      <p className="result-page-text">収れん作用って何！？簡単にお話しすると、お肌の引き締めや、引き締めによる発汗抑制のこと◎ 成分自体が収れん効果のある物や、冷水やアルコールなど皮膚温を一時的に低下させ、急冷によって肌を引き締める物理的な収れん作用など様々なアプローチ方法があります。自分の肌質や季節によってチョイスできると、化粧品選びが楽しくなりますね！</p>
      <div className="result-page-icons">
        <h2 className="result-page-icons-title">結果をシェアする</h2>
        <FacebookShareButton children={<FacebookIcon size={40} className="share-icon" />} />
        <TwitterShareButton children={<TwitterIcon size={40} className="share-icon" />} />
        <PinterestShareButton children={<PinterestIcon size={40} className="share-icon" />} />
      </div>
    </div>
    }
  </div>
)

export default ResultPage;