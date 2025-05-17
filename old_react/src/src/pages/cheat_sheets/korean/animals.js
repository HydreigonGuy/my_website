
import '../../../assets/css/korean.css';

import vocab from './korean/vocab/animal.json';

import KoreanWord from "../../../components/korean_word";

function korean_animals() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Animals</h1>
            <KoreanWord items={vocab}/>
        </div>
    );
}

export default korean_animals;
