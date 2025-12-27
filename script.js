console.log("website loaded successfully");

function showSurprise() {
  const el = document.getElementById('surprise');
  if (!el) return;
  el.textContent = "Surprise! Wishing you an amazing birthday full of joy and love 🎉💖. Extra special because it’s the day you were born. I just want you to know how much your presence brightens everything around you. Your smile, your kindness, and the little things you do mean more than you probably realize. I hope this birthday brings you as much happiness as you bring to others. I’m really grateful that you exist, and I hope today reminds you how special you truly are 💖  ";
  el.classList.add('visible');
}

function openPhoto(src) {
  // create modal overlay
  let overlay = document.createElement('div');
  overlay.style = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);z-index:9999;padding:20px;';
  overlay.onclick = () => document.body.removeChild(overlay);
  let img = document.createElement('img');
  img.src = src;
  img.alt = 'Photo';
  img.style = 'max-width:100%;max-height:100%;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,0.5);';
  img.onerror = function() { this.src = 'https://via.placeholder.com/900x600?text=Image+not+found'; };
  overlay.appendChild(img);
  document.body.appendChild(overlay);
}

// Attach handlers after DOM ready
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('surpriseBtn');
  if (btn) btn.addEventListener('click', showSurprise);

  // allow keyboard activation for images
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') openPhoto(img.src);
    });
  });
});
