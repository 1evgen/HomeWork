import React from 'react'
import {RxCaretDown, RxCaretSort, RxCaretUp} from "react-icons/rx";
import arrowUp from 'src/s2-homeworks/hw15/common/c10-SuperSort/arrow.svg'
import cloudup from './cloudup.svg'
import clouddown from './clouddown.svg'
import watter from './water.svg'


// добавить в проект иконки и импортировать
const downIcon = clouddown as 'down'
const upIcon = cloudup as 'up'
const noneIcon = watter as 'noneIcons'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    debugger
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === down) {
        return up;
    } else if (sort === up) {
        return '';
    } else {
        return down;
    }
};
    // return up // исправить


const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        const newSort = pureChange(sort, down, up);
        onChange(newSort);
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span

            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            сделать иконку
            <img
                id={id + '-icon-' + sort}
                src={icon}
                style={{width:' 20px'}}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
