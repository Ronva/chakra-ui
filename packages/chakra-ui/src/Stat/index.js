import { oneOf } from "prop-types";
import React, { forwardRef } from "react";
import Icon from "../Icon";
import Text from "../Text";
import Box from "../Box";
import Flex from "../Flex";

const StatLabel = forwardRef((props, ref) => (
  <Text ref={ref} fontWeight="medium" fontSize="sm" {...props} />
));

const StatHelpText = forwardRef((props, ref) => (
  <Text ref={ref} fontSize="sm" opacity="0.8" mb={2} {...props} />
));

const StatNumber = props => (
  <Text
    fontSize="2xl"
    verticalAlign="baseline"
    fontWeight="semibold"
    {...props}
  />
);

const arrowOptions = {
  increase: {
    name: "triangle-up",
    color: "green.400",
  },
  decrease: {
    name: "triangle-down",
    color: "red.400",
  },
};

const StatArrow = forwardRef(
  ({ type = "increase", "aria-label": ariaLabel, ...rest }, ref) => (
    <Icon
      ref={ref}
      mr={1}
      size="14px"
      verticalAlign="middle"
      aria-label={ariaLabel}
      {...arrowOptions[type]}
      {...rest}
    />
  ),
);

StatArrow.propTypes = {
  type: oneOf(["increase", "decrease"]),
};

const Stat = forwardRef((props, ref) => (
  <Box ref={ref} flex="1" pr={4} position="relative" {...props} />
));

const StatGroup = forwardRef((props, ref) => (
  <Flex
    ref={ref}
    flexWrap="wrap"
    justifyContent="space-around"
    alignItems="flex-start"
    {...props}
  />
));

export { StatLabel, StatNumber, Stat, StatHelpText, StatArrow, StatGroup };
