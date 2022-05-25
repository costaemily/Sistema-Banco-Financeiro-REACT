import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
    {
        page: 'DASHBOARD',
        path: '/dashboard',
        icon: <FaIcons.FaHome/>,
        sub: false,
    },
    {
        page: 'CADASTROS',
        path: '#',
        icon: <FaIcons.FaFile/>,
        closed: <RiIcons.RiArrowDownSFill/>,
        opened: <RiIcons.RiArrowUpSFill/>,
        sub: true,
        subMenu: [
            {
                page: 'BANCO',
                path: '/banco/listar',
                icon: <FaIcons.FaUser/>,
            },
            {
                page: 'AGÊNCIA',
                path: '/agencia/listar',
                icon: <FaIcons.FaLayerGroup/>,
            }
        ]
    },
    {
        page: 'RELATÓRIOS',
        path: '/relatorio',
        icon: <IoIcons.IoIosExit/>,
        sub: false,
    },
    {
        page: 'MANUTENÇÃO',
        path: '/manutencao',
        icon: <IoIcons.IoIosExit/>,
        sub: false,
    },
];