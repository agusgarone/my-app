import React from 'react';
import { useEffect } from "react";
import "./navBar.css";
import { Trans, useTranslation } from "react-i18next";
import { Dropdown, Menu, Space } from 'antd';

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log("lenguaje", lng);
    i18n.changeLanguage(lng);
  };

  const menu = (
    <Menu className='dropdown-idioma'>
        <Menu.Item className='item-dropdown'><p style={{margin: 0}} onClick={() => changeLanguage("es")}>
          <span>ES</span>
        </p></Menu.Item>
        <Menu.Item><p style={{margin: 0}} onClick={() => changeLanguage("en")}>
          <span>EN</span>
        </p></Menu.Item>
        <Menu.Item><p style={{margin: 0}} onClick={() => changeLanguage("it")}>
          <span>IT</span>
        </p></Menu.Item>
    </Menu>  
  );

  return (
    <div className="navbar">
      <div className="izq">
        <p style={{ fontSize: 30, margin: 0 }}>Agustin Garone</p>
      </div>
      <div className="centro">
        <ul>
          <li className="btn">
            <a href="#Inicio">
              <Trans i18nKey="inicio">Inicio</Trans>
            </a>
          </li>
          <li className="btn">
            <a href="#sobreMi">
              <Trans i18nKey="sobreMi">sobreMi</Trans>
            </a>
          </li>
          <li className="btn">
            <a href="#proyectos">
              <Trans i18nKey="proyectos">proyectos</Trans>
            </a>
          </li>
          <li className="btn">
            <a href="#contacto">
              <Trans i18nKey="contactos">contactos</Trans>
            </a>
          </li>
        </ul>
      </div>
      <div className="der">
        <Dropdown overlay={menu}>
          <a onClick={e => e.preventDefault()}>
            <Space>
              <Trans i18nKey="configuracion">configuracion</Trans>
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
