
import '../../../assets/css/korean.css';

import KoreanWord from "../../../components/korean_word";

function korean_animals() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Animals</h1>
            <KoreanWord items={[
              {"english":"Animal", "korean":"동물"},
              {"english":"Cat", "korean":"고양이"},
              {"english":"Dog", "korean":"개"},
              {"english":"Turtle", "korean":"고북이"},
              {"english":"Tiger", "korean":"호랑이"},
              {"english":"Rabbit", "korean":"토끼"},
              {"english":"Wolf", "korean":"늑대"},
              {"english":"Spider", "korean":"거미"},
              {"english":"Mouse", "korean":"쥐"},
              {"english":"Sheep", "korean":"양"},
              {"english":"Cow", "korean":"소"},
              {"english":"Horse", "korean":"말"},
              {"english":"Pig", "korean":"돼지"},
              {"english":"Butterfly", "korean":"나비"},
              {"english":"Bear", "korean":"곰"},
              {"english":"Elephant", "korean":"코끼리"},
              {"english":"Snake", "korean":"뱀"},
              {"english":"Goose", "korean":"거위"},
              {"english":"Deer", "korean":"사슴"},
              {"english":"Lion", "korean":"사자"},
              {"english":"Frog", "korean":"개구리"},
              {"english":"Raccoon", "korean":"너구리"},
              {"english":"Fox", "korean":"여우"},
              {"english":"Monkey", "korean":"원숭이"},
              {"english":"Toad", "korean":"두꺼비"}
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Birds</h3>
            <KoreanWord items={[
              {"english":"Bird", "korean":"새"},
              {"english":"Duck", "korean":"오리"},
              {"english":"Chicken", "korean":"닭"},
              {"english":"Owl", "korean":"부엉이"},
              {"english":"Eagle", "korean":"독수리"}
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Fish / Water Animals</h3>
            <KoreanWord items={[
              {"english":"Fish", "korean":"물고기"},
              {"english":"Crab", "korean":"게"},
              {"english":"Shark", "korean":"상어"},
              {"english":"Whale", "korean":"고래"},
              {"english":"Eel", "korean":"장어"}
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Fiction</h3>
            <KoreanWord items={[
              {"english":"Dragon", "korean":"용"}
            ]}/>
        </div>
    );
}

export default korean_animals;
