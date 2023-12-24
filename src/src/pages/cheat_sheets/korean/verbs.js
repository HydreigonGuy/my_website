
import '../../../assets/css/korean.css';

import KoreanWord from "../../../components/korean_word";

function korean_verbs() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Verbs</h1>
            <KoreanWord items={[
              {"english":"a verb", "korean":"동사"},
              {"english":"To do", "korean":"하다"},
              {"english":"To watch / see", "korean":"보다"},
              {"english":"To sleep", "korean":"자다"},
              {"english":"To eat", "korean":"먹다"},
              {"english":"To bite", "korean":"물다"},
              {"english":"To drink", "korean":"마시다"},
              {"english":"To wait", "korean":"기다리다"},
              {"english":"To touch", "korean":"만지다"},
              {"english":"To stand", "korean":"서다"},
              {"english":"To lie down", "korean":"눕다"},
              {"english":"To dream", "korean":"꿈을 꾸다"},
              {"english":"To catch", "korean":"잡다"},
              {"english":"To throw", "korean":"던지다"},
              {"english":"To live", "korean":"살다"},
              {"english":"To put / place / lay", "korean":"놓다"},
              {"english":"To count", "korean":"세다"},
              {"english":"To have to", "korean":"되다"},
              {"english":"To begin", "korean":"시작하다"},
              {"english":"To not be able to", "korean":"못하다"},
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Mooving</h3>
            <KoreanWord items={[
              {"english":"To go", "korean":"가다"},
              {"english":"To enter / go into", "korean":"들다"},
              {"english":"To drive", "korean":"운전하다"},
              {"english":"To fly", "korean":"날다"},
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Comunication</h3>
            <KoreanWord items={[
              {"english":"To write", "korean":"쓰다"},
              {"english":"To read", "korean":"읽다"},
              {"english":"To call / sing", "korean":"부르다"},
              {"english":"To say / tell / talk", "korean":"말하다"},
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Work</h3>
            <KoreanWord items={[
              {"english":"To work", "korean":"일하다"},
              {"english":"To learn", "korean":"배우다"},
              {"english":"To study", "korean":"공부하다"},
              {"english":"To teach", "korean":"가르치다"},
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Physical Activity</h3>
            <KoreanWord items={[
              {"english":"To exercise", "korean":"운동하다"},
              {"english":"To swim", "korean":"수영하다"},
              {"english":"To dance", "korean":"춤을 추다"}
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Shopping</h3>
            <KoreanWord items={[
              {"english":"To buy", "korean":"사다"},
              {"english":"To be expensive", "korean":"비싸다"},
              {"english":"To be cheap", "korean":"싸다"},
              {"english":"To sell", "korean":"팔다"},
              {"english":"To pay", "korean":"내다"}
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Adjective Verbs</h3>
            <KoreanWord items={[
              {"english":"To be easy", "korean":"쉽다"},
              {"english":"To be difficult", "korean":"어렵다"},
              {"english":"To be cold", "korean":"춥다"},
              {"english":"To be hot", "korean":"덥다"},
              {"english":"To be heavy", "korean":"무겁다"},
              {"english":"To be busy", "korean":"바쁘다"},
              {"english":"To be beautiful", "korean":"아름답다"},
              {"english":"To be cute", "korean":"귀엽다"},
              {"english":"To be sick", "korean":"아프다"},
              {"english":"To be dirty", "korean":"더럽다"},
              {"english":"To be perfect", "korean":"완벽하다"},
              {"english":"To be spicy", "korean":"맵다"},
              {"english":"To be big", "korean":"크다"},
              {"english":"To be okay", "korean":"괜찮다"},
            ]}/>
        </div>
    );
}

export default korean_verbs;
