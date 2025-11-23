import elephant from '../src/assets/elephant.png';
import type { TElephant } from './types';
import { useTranslation } from 'react-i18next';

const buttonStyle = 'w-[8vw] h-[8vw] mx-auto py-4 rounded-full font-medium';
const healthyButtonStyle = `bg-green-200 ${buttonStyle}`;
const unHealthyButtonStyle = `bg-red-300 ${buttonStyle}`;
const h1Style = 'pb-4 text-5xl';
const gridContainer = 'grid grid-cols-[30%_70%]';
const buttonsContainer = ' flex flex-col gap-30 py-20';
const imageContainer = 'flex flex-col items-center justify-center ';
const warningStyle = 'p-4 bg-red-400   mx-auto font-extrabold rounded-4xl explode-pulse';

export const ElephantFeeding = ({
  handleHealthyFood,
  handleUnhealthyFood,
  isExploded,
  isDead,
  weight,
}: TElephant) => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={h1Style}>{t('header.feeding')}</h1>
      <div className={gridContainer}>
        <div className={buttonsContainer}>
          <button onClick={handleHealthyFood} className={healthyButtonStyle}>
            {t('buttons.healthy')}
          </button>

          <button onClick={handleUnhealthyFood} className={unHealthyButtonStyle}>
            {t('buttons.unhealthy')}
          </button>
        </div>

        <div className={imageContainer}>
          <img
            src={elephant}
            alt="#"
            className={`${isExploded ? 'explode' : ''} ${isDead ? 'die' : ''}`}
            style={{
              width: `${weight}px`,
            }}
          />
          {weight === 680 && <div className={warningStyle}>{t('warning.overeat')}</div>}
          {weight === 400 && <div className={warningStyle}>{t('warning.starvation')}</div>}
        </div>
      </div>
    </>
  );
};
