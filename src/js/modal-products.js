(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-products1-open]"),
        closeModalBtn: document.querySelector("[data-modal-products1-close]"),
        modal: document.querySelector("[data-modal-products1]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-products2-open]"),
        closeModalBtn: document.querySelector("[data-modal-products2-close]"),
        modal: document.querySelector("[data-modal-products2]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-products3-open]"),
        closeModalBtn: document.querySelector("[data-modal-products3-close]"),
        modal: document.querySelector("[data-modal-products3]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();