import React, { FC } from "react";

import Bag from "../assets/icons/bag.svg";
import Shoes from "../assets/icons/shoes.svg";
import Coat from "../assets/icons/coat.svg";
import Cosmetics from "../assets/icons/cosmetics.svg";
import Dress from "../assets/icons/dress.svg";
import Glasses from "../assets/icons/glasses.svg";
import Hat from "../assets/icons/hat.svg";
import Jacket from "../assets/icons/jacket.svg";
import Jewelry from "../assets/icons/jewelry.svg";
import Perfume from "../assets/icons/perfume.svg";
import Quotes from "../assets/icons/quotes.svg";
import Shorts from "../assets/icons/shorts.svg";
import Tee from "../assets/icons/tee.svg";
import Watch from "../assets/icons/watch.svg";
const SvgIcon: FC<{
  name: string;
  height?: number;
  width?: number;
  color?: string;
  onPress?: () => any;
}> = ({ name, height, width, color, onPress }) => {
  const HEIGHT: number = height ? height : 10;
  const WIDTH: number = width ? width : 10;
  const COLOR: string = color ? color : "white";

  switch (name) {
    case "bag":
      return (
        <Bag height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
      );
      case "shoes":
        return (
          <Shoes height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "coat":
        return (
          <Coat height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "cosmetics":
        return (
          <Cosmetics height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "dress":
        return (
          <Dress height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "glasses":
        return (
          <Glasses height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "hat":
        return (
          <Hat height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "jacket":
        return (
          <Jacket height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "jewelry":
        return (
          <Jewelry height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "perfume":
        return (
          <Perfume height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "quotes":
        return (
          <Quotes height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "shorts":
        return (
          <Shorts height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "tee":
        return (
          <Tee height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
        case "watch":
        return (
          <Watch height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        );
    default:
      return <></>;
  }
};

export default SvgIcon;
