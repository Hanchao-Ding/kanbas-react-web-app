import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // Importing the Plus icon
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentEditor from "./Editor";

export default function ModuleControlButtons() {
  
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="fs-4 me-2" /> {/* Added Plus icon with margin */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
