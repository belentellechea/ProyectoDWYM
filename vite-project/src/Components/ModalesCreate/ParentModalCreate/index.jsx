import { ModalPreview } from "../ModalPreview";
import { ModalCreate } from "../ModalCreate";
import { useState } from "react";

export function ParentModalCreate({
  onFilesSelected,
  visible,
  setVisible,
  files,
}) {
  const [siguiente, setSiguiente] = useState("none");

  return (
    <>
      <ModalCreate
        onFilesSelected={onFilesSelected}
        visible={visible}
        setVisible={setVisible}
        setSiguiente={setSiguiente}
      />
      <ModalPreview
        siguiente={siguiente}
        setSiguiente={setSiguiente}
        files={files}
      />
    </>
  );
}
