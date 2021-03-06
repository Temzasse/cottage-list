import type * as Stitches from '@stitches/react';
import { Typography } from './styled';

export function typography(variant: `$${Typography}`) {
  return {
    fontFamily: variant,
    fontWeight: variant,
    fontSize: variant,
    letterSpacing: variant,
    lineHeight: variant,
  };
}

export const paddingVertical = (value: Stitches.PropertyValue<'padding'>) => ({
  paddingTop: value,
  paddingBottom: value,
});

export const paddingHorizontal = (
  value: Stitches.PropertyValue<'padding'>
) => ({
  paddingLeft: value,
  paddingRight: value,
});

export const margingHorizontal = (value: Stitches.PropertyValue<'margin'>) => ({
  marginLeft: value,
  marginRight: value,
});

export const size = (value: Stitches.PropertyValue<'width'>) => ({
  width: value,
  height: value,
});

export const absoluteFill = () => ({
  position: 'absolute',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
});

export const fixedFill = () => ({
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
});

export const flexCenter = () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
