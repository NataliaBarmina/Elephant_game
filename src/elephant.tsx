import { useState } from 'react';
import { ElephantFeeding } from './elephantFeeding';
import type { TElephant } from './types';
import deadElephant from '../src/assets/elephantDeath.png';
import hyena from '../src/assets/hyena.png';
import { useTranslation } from 'react-i18next';

export const Elephant = ({ handleResetCounter }: TElephant) => {
  const [weight, setWeight] = useState(600);
  const [isBooming, setIsBooming] = useState(false);
  const [isDying, setIsDying] = useState(false);

  const handleHealthyFood = () => {
    setWeight(weight => weight + 20);
  };

  const handleUnhealthyFood = () => {
    setWeight(prevWeight => prevWeight - 20);
  };

  const maxWeight = 700;
  const minWeight = 400;
  const isExploded = weight >= maxWeight;
  const isDead = weight < minWeight;

  //запускаем анимацию взрыва, чтобы слон не скрылся сразу
  if (isExploded && !isBooming && !isDying) {
    setTimeout(() => {
      setIsBooming(true);
    }, 900);
  }

  // Запускаем анимацию смерти
  if (isDead && !isDying && !isBooming) {
    setTimeout(() => {
      setIsDying(true);
    }, 900);
  }

  return (
    <>
      {!isBooming && !isDying && (
        <ElephantFeeding
          handleHealthyFood={handleHealthyFood}
          handleUnhealthyFood={handleUnhealthyFood}
          isExploded={isExploded}
          isDead={isDead}
          weight={weight}
        />
      )}

      {isBooming && <DeadElephant isBooming={isBooming} handleResetCounter={handleResetCounter} />}
      {isDying && <DeadElephant isDying={isDying} handleResetCounter={handleResetCounter} />}
    </>
  );
};

export const DeadElephant = ({ isBooming, isDying, handleResetCounter }: TElephant) => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" flex justify-center mb-12">
        {isBooming && <img src={deadElephant} alt="#" className="dead-elephant w-[60%]" />}
        {isDying && <img src={hyena} alt="#" className="dead-elephant w-[75%]" />}
      </div>
      <button className="bg-amber-200" onClick={handleResetCounter}>
        {t('buttons.play_again')}
      </button>
    </>
  );
};
