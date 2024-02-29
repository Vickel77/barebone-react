import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Divider from "./components/Divider";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Pill from "./components/Pill";
import Table from "./components/Table";
import Info from "./components/icons/Info";
import InfoModal from "./components/Modal/InfoModal";
import ConfirmModal from "./components/Modal/ConfirmModal";
import RefusalModal from "./components/Modal/RedModal";
import InvestmentTypeModal from "./components/Modal/InvestmentTypeModal";

const GreyTag = ({ label }: { label: string }) => (
  <div className="grey-tag">{label}</div>
);

function App() {
  const _tableColumn: TableColumn = [
    {
      title: <input type="checkbox" />,
      dataIndex: "checked",
      render: () => <input type="checkbox" />,
    },
    { title: "NO", dataIndex: "title" },
    { title: "기존유형", dataIndex: "title" },
    { title: "신청유형", dataIndex: "title" },
    {
      title: "제출서류",
      dataIndex: "title",
      render: (text: any) => <GreyTag label={"GET"} />,
    },
    { title: "신청일시", dataIndex: "title" },
    {
      title: "승인여부",
      dataIndex: "status",
      render: (text: any) => <Pill label="승인거부" type={text!} />,
    },
    { title: "승인거부 사유", dataIndex: "title" },
    { title: "승인일시", dataIndex: "title" },
  ];

  const _tableData = [
    { title: "기존유형", status: "success" },
    { title: "기존유형", status: "error" },
    { title: "신청유형", status: "info" },
    { title: new Date().toISOString(), status: "success" },
    { title: "신청일시", status: "error" },
    { title: "기존유형", status: "success" },
  ];

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModal2, setShowModal2] = useState<boolean>(false);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <section>
          <div className="between">
            <p>
              신청 목록 <span> (총 100명 | 승인대기 1건)</span>
            </p>
            <div className="row">
              <Dropdown data={[]} />
              <Dropdown data={[]} />
              <Dropdown data={[]} />
            </div>
          </div>
          <Divider />
          <div className="between">
            <Button
              onClick={() => setShowModal(true)}
              label="저장"
              type="primary"
            />
            <div className="row">
              선택한 0건
              <Dropdown data={[]} />
              <Button
                onClick={() => setShowModal2(true)}
                label="저장"
                type="primary"
              />
            </div>
          </div>
        </section>
        <section>
          <Table tableColumn={_tableColumn} tableData={_tableData} />
          <InfoModal showModal={showModal2} setShowModal={setShowModal2} />
          <InvestmentTypeModal
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
