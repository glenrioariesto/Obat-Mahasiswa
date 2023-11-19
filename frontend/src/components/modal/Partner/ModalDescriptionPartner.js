import Modal from "react-modal";
import customModalStyles from "../../../assets/CustomModalStyle";

const DescriptionModal = ({ isOpen, onRequestClose, description }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Deskripsi Modal bg-blue"
        className="bg-white p-4 rounded shadow-lg  "
        appElement={document.getElementById("root")}
        style={customModalStyles.DescriptionPartner}
      >
        <div>
          <h2>
            <b>Detail Deskripsi</b>
          </h2>
          <p>{description}</p>
        </div>
      </Modal>
    </div>
  );
};
export default DescriptionModal;
