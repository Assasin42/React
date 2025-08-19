/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Mytask from "./Backlog_TaskSection";
import { IKart, StatusId } from "../MyMenu";
import { Collapse } from 'antd';
import { fetchKartlar } from '../Api';


const { Panel } = Collapse;
const Backlog: React.FC<any> = () => {
  const [kartlar, setKartlar] = useState<IKart[]>([]);
  useEffect(()=>{
    fetchKartlar().then((data) => {
          setKartlar(data);
        });
  },[])
  return (
    <div style={{ display: "vertical", gap: "20px" }}>
      {/* İlk tablo */}
      <h2>Backlog</h2>

      <Collapse accordion defaultActiveKey={['0']}>
        <Panel header="Open" key="1" >
          <>

            <h4>Projeler</h4>
            <Mytask data={kartlar} filterType="open" status={StatusId.Open} />
          </>
        </Panel>

      </Collapse>

      {/* İkinci tablo */}

      <Collapse accordion defaultActiveKey={['0']}>
        <Panel header="To Do" key="2">
          <h4>Görevler</h4>
          <Mytask data={kartlar} filterType="görev" status={StatusId.Todo} /></Panel>
      </Collapse>

    </div>
  );
};

export default Backlog;
