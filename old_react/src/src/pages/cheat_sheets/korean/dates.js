
import '../../../assets/css/korean.css';

import vocab_days from './korean/time/days.json';
import vocab_seasons from './korean/time/seasons.json';

import KoreanWord from "../../../components/korean_word";

function korean_dates() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Dates</h1>
            <h3 className='korean_cheatsheet_subtitle'>Days of the week</h3>
            <KoreanWord items={vocab_days}/>
            <br/>
            <h3 className='korean_cheatsheet_subtitle'>Seasons</h3>
            <KoreanWord items={vocab_seasons}/>
        </div>
    );
}

export default korean_dates;
