
import '../../../assets/css/korean.css';

import vocab_food from './korean/vocab/food/food.json';
import vocab_fruit from './korean/vocab/food/fruit.json';
import vocab_meals from './korean/vocab/food/meals.json';
import vocab_utensils from './korean/vocab/food/utensils.json';

import KoreanWord from "../../../components/korean_word";

function korean_food() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Food</h1>
            <KoreanWord items={vocab_food}/>
            <h3 className='korean_cheatsheet_subtitle'>Fruit</h3>
            <KoreanWord items={vocab_fruit}/>
            <h3 className='korean_cheatsheet_subtitle'>Meals</h3>
            <KoreanWord items={vocab_meals}/>
            <h3 className='korean_cheatsheet_subtitle'>Utensils</h3>
            <KoreanWord items={vocab_utensils}/>
        </div>
    );
}

export default korean_food;
