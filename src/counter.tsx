import type { TElephant } from './types';
import { useTranslation } from 'react-i18next';

const h2Styles = 'font-extrabold tracking-widest pb-25 pt-45 text-3xl';
const buttonStyles = 'bg-orange-400 hover:bg-amber-700 min-w-50 text-2xl mb-8 explode-pulse';

export const Counter = ({ count, handleIncreaseCounter }: TElephant) => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className={h2Styles}>{t('header.click')}</h2>
      <button onClick={handleIncreaseCounter} className={buttonStyles}>
        {t('buttons.click_me')}
      </button>

      <div className="text-2xl">{t('counter.times', { count })}</div>
    </>
  );
};
