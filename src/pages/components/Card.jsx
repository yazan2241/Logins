import React from 'react'
import deleteImg from '../../assets/delete.png'

const style = {
    wrapper: `flex relative flex-col mr-4 p-6 items-center w-[200px] justify-between bg-[#EFF8FF] rounded-3xl`,
    icon: `w-[100px] h-[100px] rounded-3xl`,
    name: ``,
    active: `text-gray-400 `,
    delete: `absolute top-4 right-4 cursor-pointer`,
}

const Card = ({ key , icon, name, active }) => {
    
    return (
        <div className={style.wrapper}>
            <img src={deleteImg} alt='delete' className={style.delete} />
            <img src={icon} alt='' className={style.icon} />
            <div className={style.name}>{name}</div>
            <div className={style.active}>{active}</div>
        </div>
    )
}

export default Card