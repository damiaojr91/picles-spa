import { ImgHTMLAttributes } from 'react';
import thumbDefault from '../../../assets/thumb-default.jpg';

// ImgHTMLAttributes<HTMLImageElement> to import any html attribute
interface IImageBase64 extends ImgHTMLAttributes<HTMLImageElement> {}

export function ImageBase64({ src, onError, ...rest }: IImageBase64) {
  return (
    <img
      {...rest}
      src={`data:image/*; base64, ${src}`}
      onError={(e) => {
        onError && onError(e);
        e.currentTarget.src = thumbDefault;
      }}
    />
  );
}
