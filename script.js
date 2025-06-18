// ================== script.js (ACTUALIZADO) ==================

document.addEventListener('DOMContentLoaded', () => {

    // Solo ejecutar este código si estamos en la página del blog
    const blogContainer = document.getElementById('blog-container');
    if (blogContainer) {
        loadBlogPosts();
    }

    // ============== CÓDIGO AÑADIDO PARA EL MENÚ HAMBURGUESA ==============
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // La función toggle('hidden') añade la clase si no está, y la quita si ya está.
            // Es la forma más sencilla de mostrar/ocultar un elemento.
            mobileMenu.classList.toggle('hidden');
        });
    }
    // =======================================================================

});

// Función para cargar los artículos del blog desde blog.json (SIN CAMBIOS)
async function loadBlogPosts() {
    try {
        const response = await fetch('blog.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        displayBlogPosts(posts);
    } catch (error) {
        console.error("No se pudieron cargar los artículos del blog:", error);
        const blogContainer = document.getElementById('blog-container');
        blogContainer.innerHTML = '<p class="text-center text-red-500">Error al cargar los artículos. Por favor, inténtalo más tarde.</p>';
    }
}

// Función para mostrar los artículos en la página (SIN CAMBIOS)
function displayBlogPosts(posts) {
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = ''; // Limpiar el contenedor

    posts.forEach((post, index) => {
        const postElement = document.createElement('article');
        postElement.className = 'bg-white rounded-lg shadow-lg overflow-hidden flex flex-col blog-card';
        
        postElement.innerHTML = `
            <a href="#">
                <img src="${post.imagen}" alt="${post.titulo}" class="h-56 w-full object-cover transform hover:scale-105 transition-transform duration-300">
            </a>
            <div class="p-6 flex-grow flex flex-col">
                <h3 class="text-xl font-bold text-ocean-deep flex-grow">
                    <a href="#" class="hover:text-coral-red">${post.titulo}</a>
                </h3>
                <p class="text-sm text-gray-500 mt-4">
                    ${new Date(post.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                 <p class="text-gray-600 my-2">${post.contenido.substring(0, 100)}...</p>
                 <a href="#" class="mt-4 text-coral-red font-semibold hover:underline">Leer Más &rarr;</a>
            </div>
        `;
        blogContainer.appendChild(postElement);

        // Aplicar animación con un pequeño retraso escalonado
        setTimeout(() => {
            postElement.classList.add('fade-in');
        }, index * 150);
    });
}
