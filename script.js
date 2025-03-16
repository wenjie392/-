// 链接点击统计
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log(`点击链接：${this.textContent} (${this.href})`);

        // 如果是内部锚点链接
        if(this.classList.contains('scroll-link')) {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 示例：动态添加链接
window.onload = function() {
    const newLink = document.createElement('a');
    newLink.href = 'https://example.com/new';
    newLink.textContent = '动态添加的链接';
    document.querySelector('.link-list').appendChild(newLink);
}