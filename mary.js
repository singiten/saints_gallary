// Attach event listeners to all "Save the image" buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".save-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      downloadImage(url);
    });
  });
});

// Function to download image
function downloadImage(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop(); // saves with original filename
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
