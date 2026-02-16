import { Footer } from "../footer/Footer";
import { NavBar } from "../menu/NavBar";
import "../../styles.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Search } from "../photoswipe/Search";
import { useEffect, useState } from "react";
import { urlImages } from "../../data/urlImages";
import { PhotoSwipeGallery } from "../photoswipe/PhotoSwipeGallery";

export const NuestrasObras = () => {

 const [searchText, setSearchText] = useState("");
 const [searchResults, setSearchResults] = useState(urlImages);

  useEffect(() => {
    const results = urlImages.filter(({text}) => searchText.trim() === "" || text.toLowerCase().includes(searchText));
    setSearchResults(results);
  }, [searchText]);

  const onChangeHandle = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
        <div className="gridtemplateProyects">
            <NavBar/>

                  <Search changeHandler={onChangeHandle} searchText={searchText}/>
                  <PhotoSwipeGallery results={searchResults} searchText={searchText} />
    
            <Footer/>
        </div>
    </>
  )
}
