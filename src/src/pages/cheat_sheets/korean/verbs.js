
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
              {"english":"To exercise", "korean":"운동하다"},
              {"english":"To work", "korean":"일하다"},
              {"english":"To sleep", "korean":"자다"},
              {"english":"To eat", "korean":"먹다"},
              {"english":"To drink", "korean":"마시다"},
              {"english":"To learn", "korean":"배우다"},
              {"english":"To study", "korean":"공부하다"},
              {"english":"To teach", "korean":"가르치다"},
              {"english":"To buy", "korean":"사다"},
              {"english":"To be expensive", "korean":"비싸다"},
              {"english":"To be cheap", "korean":"싸다"},
              {"english":"To be busy", "korean":"바쁘다"},
              {"english":"To be beautiful", "korean":"아름답다"},
              {"english":"To be cute", "korean":"귀엽다"},
              {"english":"To be sick", "korean":"아프다"},
              {"english":"To be dirty", "korean":"더럽다"},
              {"english":"To write", "korean":"쓰다"},
              {"english":"To wait", "korean":"기다리다"},
              {"english":"To call / sing", "korean":"부르다"},
              {"english":"To be heavy", "korean":"무겁다"},
              {"english":"To be cold", "korean":"춥다"},
              {"english":"To be hot", "korean":"덥다"},
              {"english":"To be easy", "korean":"쉽다"},
              {"english":"To be difficult", "korean":"어렵다"},
              {"english":"To touch", "korean":"만지다"}
            ]}/>
        </div>
    );
}

export default korean_verbs;
