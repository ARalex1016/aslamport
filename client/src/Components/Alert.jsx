import Swal from "sweetalert2";

// SweetAlert2 Icons
// success, error, warning, info, question

export const AlertBox = ({
  title = "Successful",
  text = "Successfully Sent",
  icon = "success",
}) => {
  return Swal.fire({
    title,
    text,
    icon,
  });
};
