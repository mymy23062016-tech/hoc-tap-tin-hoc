const CACHE_NAME = 'hoc-tin-phu-tho-v1';
// Thầy liệt kê tất cả các file bài học, ảnh, video của thầy vào đây
const assets = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'images/logo.png',
  'videos/bai1.mp4' 
];

// Bước cài đặt: Tải hết dữ liệu vào bộ nhớ máy
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Bước truy xuất: Khi không có mạng, lấy dữ liệu từ bộ nhớ ra dùng
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});