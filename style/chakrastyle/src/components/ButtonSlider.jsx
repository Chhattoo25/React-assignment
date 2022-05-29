import React from "react";
import react,{useState} from "react"
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip
} from '@chakra-ui/react'
import { Button, ButtonGroup} from '@chakra-ui/react'
const ButtonSlider = () => {
  const [sliderValue, setSliderValue] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="App">
      <div spacing={4} direction="row" align="center">
        <Button colorScheme="red" size="xs">
          Button
        </Button>
        <Button color="blue" bgColor="red" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </div>

      <Slider
        id="slider"
        defaultValue={50}
        min={0}
        max={100}
        colorScheme="red"
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={25} mt="1" ml="-2.5" fontSize="lg">
          25%
        </SliderMark>
        <SliderMark value={50} mt="1" ml="-2.5" fontSize="md">
          50%
        </SliderMark>
        <SliderMark value={75} mt="1" ml="-2.5" fontSize="lg">
          75%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
      {console.log(sliderValue)}
    </div>
  );
};

export default ButtonSlider;
