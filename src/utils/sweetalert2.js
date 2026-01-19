import Swal from "sweetalert2";
export const showToast = (title, icon = "info") => {
    Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon,
        title,
    });
};
export const showConfirmationDialog = async (title, text) => {
    const { isConfirmed } = await Swal.fire({
        heightAuto: false,
        title,
        text,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#0054a6",
        cancelButtonColor: "#667382",
        confirmButtonText: "Ya, Lanjutkan!",
        cancelButtonText: "Batal",
    });
    return isConfirmed;
};
export const showWarningDialog = async (title, text) => {
    const { isConfirmed } = await Swal.fire({
        title,
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d63939",
        cancelButtonColor: "#667382",
        confirmButtonText: "Ya, Lanjutkan!",
        cancelButtonText: "Batal",
    });
    return isConfirmed;
};
