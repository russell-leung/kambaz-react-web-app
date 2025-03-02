/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { IoBanOutline } from "react-icons/io5";
import ModuleEditor from "./ModuleEditor";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {currentUser.role === "FACULTY" && (
        <Button
          variant="danger"
          size="lg"
          className="me-1 float-end"
          id="wd-add-module-btn"
          onClick={handleShow}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Module
        </Button>
      )}
      <Dropdown className="float-end me-2">
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            <IoBanOutline className="me-1 fs-5" /> Unpublish all modules and
            items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            <IoBanOutline className="me-1 fs-5" /> Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button
        variant="secondary"
        size="lg"
        className="me-1 float-end"
        id="wd-view-progress"
      >
        View Progress
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="me-1 float-end"
        id="wd-collapse-all"
      >
        Collapse All
      </Button>
      <ModuleEditor
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
        show={showModal}
        handleClose={handleClose}
      />
    </div>
  );
}
