export type TElephant = {
  handleResetCounter?: () => void;
  handleIncreaseCounter?: () => void;
  handleHealthyFood?: () => void;
  handleUnhealthyFood?: () => void;
  isExploded?: boolean;
  isDead?: boolean;
  weight?: number;
  count?: number;
  isBooming?: boolean;
  isDying?: boolean;
};
