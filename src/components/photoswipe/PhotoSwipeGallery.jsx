import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { Images } from './Images';

export const PhotoSwipeGallery = ({results, searchText}) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery1',
      children: 'a',
      pswpModule: () => import('photoswipe'),
      arrowPrev: true,
      arrowNext: true
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className={searchText === "" ? "galleryGrid" : "flexbox"} id="gallery1">
      {
      results.map((result) => 
        <Images key={result.id} url={result.url} className={result.className} text={result.text}/>
      )}
    </div>
  );
}