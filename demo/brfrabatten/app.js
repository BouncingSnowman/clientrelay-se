const frame = document.getElementById('rabatten-assistant');
const loading = document.getElementById('frame-loading');
function finishLoading() {
  if (loading) loading.hidden = true;
  frame?.parentElement.setAttribute('aria-busy', 'false');
}
if (frame) frame.addEventListener('load', finishLoading, { once: true });
// Keep the iframe and its separate-window fallback accessible if load is slow or blocked.
if (frame) window.setTimeout(finishLoading, 12000);

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('primary-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
const groups = [...document.querySelectorAll('.nav-group')];
groups.forEach(group => group.addEventListener('toggle', () => {
  if (group.open && !window.matchMedia('(max-width: 900px)').matches) {
    groups.filter(other => other !== group).forEach(other => { other.open = false; });
  }
}));
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-group') && !window.matchMedia('(max-width: 900px)').matches) {
    groups.forEach(group => { group.open = false; });
  }
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const focusedGroup = document.activeElement?.closest('.nav-group');
  groups.forEach(group => { group.open = false; });
  if (focusedGroup) focusedGroup.querySelector('summary').focus();
  if (navigation?.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});
document.querySelectorAll('[data-video]').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.video;
    if (!/^[a-zA-Z0-9_-]{11}$/.test(id)) return;
    const player = document.createElement('iframe');
    player.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    player.title = button.dataset.title;
    player.className = 'video-player';
    player.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    button.replaceWith(player);
    player.focus();
  });
});
