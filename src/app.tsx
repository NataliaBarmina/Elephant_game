import { useState } from 'react';
import { Counter } from './counter';
import { Elephant } from './elephant';
import frame from '../src/assets/clouds.jpg';
import { useTranslation } from 'react-i18next';

const mainScreenStyle =
  ' w-screen h-screen mx-auto text-center bg-size-[100%_110%] bg-center bg-blue-200 bg-blend-luminosity';
const mainHeaderStyle = 'pb-20 font-extrabold text-5xl  tracking-widest pt-30';
const mainContainerStyle = 'h-[66vh] mx-[8vw] grid grid-cols-[90%_10%] ';
const componentsContainerStyle = 'mx-auto w-full pl-35';
const containerTranslationStyle = 'flex flex-col justify-end ';
const buttonTranslationStyle = 'bg-blue-900 mr-2 text-white';

export function App() {
  const [count, setCount] = useState(0);

  const { t, i18n } = useTranslation();

  const handleIncreaseCounter = () => {
    setCount(count => count + 1);
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  return (
    <div style={{ backgroundImage: `url(${frame})` }} className={mainScreenStyle}>
      <h1 className={mainHeaderStyle}>{t('header.main')}</h1>

      <div className={mainContainerStyle}>
        <div className={componentsContainerStyle}>
          {count < 5 && <Counter count={count} handleIncreaseCounter={handleIncreaseCounter} />}
          {count === 5 && <Elephant handleResetCounter={handleResetCounter} />}
        </div>

        <div className={containerTranslationStyle}>
          <div>
            <button className={buttonTranslationStyle} onClick={() => i18n.changeLanguage('ru')}>
              RU
            </button>
            <button className={buttonTranslationStyle} onClick={() => i18n.changeLanguage('en')}>
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
