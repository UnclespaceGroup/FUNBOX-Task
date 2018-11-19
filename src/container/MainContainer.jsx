import React, { Component } from 'react';
import '../scss/fonts.scss'
import Item from '../Item/Item';
import './MainContainer.css';

class MainContainer extends Component {
    render() {
        const {items, changeActive} = this.props;
        return (
            <div className="content-container">
                <div className="content-container__wrap">
                    <h2 className="content-container__title">Ты сегодня покормил кота?</h2>
                    <div >
                        <ul className="content-container__items">
                            {
                                items.map((item, key) =>
                                    <Item key={key} {...{item, changeActive}} />
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default MainContainer