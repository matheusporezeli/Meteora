//MODAL NEWSLETTER
const modalNewsletter = document.querySelector("#modalNewsletter");
const newsletterBtn = document.querySelector("#modalNewsletterbtn");
const fechaModalNews = document.querySelector("#fechaModalNews");

newsletterBtn.onclick = function () {
  modalNewsletter.showModal();
};

fechaModalNews.onclick = function () {
  modalNewsletter.close();
};
