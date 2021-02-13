import React from 'react';
import * as FaIcon from 'react-icons/fa';
import * as AiIcon from 'react-icons/ai';
import * as IoIcon from 'react-icons/io';

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        cName: 'nav-text',
        icon: <AiIcon.AiFillHome />
    },
    {
        title: 'Reports',
        path: '/reports',
        cName: 'nav-text',
        icon: <IoIcon.IoIosPaper />
    },
    {
        title: 'Products',
        path: '/products',
        cName: 'nav-text',
        icon: <FaIcon.FaCartPlus />
    },
    {
        title: 'Team',
        path: '#/team',
        cName: 'nav-text',
        icon: <IoIcon.IoMdPeople />
    },
    {
        title: 'Message',
        path: '#/message',
        cName: 'nav-text',
        icon: <FaIcon.FaEnvelopeOpenText />
    },
    {
        title: 'Support',
        path: '#/support',
        cName: 'nav-text',
        icon: <IoIcon.IoMdHelpCircle />
    },
    {
        title: 'Logout',
        path: '/logout',
        cName: 'nav-text',
        icon: <IoIcon.IoIosLogOut />
    },
]