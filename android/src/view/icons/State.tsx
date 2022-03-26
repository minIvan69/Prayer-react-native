import * as React from 'react';
import Svg, {SvgProps, Mask, Rect, G, Path} from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const State = ({title, titleId, ...props}: SvgProps & SVGRProps) => (
  <Svg width={3} height={23} fill="none" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <Mask id="a" x={0} y={0} width={3} height={23}>
      <Rect y={0.938} width={3} height={22} rx={1.5} fill="#C4C4C4" />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#AC5253" d="M-12-.063h24v24h-24z" />
    </G>
  </Svg>
);

export default State;
