import { Button, Empty, Modal } from "antd";
import { isEmpty } from "lodash";
import React from "react";
import JsonView from "react-json-view";

const ModalJson = ({ open, onCancel, data }) => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <Modal open={open} onCancel={onCancel} title="JSON" width={800} footer={[]}>
      {!isEmpty(data) ? <JsonView src={data} /> : <Empty />}
    </Modal>
  );
};

export default ModalJson;
