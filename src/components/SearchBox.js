import '../sass/SearchBox.sass';
import { VscSearch } from "react-icons/vsc";

const SearchBox = () => {
    return (
        <div className="inputBox">
            <div className='searchIcon'>
                <VscSearch></VscSearch>
            </div>
            <input type="text" placeholder="내용을 입력해주세요" />
        </div>
    );
};

export default SearchBox;
