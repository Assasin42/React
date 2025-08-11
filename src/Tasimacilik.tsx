import React, { useState, useRef, useEffect, useCallback } from 'react';
import columns from './Backlog_Gorevkismi';
import columns1 from './Deneme';
import MyBacklog from "./Deneme";
import Mytask from "./Backlog_Gorevkismi";
import { IKart } from "./MyMenu";
import { Collapse } from 'antd';
import MyList from './Projeler_kismi';
type DashboardProps = {
  kartData: IKart[];
};
const { Panel } = Collapse;
const Dashboard: React.FC<DashboardProps> = ({ kartData }) => {
  return (
    <div style={{ display: "vertical", gap: "20px" }}>
      {/* İlk tablo */}
      <h2>Backlog</h2>
      <Collapse accordion defaultActiveKey={['1']}>
        <Panel header="Projeler" key="1" >


          <h4>Projeler</h4>
          <MyList data={kartData} filterType="proje" /></Panel>
      </Collapse>

      {/* İkinci tablo */}

      <Collapse accordion defaultActiveKey={['2']}>
        <Panel header="Görevler" key="2">
          <h4>Görevler</h4>
          <Mytask data={kartData} filterType="görev" /></Panel>
      </Collapse>

    </div>
  );
};

export default Dashboard;
