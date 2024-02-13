
import '../../../assets/css/korean.css';

import vocab_frequency from './korean/time/frequency.json';
import vocab_time from './korean/time/time.json';

import KoreanWord from "../../../components/korean_word";

function korean_dates() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Time</h1>
            <h3 className='korean_cheatsheet_subtitle'>Time</h3>
            <KoreanWord items={vocab_time}/>
            <br/>
            <h3 className='korean_cheatsheet_subtitle'>Frequency</h3>
            <KoreanWord items={vocab_frequency}/>
        </div>
    );
}

export default korean_dates;
