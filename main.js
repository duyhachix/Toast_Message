function toast({
	title = '',
	message = '',
	type = '',
	duration = 3000,
}) {
	let main = document.getElementById('toast');

	if (main) {
		let toast = document.createElement('.div');
		toast = document.classList.add('toast');
		toast.innerHTML = `
    <div class="toast__icon">
					<i class="fa-solid fa-circle-check"></i>
				</div>
				<div class="toast__body">
					<h3 class="toast__title">${title}</h3>
					<p class="toast__msg">
						${message}
					</p>
				</div>
				<div class="toast__close">
					<i class="fa-regular fa-circle-xmark"></i>
				</div>`;
		main.appendChild(toast);
	}
}
toast({
	title: 'Success',
	message: '123 Cuối tuần nắng đẹp, thích hợp để đi dã ngoại',
	type: 'success',
	duration: 3000,
});
