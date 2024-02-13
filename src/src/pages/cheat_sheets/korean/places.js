
import '../../../assets/css/korean.css';

import vocab_countries from './korean/place/country.json';
import vocab_places from './korean/place/places.json';

import KoreanWord from "../../../components/korean_word";

function korean_places() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Places</h1>
            <KoreanWord items={vocab_places}/>
            <h3 className='korean_cheatsheet_subtitle'>Countries</h3>
            <KoreanWord items={vocab_countries}/>
        </div>
    );
}

export default korean_places;
