const filters=document.querySelectorAll('.filter');const cards=document.querySelectorAll('.feature-list .feature-card');
filters.forEach(filter=>filter.addEventListener('click',()=>{filters.forEach(f=>f.classList.remove('active'));filter.classList.add('active');const value=filter.dataset.filter;cards.forEach(card=>card.classList.toggle('hidden',value!=='all'&&card.dataset.category!==value));}));
