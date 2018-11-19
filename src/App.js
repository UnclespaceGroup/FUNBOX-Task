import React, {Component} from 'react';
import './App.css';
import MainContainer from './container/MainContainer'
import "@babel/polyfill";

let store = {
    items: [
        {
            id: 0,
            teaser: 'Сказочное заморское яство',
            title: 'Нямушка',
            taste: 'с фуа-гра',
            description_taste: 'Печень утки разварная с артишоками.',
            quantity: '10',
            specification_second: '',
            weight: '0,5',
            mouse_amount: 'мышь в падарок',
            active: true,
            selected: false
        },
        {
            id: 1,
            teaser: 'Сказочное заморское яство',
            title: 'Нямушка',
            taste: 'с рыбой',
            description_taste: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            quantity: '40',
            mouse_amount: '2 мыши в подарок',
            specification_second: '',
            spec: '2',
            weight: '2',
            active: true,
            selected: true
        },
        {
            id: 2,
            teaser: 'Сказочное заморское яство',
            title: 'Нямушка',
            taste: 'с курой',
            description_taste: 'Филе из цыплят с трюфелями в бульоне.',
            quantity: '100',
            mouse_amount: '5 мышей в подарок',
            specification_second: 'заказчик доволен',
            spec: '5',
            weight: '5',
            active: false,
            selected: false
        }
    ]
}

class App extends Component {
    state = {
        items: store.items
    }

    render() {
        let items = this.state.items
        let changeActive = this.changeActive
        return (

            <MainContainer {...{items, changeActive}}/>

        );
    }

    changeActive = (id) => {
        let {items} = this.state
        items[id].selected = !this.state.items[id].selected
        this.setState({...items})
    }
}

export default App;
