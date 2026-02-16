
import '../../styles.css';

export const Search = ({changeHandler, searchText}) => {
  return (
    <>
        <form id="searchForm">
            <input type="text" name="search" placeholder="Search images..." value={searchText} onChange={changeHandler}></input>
        </form>
    </>
  )
}
