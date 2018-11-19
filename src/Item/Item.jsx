import React, {Component} from 'react';
import '../scss/fonts.scss';
import './item.scss';
import cat from '../images/cat.png'

class Item extends Component {
    state = {
        hovered: false
    }

    render() {

        const { hovered } = this.state
        const {item, changeActive} = this.props;

        /*Сhange card status*/

        let className = !item.active ?
            'item-card__disabled item-card' : item.selected ?
                'item-card__selected item-card' : 'item-card'
        //description after card className
        let descriptionName = !item.active ?
            'item-description__disable' : item.selected ?
                'item-description__selected' : 'item-description__default'
            let hoverClass = !item.active ? '':
            hovered ?
            item.selected ? 'item-card__selected-hover' : 'item-card__hover':
                ''
        className += ' ' + hoverClass
        const mouse_amount = this.StringToObject(item.mouse_amount)
        return (
            <li >
                <div onClick={item.active ? this.handleSelect : () => {
                }}
                     onMouseEnter={this.handleMouseEnter}
                     onMouseLeave={this.handleMouseLeave}
                     className={className}
                >

                        <svg className="item-card__background" xmlns="http://www.w3.org/2000/svg">
                            <path
    d="M2,43.5046174 L2,468 C2,473.522847 6.4771525,478 12,478 L308,478 C313.522847,478 318,473.522847 318,468 L318,12 C318,6.4771525 313.522847,2 308.001698,1.99999928 L43.2799237,2.2246937 L2,43.5046174 Z"/></svg>
                        <p className="item-card__teaser">{item.teaser}</p>
                        <p className="item-card__teaser-second">Котэ не одобряет?</p>
                        <h3 className="item-card__title">{item.title}</h3>
                        <strong className="item-card__taste">{item.taste}</strong>
                        <ul className="item-card__specifications">
                            <li className="item-card__specification"><b>{item.quantity}</b> порций</li>
                            <li className="item-card__specification">{
                                mouse_amount.start && <b>{mouse_amount.start}</b>}
                                {mouse_amount.end}
                            </li>
                            <li className="item-card__specification">{item.specification_second}</li>
                        </ul>
                        <img src={cat} className="item-card__cover"/>
                        <div className="item-card__ellipse-wrap">
                            <p className="item-card__ellipse__first-line">{item.weight}</p>
                            <p className="item-card__ellipse__second-line">кг</p>
                        </div>
                    </div>

                <div className={descriptionName}>
                    <p className="description-default">Чего сидишь? Порадуй котэ,<span> <a onClick={item.active ? this.handleSelect : () => {}}>купи</a>.</span></p>
                    <p className="description-selected">{item.description_taste}</p>
                    <p className="description-disable">Печалька, {item.taste} закончился.</p>
                </div>
            </li>
        );
    }





    //For hover after mouse leave
    handleMouseEnter = () => {
        this.setState({
            hovered: true
        })
    }
    handleMouseLeave = () => {
        this.setState({
            hovered: false
        })
    }
    //Change card status
    handleSelect = () => {
        const {changeActive, item} = this.props
        const id = item.id
        changeActive(id)
        this.setState({
            hovered: false
        })
    }
    // For big numbers of mouses
    StringToObject = (str) => {
        let result = {}
        let start = str.split(' ')[0]
        let end

        if (!isNaN(start)) {
            let index = str.indexOf(' ')
            end = str.substr(index, str.length)
            result.end = end
            result.start = start
        }
        else {
            result.end = str
        }
        return result
    }


}

export default Item;
