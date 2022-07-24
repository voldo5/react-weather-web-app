
import { Modal } from "src/components";

import { FormInner } from "./FormInner";
import { EmailSettingDetails } from "src/features/emailSetting/interface";
import { KeyValue } from "src/utils/baseTypes";
//import styles from "./styles.module.scss";

interface AliaseEditProps {
  alias?: EmailSettingDetails;
  skills: KeyValue[];
  id: string | undefined;
  onCancel: () => void;
  onHandleSubmit: (isAlias: boolean) => void;
}

export const AliaseEdit: React.FC<AliaseEditProps> = ({
  alias,
  skills,
  id,
  onCancel,
  onHandleSubmit,
}) => {
  return (
    <>
      {alias && (
        <Modal
          title={"Edit email alias"}
          visible={true}
          okText="Save"
          cancelText="Cancel"
          onCancel={() => onCancel()}
          width={520}
          footer={false}
          bodyStyle={{ paddingBottom: "10px" }}
          destroyOnClose
        >
          <FormInner
            entity={alias}
            onHandleSubmit={onHandleSubmit}
            skills={skills}
            id={id}
            onCancel={onCancel}
            isAlias={true}
          />
        </Modal>
      )}
    </>
  );
};
