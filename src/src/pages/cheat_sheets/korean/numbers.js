
import '../../../assets/css/korean.css';

import vocab from './korean/numbers.json';

import KoreanWord from "../../../components/korean_word";

function korean_numbers() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Numbers</h1>
            <KoreanWord items={vocab}/>
        </div>
    );
}

export default korean_numbers;
