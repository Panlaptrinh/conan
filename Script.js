// Lấy danh sách phim từ HTML
const movieList = document.getElementById('movie-list');

// Xử lý khi người dùng click vào nút "Xem ngay"
movieList.addEventListener('click', function(event) {
	if (event.target.classList.contains('btn-watch')) {
		alert('Bạn đã bấm nút "Xem ngay"');
	}
});