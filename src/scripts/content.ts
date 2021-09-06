let openOrdersUrl: URL = (new URL(location.href));
openOrdersUrl.searchParams.set('orderFilter', 'open');

document.querySelector('ul.a-unordered-list.a-nostyle.a-horizontal')?.insertAdjacentHTML('beforeend', `
	<li role="tab">
		<span class="a-list-item">
			<a class="a-link-normal item" href="${openOrdersUrl}">
				未発送の注文
			</a>
		</span>
	</li>
`);