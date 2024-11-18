import { ModalPreview } from "../ModalPreview";
import { ModalCreate } from "../ModalCreate";
import { useState } from "react";

export function ParentModalCreate({ visible, setVisible, files, setFiles }) {
  const [siguiente, setSiguiente] = useState(false);

  return (
    <>
      {visible && (
        <ModalCreate
          setFiles={setFiles}
          visible={visible}
          setVisible={setVisible}
          setSiguiente={setSiguiente}
        />
      )}
      {siguiente && (
        <ModalPreview
          siguiente={siguiente}
          setSiguiente={setSiguiente}
          files={files}
          setFiles={setFiles}
        />
      )}
      ;
    </>
  );
}
